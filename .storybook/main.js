module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/preset-create-react-app",
  ],
  babel: async (options) => ({
    ...options,
    presets: [
      ...options.presets,
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
          // importSource: "react",
        },
        "preset-react-jsx-transform", // Can name this anything, just an arbitrary alias to avoid duplicate presets'
      ],
    ],
  }),
};
