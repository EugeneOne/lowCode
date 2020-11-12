module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/variable.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    [
      'assets',
      'components',
      'config',
      'store',
      'filters',
      'layouts',
      'router',
      'utils',
      'views',
    ].forEach((item) => {
      config.resolve.alias.set(`@${item}`, `${__dirname}/src/${item}`);
    });

    // config.plugin('define').tap(args => {
    //   args[0]['process.env'].API_ENV = JSON.stringify(API_ENV || 'development');
    //   args[0]['process.env'].GRAY_ENV = GRAY_ENV;
    //   args[0]['process.env'].MOCK = MOCK;
    //   args[0]['process.env'].SWIMLANE = SWIMLANE;
    //   return args;
    // });
  },
  runtimeCompiler: true,
  devServer: {
    port: 8078,
    disableHostCheck: true,
  },
};
