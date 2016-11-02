
const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const combineLoaders = require('webpack-combine-loaders');

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),

  devServer: {
    https: true,
    host: '0.0.0.0',
    port: '8000',

    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: true,
    compress: true,

    hot: true,
    inline: true,

    // --progress - [assets, children, chunks, colors, errors, hash, timings, version, warnings]
    stats: {
      assets: true,
      children: true,
      chunks: false,
      colors: true,
      errors: true,
      errorDetails: true, //depends on {errors: true}
      hash: true,
      modules: false,
      publicPath: true,
      reasons: false,
      source: true, //what does this do?
      timings: true,
      version: true,
      warnings: true
    }
  },

  // devtool: 'cheap-module-eval-source-map', //javascript sourcemaps
  devtool: 'eval', //javascript sourcemaps

  entry: {
    app: [
      'react-hot-loader/patch',
      './app/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'src/app')
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url',
        query: {
          limit: 25000
        },
        include: [
          path.resolve(__dirname, 'src/app/assets')
            ]
      },
      {
        test: /\.svg$/,
        loader: 'file',
        include: [
          path.resolve(__dirname, 'src/app/assets')
            ]
      },

      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/app/styles'),
          path.resolve(__dirname, 'src/app/views')
        ],
        loader: combineLoaders([
          {
            loader: 'style'
          },
          {
            loader: 'css',
            query: {
              modules: true,
              sourceMap: true,
              localIdentName: '[folder]__[local]--[hash:base64:10]'
            }
          },
          {
            loader: 'postcss'
          },



        ])
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true,
      hash: true,
      cache: true,
      chunks: ['app'],
      chunksSortMode: 'dependency',
      showErrors: true
    }),
    // Enable multi-pass compilation for enhanced performance
    // in larger projects. Good default.
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    //see possible syntax errors at the browser console instead of hmre overlay
    new webpack.NoErrorsPlugin()
  ],

  postcss: (webpack) => {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
        path: [ 'styles', 'views'],
        root: path.resolve(__dirname, 'src/app'),
        skipDuplicates: true
      }),
      require('postcss-cssnext')()
    ];
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = validate(webpackConfig, {
  rules: {
    'no-root-files-node-modules-nameclash': true, //default
    'loader-enforce-include-or-exclude': false,
    'loader-prefer-include': true
  }
});
