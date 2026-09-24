"""Simplifica os contornos da Berringer Aged depois do subset.

A textura desgastada da Aged está desenhada nos próprios contornos: cada
letra tem ~650 contornos (quase todos respingos minúsculos) e ~4.400
segmentos de path, contra ~48 da Regular. Rasterizar isso nos tamanhos em
que a fonte é usada (56px no PresentationCard, 216px no marquee de
CenasLamentaveis) custava 1-2s de GPU por vez, e a página congelava no
scroll quando essas seções entravam em vista.

O script faz duas coisas por glifo:
  1. descarta contornos com área abaixo de MIN_AREA (unidades² de uma fonte
     de 1000 UPM) — os respingos mais finos, invisíveis nos tamanhos reais;
  2. achata as curvas restantes em polilinha e reduz os pontos com
     Ramer-Douglas-Peucker, tolerância EPSILON (unidades).

Os valores abaixo são a "v1" validada visualmente contra o original: ~32%
dos segmentos, sem travamento medido no scroll. Tirar menos que isso (área
8, tolerância 0.8, ~63%) ainda deixava engasgos de 100-270ms.

O hinting original é por ponto e não vale para os contornos novos, então as
tabelas dele são removidas (a fonte é só display, em tamanhos grandes).

Uso (a partir desta pasta, depois do subset documentado em lib/fonts.ts):
  python simplify-aged.py BerringerAged.woff2 BerringerAged.woff2
"""

import io
import math
import sys

from fontTools.pens.areaPen import AreaPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.ttLib import TTFont

MIN_AREA = 30
EPSILON = 1.5


def split_contours(ops):
    contours, current = [], []
    for op, args in ops:
        current.append((op, args))
        if op in ("closePath", "endPath"):
            contours.append(current)
            current = []
    return contours


def contour_area(contour):
    pen = AreaPen()
    recording = RecordingPen()
    recording.value = contour
    recording.replay(pen)
    return abs(pen.value)


def flatten(contour):
    """Contorno -> polilinha, amostrando as quadráticas do TrueType."""
    points = []
    for op, args in contour:
        if op in ("moveTo", "lineTo"):
            points.append(args[0])
        elif op == "qCurveTo":
            offs, end = list(args[:-1]), args[-1]
            if end is None:
                continue
            start = points[-1]
            for i, control in enumerate(offs):
                # Entre dois controles off-curve seguidos, o ponto on-curve
                # é implícito, no meio dos dois.
                if i == len(offs) - 1:
                    seg_end = end
                else:
                    nxt = offs[i + 1]
                    seg_end = ((control[0] + nxt[0]) / 2, (control[1] + nxt[1]) / 2)
                steps = max(2, min(8, int(math.dist(start, seg_end) / 15) + 2))
                for k in range(1, steps + 1):
                    t = k / steps
                    points.append((
                        (1 - t) ** 2 * start[0] + 2 * (1 - t) * t * control[0] + t * t * seg_end[0],
                        (1 - t) ** 2 * start[1] + 2 * (1 - t) * t * control[1] + t * t * seg_end[1],
                    ))
                start = seg_end
    if len(points) > 1 and points[0] == points[-1]:
        points.pop()
    return points


def rdp(points, epsilon):
    if len(points) < 3:
        return points
    a, b = points[0], points[-1]
    dx, dy = b[0] - a[0], b[1] - a[1]
    length = math.hypot(dx, dy)
    index, max_dist = 0, -1.0
    for i in range(1, len(points) - 1):
        p = points[i]
        if length > 1e-9:
            dist = abs(dy * p[0] - dx * p[1] + b[0] * a[1] - b[1] * a[0]) / length
        else:
            dist = math.dist(p, a)
        if dist > max_dist:
            index, max_dist = i, dist
    if max_dist <= epsilon:
        return [a, b]
    return rdp(points[: index + 1], epsilon)[:-1] + rdp(points[index:], epsilon)


def rdp_closed(points, epsilon):
    # Contorno fechado: parte no ponto mais distante do primeiro, pra RDP não
    # tratar o início/fim como uma reta degenerada.
    if len(points) < 4:
        return points
    far = max(range(len(points)), key=lambda i: math.dist(points[0], points[i]))
    first = rdp(points[: far + 1], epsilon)[:-1]
    second = rdp(points[far:] + [points[0]], epsilon)[:-1]
    return first + second


def main(src, dst):
    # Lê tudo pra memória antes: o uso documentado sobrescreve o próprio
    # arquivo de entrada, e o TTFont lê tabelas do disco sob demanda.
    with open(src, "rb") as file:
        font = TTFont(io.BytesIO(file.read()))
    glyph_set = font.getGlyphSet()
    glyf = font["glyf"]
    before = after = 0

    for name in font.getGlyphOrder():
        glyph = glyf[name]
        if glyph.isComposite() or glyph.numberOfContours <= 0:
            continue
        recording = RecordingPen()
        glyph_set[name].draw(recording)
        pen = TTGlyphPen(None)
        for contour in split_contours(recording.value):
            before += len(contour)
            if contour_area(contour) < MIN_AREA:
                continue
            points = rdp_closed(flatten(contour), EPSILON)
            if len(points) < 3:
                continue
            points = [(round(x), round(y)) for x, y in points]
            pen.moveTo(points[0])
            for point in points[1:]:
                pen.lineTo(point)
            pen.closePath()
            after += len(points) + 1
        glyf[name] = pen.glyph()

    for tag in ("fpgm", "prep", "cvt ", "hdmx", "VDMX"):
        if tag in font:
            del font[tag]
    font["maxp"].maxSizeOfInstructions = 0

    font.flavor = "woff2"
    font.save(dst)
    print(f"segmentos de path: {before} -> {after} ({after / before:.0%})")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
