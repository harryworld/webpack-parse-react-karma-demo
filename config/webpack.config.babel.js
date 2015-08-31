var fs                = require('fs');
var React             = require('react');
var path              = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack           = require('webpack');
var merge             = require('webpack-merge');
var Clean             = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var App               = require('../app/components/App.jsx');
var pkg               = require('../package.json');

var clientAppPath     = path.join(__dirname, '../app/');

var TARGET = process.env.npm_lifecycle_event;
var CONFIG_PATH = path.resolve(__dirname);
var ROOT_PATH = path.resolve(CONFIG_PATH, '../');

var common = {
  entry: clientAppPath + 'main',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(CONFIG_PATH, '../build'),
    filename: 'bundle.js'
  },
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          // we are using `eslint-loader` explicitly since
          // we have ESLint module installed. This way we
          // can be certain that it uses the right loader
          loader: 'eslint-loader',
          include: clientAppPath
        }
      ],
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
        },
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: clientAppPath
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({
        title: pkg.title
      })
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      app: clientAppPath + 'main',
      vendor: Object.keys(pkg.dependencies)
    },
    output: {
      path: path.resolve(CONFIG_PATH, '../build'),
      filename: 'app.[chunkhash].js'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: clientAppPath
        },
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: clientAppPath
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new Clean(['build'], ROOT_PATH),
      new webpack.optimize.CommonsChunkPlugin(
        'vendor',
        'vendor.[chunkhash].js'
      ),
      new webpack.DefinePlugin({
        'process.env': {
          // This affects react lib size
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlwebpackPlugin({
        title: pkg.title,
        templateContent: renderTemplate(
          fs.readFileSync(clientAppPath + 'templates/index.tpl', 'utf8'),
          {
            app: React.renderToStaticMarkup(<App />)
          }
        )
      })
    ]
  });
}

function renderTemplate(template, replacements) {
  return function() {
    return template.replace(/%(\w*)%/g, function(match) {
      var key = match.slice(1, -1);

      return replacements[key] ? replacements[key] : match;
    });
  };
}