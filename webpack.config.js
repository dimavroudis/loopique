const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  TerserPlugin = require('terser-webpack-plugin'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const isProduction = process.env.WEBPACK_MODE === "production";

module.exports = {
  entry: {
    main: ["./src/js/main.js", "./src/sass/main.scss"],
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets/"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/.*/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-proposal-class-properties"],
            presets: ["@babel/preset-env"],
            sourceMap: !isProduction,
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
              sourceMap: !isProduction,
            },
          },
          {
            loader: "css-loader", // translates CSS into CommonJS modules
            options: {
              sourceMap: !isProduction,
            },
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              sourceMap: !isProduction,
              plugins: function () {
                // post css plugins, can be exported to postcss.config.js
                return [
                  require("postcss-import"),
                  require("postcss-preset-env"),
                  require("cssnano"),
                ];
              },
            },
          },
          {
            loader: "resolve-url-loader",
            options: {
              sourceMap: !isProduction,
            },
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              sourceMap: !isProduction,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: [/fonts/],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: 'images/'
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: [/images/],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: 'fonts/'
            },
          },
        ],
      },

    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: !isProduction
      }),
      new OptimizeCssAssetsPlugin(),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].css"
    }),
    new BrowserSyncPlugin({
      files: '**/*.php',
      proxy: 'localhost/mavrou',
      injectChanges: true
    })
  ],
};
