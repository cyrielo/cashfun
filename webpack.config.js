const path = require("path");
const extractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new extractTextPlugin({
  filename: 'dist/bundle.min.css'
});

const config = {

  entry: path.resolve(__dirname, "src/") + "/index.js",

  output: {
    "path": path.resolve(__dirname, "public"),
    "filename": "dist/bundle.min.js"
  },

  module: {
    "rules": [{
      test: /.js$/,
      exclude: path.resolve(__dirname, "node_modules/"),
      loader: "babel-loader"

    },
    {
      test: /.scss$/,
      use: extractPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"]
      })
    }]
  },

  devServer: {
    contentBase: 'public/',
    inline: true,
    port: 3000
  },

  plugins: [
    extractPlugin
  ]
};

module.exports = config;
