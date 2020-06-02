const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: 'app.css',
})

function sassRules() {
  return [
    {
      test: /\.(sass|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      }),
    },
  ]
}

function scriptRules() {
  return [
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: { presets: ['@babel/preset-env'] },
    },
  ]
}

function imagesRules() {
  return [
    {
      test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
      use: ['file-loader'],
    },
  ]
}

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    './resources/assets/scss/main.scss',
    './resources/assets/scripts/index.js',
  ],
  devServer: {
    contentBase: './public',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  module: {
    rules: sassRules()
      .concat(scriptRules())
      .concat(imagesRules()),
  },
  plugins: [
    extractSass,
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
}
