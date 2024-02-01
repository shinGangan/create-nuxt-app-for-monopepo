// @ts-check
/**
 * @type {import('eslint').ESLint.ConfigData}
 * @see GitHub: {@link https://github.com/nuxt/eslint-config/ | nuxt/eslint-config}
 *
 * @see GitHub: {@link https://github.com/veritem/eslint-plugin-vitest/ | eslint-plugin-vitest}
 * - Rule1: {@link https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md | consistent-test-it}
 * - Rule2: {@link https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md | require-top-level-describe}
 *
 * @see GitHub: {@link https://typescript-eslint.io/rules/ | @typescript-eslint/eslint-plugin}
 * - Rule1: {@link https://typescript-eslint.io/rules/explicit-function-return-type/ | explicit-function-return-type} - Return Typesの明示を必須にする
 * - Rule2: {@link https://typescript-eslint.io/rules/consistent-type-imports/ | consistent-type-imports} - 型のimportを必須にする
 */
export default {
  root: true,
  ignorePatterns: [
    "**/dist/*",
    "**/node_modules/*",
    "**/coverage/*",
    "**/.nuxt/*",
    "**/.output/*",
    ".vscode/*",
    ".github/*",
    // NOTE: configs直下も対象から外しておく
    "configs/*"
  ],
  env: {
    browser: true,
  },
  extends: ["@nuxt/eslint-config", "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-imports": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.mts", "*.vue"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            disallowTypeAnnotations: false,
          },
        ],
      },
    },
  ],
};
