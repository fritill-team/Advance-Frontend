const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')
const fs = require("fs");
const path = require("path");
const {glob} = require("glob");
const getDirectories = (src, callback, options = null) => glob.globSync(src, options).map(f => callback(f))


const pages = (env, folder = '') => {
  let rootPagesFolderName = 'pages',
    viewsFolder = paths + `/views/${rootPagesFolderName}/${folder}`,
    pages = []

  fs.readdirSync(viewsFolder).forEach(view => {
    if (view.split('.')[1] === undefined)
      return false;

    const viewName = view.split('.')[0];
    const fileName = folder === '' ? `${viewName}/index.html` : `${folder}/${viewName}/index.html`;
    const options = {
      filename: fileName,
      template: `views/${rootPagesFolderName}/${folder}/${view}`,
      inject: true
    };

    // if (env === 'development') {
    //   options.minify = {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //   };
    // }

    pages.push(new HtmlWebpackPlugin(options));
  })

  return pages;
}

const pugFiles = () => getDirectories(
  paths.src + '/**/*.pug',
  (file) => {
    let dirName = path.dirname(file).split(path.sep).pop(),
      FName = path.basename(file).replace('.pug', '.html'),
      filename = dirName.indexOf('views') === -1 && dirName.indexOf('pages') === -1 ? dirName + path.sep + FName : FName

    return new HtmlWebpackPlugin({filename, template: file, inject: true})
  },
  {
    ignore: ['**/mixins/**', '**/components/**']
  }
)

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/app.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: paths.public,
    //       to: 'assets',
    //       globOptions: {
    //         ignore: ['*.DS_Store'],
    //       },
    //       noErrorOnMissing: true,
    //     },
    //   ],
    // }),

    ...pugFiles(),
    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    // new HtmlWebpackPlugin({
    //   title: 'webpack Boilerplate',
    //   favicon: paths.src + '/images/favicon.png',
    //   template: paths.src + '/template.html', // template file
    //   filename: 'index.html', // output file
    // }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {test: /\.js$/, use: ['babel-loader']},

      // Images: Copy image files to build folder
      {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

      // Fonts and SVGs: Inline files
      {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          data: {
            sidebar: JSON.stringify([
              {
                "title": "Documentation",
                "has_children": true,
                "icon": "fa fa-file",
                "is_active": false,
                "children": [
                  {
                    "title": "Buttons",
                    "url": "/ad-elements/buttons.html",
                    "is_active": false
                  }
                ]
              },
            ])
          }
        }
      },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      // assets: paths.public,
    },
  },
}
