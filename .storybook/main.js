/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../**/*.mdx",
    "../*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../screens/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
