export default defineNuxtConfig({
  $development: {
    devtools: { enabled: true },
  },
  rootDir: "./src",

  modules: ["@nuxtjs/storybook"],
});
