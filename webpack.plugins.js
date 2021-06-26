const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  new MiniCssExtractPlugin(),
  new ForkTsCheckerWebpackPlugin({
    async: false,
  }),
];