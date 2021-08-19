const path = require("path"),
  webpack = require("webpack"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  TerserPlugin = require("terser-webpack-plugin"),
  { VueLoaderPlugin } = require("vue-loader"),
  utils = require("./utils");

module.exports = env => ({
  context: path.resolve(__dirname, "../src"),
  entry: ['./app.js', './vue/index.js'],
  // entry: {
  //   app: "./app.js",
  //   // vue: "./vue/index.js"
  // },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "assets/js/[name].bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../src/views")
  },
  resolve: {
    extensions: [".js"],
    alias: {
      source: path.resolve(__dirname, "../src"), // Relative path of src
      images: path.resolve(__dirname, "../src/assets/images"), // Relative path of images
      fonts: path.resolve(__dirname, "../src/assets/fonts"), // Relative path of fonts
      videos: path.resolve(__dirname, "../src/assets/videos")
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
            options: { presets: ["es2015"] }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          env === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
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
          env === "development" ? "style-loader" : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
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
        test: /\.(png|jpg|gif|svg|ico|srt|vtt)(\?.*)?$/,
        loader: "file-loader",
        options: {
          limit: 30000,
          name: "assets/images/[name].[ext]"
        }
      },
      {
        test: /\.(woff|woff2?|eot|ttf|otf|srt|vtt)(\?.*)?$/,
        loader: "url-loader",
        options: {
          name: "assets/fonts/[name].[ext]"
        }
      },
      {
        test: /\.(mp4)(\?.*)?$/,
        loader: "file-loader",
        options: {
          limit: 30000,
          name: "assets/videos/[name].[ext]"
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
          filename: "assets/js/vendor.bundle.js",
          chunks: "all",
          test: /node_modules/
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].bundle.css",
      chunkFilename: "[id].css"
    }),
    ...utils.pug(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.$": "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"]
    }),
    // new webpack.ProvidePlugin({
    //   "videojs": "video.js",
    //   "window.videojs": "video.js"
    // }),
    new VueLoaderPlugin()
  ]
});
