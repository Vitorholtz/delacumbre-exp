import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@delacumbre/design-system"],
  images: {
    // AVIF antes de webp: a ordem define a preferência quando o Accept do
    // navegador casa com mais de um formato.
    formats: ["image/avif", "image/webp"],
    // Default é 4h. Os assets são versionados pelo nome do arquivo, então
    // reotimizar a cada 4h só gasta origem à toa.
    minimumCacheTTL: 31536000,
    // Necessário pro next/image servir os SVGs locais em public/ que
    // sobraram (torn-edge, delacumbre-sons) — seguro aqui porque os
    // arquivos são nossos, não upload de terceiros.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
