const path = require("path"),
  webpack = require("webpack"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  TerserPlugin = require("terser-webpack-plugin"),
  {VueLoaderPlugin} = require("vue-loader"),
  utils = require("./utils")

module.exports = env => ({
  context: path.resolve(__dirname, "../src"),
  entry: {
    app: "./app.js"
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "assets/js/[name].[hash:7].bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../src/views"),
  },
  resolve: {
    extensions: [".js"],
    alias: {
      source: path.resolve(__dirname, "../src"), // Relative path of src
      images: path.resolve(__dirname, "../src/assets/images"), // Relative path of images
      fonts: path.resolve(__dirname, "../src/assets/fonts") // Relative path of fonts
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {presets: ["es2015"]}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          env === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 1,
              sourceMap: true,
              minimize: true,
              colormin: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          env === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: true,
              colormin: false
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ico)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 3000,
          name: "assets/images/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(svg|woff|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name: "assets/fonts/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(mp4)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "assets/videos/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          filename: "assets/js/vendor.[hash:7].bundle.js",
          chunks: "all",
          test: /node_modules/
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[hash:7].bundle.css",
      chunkFilename: "[id].css"
    }),
    ...utils.pug(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.$": "jquery",
      "window.jQuery": "jquery",
      Popper: ['popper.js', 'default']
    }),
    new VueLoaderPlugin()
  ]
})
