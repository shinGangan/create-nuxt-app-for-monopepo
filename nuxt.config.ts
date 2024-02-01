export default defineNuxtConfig({
  $development: {
    devtools: { enabled: true },
  },
  rootDir: "./src",

  modules: ["@nuxt/test-utils/module", "@nuxtjs/storybook"],
});
