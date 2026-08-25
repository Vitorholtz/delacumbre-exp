type PinIconSize = "md" | "sm";

type PinIconProps = {
  size?: PinIconSize;
  className?: string;
};

const pinBySize: Record<PinIconSize, { viewBox: string; path: string }> = {
  md: {
    viewBox: "0 0 25 24",
    path: "M12.5 23C12.5 23 21.875 17 21.875 9.99998C21.875 7.61303 20.8873 5.32385 19.1291 3.63602C17.371 1.94819 14.9864 0.999984 12.5 0.999984C10.0136 0.999984 7.62903 1.94819 5.87087 3.63602C4.11272 5.32385 3.125 7.61303 3.125 9.99998C3.125 17 12.5 23 12.5 23ZM16.6667 10.0328C16.6667 12.2057 14.8012 13.9672 12.5 13.9672C10.1988 13.9672 8.33334 12.2057 8.33334 10.0328C8.33334 7.85987 10.1988 6.09836 12.5 6.09836C14.8012 6.09836 16.6667 7.85987 16.6667 10.0328Z",
  },
  sm: {
    viewBox: "0 0 21 20",
    path: "M10.5 19.1666C10.5 19.1666 18.375 14.1667 18.375 8.33332C18.375 6.34419 17.5453 4.43654 16.0685 3.03002C14.5916 1.6235 12.5886 0.83332 10.5 0.83332C8.41142 0.83332 6.40838 1.6235 4.93153 3.03002C3.45469 4.43654 2.625 6.34419 2.625 8.33332C2.625 14.1667 10.5 19.1666 10.5 19.1666ZM14 8.36066C14 10.1714 12.433 11.6393 10.5 11.6393C8.56701 11.6393 7 10.1714 7 8.36066C7 6.54989 8.56701 5.08197 10.5 5.08197C12.433 5.08197 14 6.54989 14 8.36066Z",
  },
};

/**
 * Pin de localização exportado do Figma como SVG (curvas não batem com o
 * glyph "location_on" do Material Symbols Sharp usado no resto do DS).
 * Componente próprio em vez de path duplicado dentro de cada consumidor.
 */
export default function PinIcon({ size = "md", className }: PinIconProps) {
  const pin = pinBySize[size];

  return (
    <svg
      className={className}
      viewBox={pin.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={pin.path}
        fill="currentColor"
      />
    </svg>
  );
}
