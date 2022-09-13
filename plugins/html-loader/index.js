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
              options: {
                caseSensitive: false,
                collapseWhitespace: false,
                conservativeCollapse: false,
                keepClosingSlash: false,
                minifyCSS: false,
                minifyJS: false,
                removeComments: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkTypeAttributes: false,
              },
            },
          ],
        },
      };
    },
  };
};
