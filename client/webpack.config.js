const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const Dotenv = require("dotenv-webpack");
const {SourceMapDevToolPlugin} = require("webpack");

dotenv.config();

module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash].js",
		publicPath: "/",
	},
	watch: true,
	devServer: {
		port: 3000,
		historyApiFallback: true,
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
		}),
		new CleanWebpackPlugin(),
		new Dotenv(),
		new SourceMapDevToolPlugin({
			filename: "[file].map",
		}),
	],

	module: {
		rules: [
			{
				test: /\.(less|css)$/i,
				use: [
					{loader: "style-loader"},
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[local]_[hash:base64:5]",
							},
						},
					},
					{loader: "less-loader"},
				],
			},
			{
				test: /\.(jpeg|jpg|svg|png)$/,
				use: ["file-loader"],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "ts-loader",
			},
			{
				test: /\.m?js$/,
				enforce: "pre",
				use: ["source-map-loader"],
			},
		],
	},
	resolve: {
		fallback: {
			fs: false,
			path: require.resolve("path-browserify"),
			os: require.resolve("os-browserify/browser"),
		},
		extensions: [".tsx", ".ts", ".js"],
	},
};
