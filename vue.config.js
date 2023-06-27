const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'Music App',
    themeColor: '#2cb7b7',
    manifestOptions: {
      short_name: 'Music',
    },
  },
});
