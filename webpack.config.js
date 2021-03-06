const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/pages/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: __dirname + '/src/scripts/app.js',
  mode: 'development',
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
            sideEffects: true,
          },
          {
            test: /\.(ttf|eot|svg|gif|woff|woff2|gif|svg|jpg|png)$/,
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  output: {
    // filename: 'app.js',
    filename: 'app.[contenthash].js',
    path: __dirname + '/public',
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
  },
};
