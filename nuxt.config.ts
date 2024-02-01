export default defineNuxtConfig({
  $development: {
    devtools: { enabled: true },
  },
  rootDir: "./src",

  modules: ["@nuxt/test-utils/module", "@nuxtjs/i18n", "@nuxtjs/storybook"],
  i18n: {
    /** @link https://v8.i18n.nuxtjs.org/guide/lazy-load-translations */
    lazy: true,
    langDir: "locales/",
    defaultLocale: "ja",
    locales: [
      {
        code: "ja",
        iso: "ja-JP",
        file: "ja.ts",
        name: "日本語",
      },
    ],
  },
});
