const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const PACKAGE = require('./package.json');
const WebpackBar = require('webpackbar');

const sourcePath = path.join(__dirname, './src');
const staticsPath = path.join(__dirname, './build');
const port = 8080;

process.traceDeprecation = true;

module.exports = function(env, argv) {
  const isProd = argv.mode === 'production';

  const plugins = [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(argv.mode)
    }),
    new WebpackBar({ name: 'Kathy Luu - Portfolio', color: '#08708a' })
  ];

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 0,
        minRatio: 0.9,
        deleteOriginalAssets: false
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: './template/index.ejs',
        appMountId: 'app',
        title: 'Kathy Luu',
        mobile: true,
        hash: false,
        favicon: './template/favicon.png',
        minify: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        output: {
          path: 'build'
        },
        meta: [{
          name: 'Description',
          content: 'Kathy Luu - Frontend Engineer at Doctor.com'
        }, {
          name: 'theme-color',
          content: '#08708a'
        }]
      }),
      new webpack.BannerPlugin({
        banner:
          'Version: ' +
          PACKAGE.version +
          ' Date: ' +
          parseInt(new Date().getMonth() + 1) +
          '/' +
          new Date().getDate() +
          '/' +
          new Date().getFullYear() +
          ' @ ' +
          new Date().getHours() +
          ':' +
          new Date().getMinutes()
      }),
      new ExtractTextPlugin(isProd ? 'styles.[hash:6].css' : 'styles.[chunkhash:6].css')
    );
  } else {
    plugins.push(
      new BrowserSyncPlugin(
        // BrowserSync options
        {
          host: 'localhost',
          port: port,
          open: false,
          // proxy the Webpack Dev Server endpoint
          // (which should be serving on http://localhost:8080/)
          // through BrowserSync
          proxy: 'http://localhost:8080/',
          logPrefix: 'KL'
        },
        // plugin options
        {
          reload: true
        }
      ),
      new CaseSensitivePathsPlugin(),
      new DuplicatePackageCheckerPlugin(),
      new StyleLintPlugin({
        files: './app/assets/scss/**/*.scss'
      }),
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(false),
        PORT: JSON.stringify(port)
      })
    );
  }

  return {
    devtool: isProd ? 'hidden-source-map' : 'eval',
    context: sourcePath,
    entry: {
      js: [
        // react-error-overlay
        !isProd && 'react-dev-utils/webpackHotDevClient',
        // polyfills
        'babel-polyfill',
        'whatwg-fetch',
        // app entry
        'app.js'
      ].filter(Boolean)
    },
    output: {
      path: staticsPath,
      filename: isProd ? '[name].bundle.[hash:6].js' : '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: 'url-loader'
        },

        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {
            loader: 'html-loader'
          }
        },

        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: {
            fix: false
          }
        },

        {
          test: /\.(scss|css)$/,
          // exclude: /node_modules/,
          use: isProd // If Prod
            ? ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
            : // Else

              [
                {
                  loader: 'style-loader',
                  options: {
                    sourceMap: false
                  }
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
        },

        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },

        {
          test: /\.(png|jpg|mp4)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'url-loader',
              options: {
                query: {
                  name: 'app/assets/images/[name].[ext]'
                }
              }
            }
          ]
        },

        {
          test: /\.svg$/,
          loader: 'raw-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [path.resolve(__dirname, 'node_modules'), sourcePath],
      alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
      }
    },

    plugins,

    performance: isProd && {
      maxAssetSize: 600000,
      maxEntrypointSize: 600000,
      hints: 'warning'
    },

    stats: {
      colors: {
        green: '\u001b[32m'
      }
    },

    devServer: {
      contentBase: './src',
      historyApiFallback: true,
      port: port,
      compress: isProd,
      inline: !isProd,
      hot: false,
      quiet: true,
      overlay: {
        errors: true,
        warnings: true
      },
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m'
        }
      }
    }
  };
};
