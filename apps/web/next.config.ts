import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@delacumbre/design-system"],
  images: {
    // Necessário pro next/image servir os SVGs locais em public/ (ex: logo
    // do Hero) — seguro aqui porque os arquivos são nossos, não upload de
    // terceiros.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
