import { defineVitestConfig } from "@nuxt/test-utils/config";
import { resolve } from "pathe";

export default defineVitestConfig({
  test: {
    includeSource: [resolve("src/**/*.{js,ts,vue}")],
    exclude: ["node_modules", ".git", "dist", "configs"],
  },
  define: {
    "import.meta.vitest": false,
  },
});
