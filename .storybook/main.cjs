module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-ally"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true
  },
  "staticDirs": [
    "../public"
  ],
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/project-figma-to-code-ignite-lab/'
    }

    return config
  }
}