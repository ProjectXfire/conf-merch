const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js', // Entrada de nuestro archivo principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Ruta donde se creara el archivo
    filename: 'bundle.js', // Nombre del archvo que se creara
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '.js', '.jsx' // Resuelve las extensiones con la que vamos a trabajar
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Extensiones que vamos a transformar
        exclude: /node_modules/, // Excluimos la carpeta node_modules
        use: {
          loader: 'babel-loader' // Usar babel para que interprete nuestro codigo y pueda usarse en
        }                        // cualquier navegador
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // Genera nuestro .html e injecta nuestros bundles
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new DotenvWebpackPlugin(),
  ],
  devServer: { // Configuracion de nuestro servidor
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
    open: true,
    historyApiFallback: true,
  },
};