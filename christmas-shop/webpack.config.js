const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
  entry: "./src/index.js",
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
      filename: "index.html",
      favicon: "src/assets/images/icon.svg",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/gifts.html",
      filename: "gifts.html",
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
    new SpriteLoaderPlugin(),
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(webp|avif|png)$/i,
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
      {
        test: /\.json$/,
        type: "json",
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "src/assets/svg"),
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              symbolId: "[name]",
            },
          },
        ],
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
