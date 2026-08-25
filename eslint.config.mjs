import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,
  {
    // eslint-config-next auto-detects the app/pages directory relative to
    // the eslint root; in this monorepo the Next.js apps live under
    // apps/* and packages/*, so no-html-link-for-pages needs explicit dirs.
    rules: {
      "@next/next/no-html-link-for-pages": [
        "error",
        ["apps/web/app", "packages/design-system/app"],
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  // Unprefixed patterns only match at the repo root — in this npm
  // workspaces monorepo, each package under apps/* and packages/* builds
  // its own .next/, so patterns need the "**/" prefix to match at any depth.
  globalIgnores([
    // Default ignores of eslint-config-next:
    "**/.next/**",
    "**/out/**",
    "**/build/**",
    "**/next-env.d.ts",
  ]),
]);

export default eslintConfig;
