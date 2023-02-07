const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");


const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
};




module.exports = {
  context: paths.src,
  entry: './index.js',  // точка входа в приложение, наш src/index.ts файл, названием итогового бандла будет имя свойства - app
  output: {
    path: paths.dist,  // путь для результатов сборки 
    // размещаться итоговый бандл, папка dist в корне приложения
    filename: '[name].bundle.js',
    clean: true, // Очищает директорию dist перед обновлением бандла
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
devtool: 'inline-source-map', // дополнительные настройки и загрузчики не требуются, хотя даже официальный рецепт от TypeScript рекомендует source-map-loader и поле в tsconfig - "sourceMap": true 
devServer: {
  static: path.join(__dirname, "src"),
  compress: true,
  port: 4000,
  hot: true, // Включает автоматическую перезагрузку страницы при изменениях
},
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
},
plugins: [
  // new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
      template: './index.html'
  }),
    // генерация html-файла на основе нашего шаблона
  // new ForkTsCheckerWebpackPlugin({
    // async: false,
    // eslint: {
    //   files: "./src/**/*",
    // },
  // }),
]
}