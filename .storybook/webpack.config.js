const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const path = require('path');

module.exports = ({config}) => {

  config.module.rules.push({
    test: /\.jsx?$/, use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          "presets": [
            [
              "@babel/preset-env", {
              "useBuiltIns": "usage",
              "corejs": 2
            }
            ],
            "@babel/preset-react"
          ],
          "plugins": [
            "react-hot-loader/babel"
          ]
        }
      },
      {
        loader: 'eslint-loader',
      },
    ],
    exclude: /node_modules/,
  });

  config.module.rules.push({
    test: /\.(scss)$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader', options: {
          modules: true,
          sourceMap: true,
          localIdentName: '[local]__[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader', options: {
          plugins: [
            autoprefixer(),
          ],
        },
      },
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });
  config.plugins.push(new MiniCssExtractPlugin());
  config.node = {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  };

  config.devServer = {
    inline: true,
    hot: true
  };

  return config;
};
