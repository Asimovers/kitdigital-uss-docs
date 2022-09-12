module.exports = function (context, options) {
  return {
    name: "loaders",
    configureWebpack(config, isServer) {
      return {
        cache: false,
        module: {
          rules: [
            {
              test: /\.html$/i,
              loader: "html-loader",
            },
          ],
        
        },
      };
    },
  };
};
