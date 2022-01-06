const webpack = require("webpack");
const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
	entry: {
		app: "./src/js/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		publicPath: "/",
		clean: true,
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$/,
				include: path.resolve(__dirname, "src"),
				use: ["babel-loader"],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader", // translates CSS into CommonJS modules
						options: {
							modules: {
								mode: "global",
							},
						},
					},
					{
						loader: "postcss-loader", // Run post css actions
						options: {
							postcssOptions: {
								// post css plugins, can be exported to postcss.config.js
								plugins: ["precss", "autoprefixer"],
							},
						},
					},
					{
						loader: "sass-loader", // compiles Sass to CSS
					},
					{
						loader: "sass-resources-loader",
						options: {
							resources: ["src/scss/_variables.scss"],
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif|ico|jpeg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[path][name].[ext]",
						},
					},
				],
			},
		],
	},
	optimization: {
		moduleIds: "deterministic",
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
		minimize: true,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					ecma: undefined,
					warnings: false,
					parse: {},
					compress: true,
					mangle: true, // Note `mangle.properties` is `false` by default.
					module: false,
					output: {
						comments: false,
					},
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: false,
					safari10: false,
				},
			}),
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			favicon: "./src/i/favicon.ico",
		}),
		new DashboardPlugin(),
	],
};

module.exports = (env, argv) => {
	if (argv.mode === "development") {
		config.devtool = "inline-source-map";
		config.performance = {
			hints: false,
		};
		config.optimization.minimize = false;
		config.optimization.usedExports = true;

		config.plugins.push(
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css",
			})
		);
	}

	if (argv.mode === "production") {
		config.performance = {
			hints: "warning",
		};
		config.plugins.push(
			new MiniCssExtractPlugin({
				filename: "[name].[contenthash].css",
				chunkFilename: "[id].[contenthash].css",
			})
		);
	}

	return config;
};
