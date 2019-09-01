const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        },

        // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },

        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    })
  ]
}
