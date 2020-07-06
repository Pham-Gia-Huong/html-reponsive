const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const appName = 'reponsive';

module.exports = (env = {}) => {
  return {
    mode: 'development',
    entry: path.resolve('src'),
    output: {
      filename: appName + '.min.js',
      path: path.resolve('dist'),
      libraryTarget: 'umd',
      globalObject: 'this',
    },

    module: {
      rules: [
        {
          test: /\.(tsx|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|jpg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    devtool: 'inline-source-map',
    devServer: {
      open: true,
      hot: true,
      port: 8080,
      historyApiFallback: true,
    },

    optimization: {
      usedExports: true,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss', '.jsx'],
      alias: {
        components: path.resolve('src/components'),
      },
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/html/index.html',
        filename: 'index.html',
      }),
      new CopyPlugin({
        patterns: [
          // {from: path.resolve('public/fonts/**/*'), to: 'dist/font'},
          {from: path.resolve('public/image'), to: 'image'},

          {from: path.resolve('public/html/index.html'), to: '../esm/html'},
        ],
      }),
    ],
  };
};
