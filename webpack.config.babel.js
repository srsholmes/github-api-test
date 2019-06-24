import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export default function (env, arg) {

  const mode = arg.mode || 'development';
  const isDev = (mode === 'development');

  return {
    entry: {
      hotLoader: 'react-hot-loader/patch',
      main: './src/index.jsx'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {}
            },
            {
              loader: 'eslint-loader',
              options: {
                fix: true
              }
            }
          ]
        },
        {
          test: /\.scss?$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                camelCase: true,
                localIdentName: '[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer()
                ]
              }
            },
            'sass-loader'
          ]
        }
      ]
    },

    plugins: [
      new StylelintWebpackPlugin({}),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new Dotenv()

    ],

    devServer: {
      port: 3000,
      hot: true,
      inline: true
    },

    mode: mode,
    devtool: 'source-map',
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    performance: {
      hints: false
    },
    stats: {
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      // our additional options
      moduleTrace: true,
      errorDetails: true
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      },
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            ecma: 6,
            warnings: false,
            parse: {},
            compress: {
              inline: true,
              drop_console: !isDev,
              dead_code: true,
              sequences: true,
              passes: 1,
              conditionals: true,
              booleans: true,
              unused: true,
              if_return: true,
              join_vars: true
            },
            mangle: !isDev,
            module: false,
            output: {
              comments: false
            },
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: false,
            keep_fnames: false,
            safari10: false
          }
        })
      ]
    }
  };
}
