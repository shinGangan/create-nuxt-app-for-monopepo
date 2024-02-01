import type { StorybookConfig } from "@storybook-vue/nuxt";
import { resolve } from "pathe";

const config: StorybookConfig = {
  stories: [resolve("src/**/*.stories.ts")],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
