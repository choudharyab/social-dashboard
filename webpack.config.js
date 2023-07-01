const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const APP_DIR = path.join(__dirname + "/src");
const BUILD_DIR = path.resolve(__dirname + '/public/build');
const PUBLIC_DIR = path.resolve(__dirname + '/public');
const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const isProduction = LAUNCH_COMMAND === 'prod'
const webpack = require("webpack");

module.exports = {
  mode: isProduction === "prod" ? 'production' : 'development',
  entry: APP_DIR + "/index.js",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  output: {
    filename: "bundle.js",
    path: BUILD_DIR
  },
  devtool: isProduction === "prod" ? 'source-map' : 'inline-source-map',

  stats: {
    children: true,

  },
  resolve: {
    fallback: {
      stream: false,
    },
    extensions: ['.jsx', '.js', '.json'],

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PUBLIC_DIR + "/index.html"),
      favicon: path.join(PUBLIC_DIR + '/favicon.ico'),
      manifest: path.join(PUBLIC_DIR + '/manifest.json'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(APP_DIR, 'assets'),
          to: path.resolve(BUILD_DIR, 'assets'),
        }
      ],
    }),
    new webpack.HotModuleReplacementPlugin()

  ],
  devServer: {
    // port: PORT, // you can change the port
    // hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
          options: { presets: ['@babel/env', '@babel/preset-react'] },

        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};
