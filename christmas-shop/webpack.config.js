const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // точка входа
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: false,
    port: 3000,
    open: false,
    hot: true,
  },
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "src/assets/images/icon.svg",
      inject: "body",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images"),
          to: "images",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "src/components"),
          path.resolve(__dirname, "src/assets/scss"),
        ],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|webp|avif|png)$/i,
        include: [path.resolve(__dirname, "src/assets/images")],
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2)$/i,
        include: path.resolve(__dirname, "src/assets/fonts"),
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src/components"),
          path.resolve(__dirname, "src/assets/js"),
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".scss", ".html"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
