const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylishPlugin = require('eslint/lib/cli-engine/formatters/stylish');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dotenv = require('dotenv').config({
    path: '.env',
});
// const getEnvVariables = require('./env.js');

const appBase = process.cwd();
const eslintFile = path.resolve(appBase, '.eslintrc-loader.js');
const appSrc = path.resolve(appBase, 'src/');
const appDist = path.resolve(appBase, 'build/');
const appIndexJs = path.resolve(appBase, 'src/index.tsx');
const appIndexHtml = path.resolve(appBase, 'public/index.html');
const appFavicon = path.resolve(appBase, 'public/favicon.ico');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'base-scss': path.resolve(appBase, 'src/stylesheets/'),
            'rs-scss': path.resolve(appBase, 'src/vendor/react-store/stylesheets/'),
        },
        symlinks: false,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: appSrc,
                use: [
                    'cache-loader',
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            configFile: eslintFile,
                            // NOTE: adding this because eslint 6 cannot find this
                            // https://github.com/webpack-contrib/eslint-loader/issues/271
                            formatter: StylishPlugin,
                        },
                    },
                ],
            },
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src'],
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                include: appSrc,
                use: [
                    'style-loader',
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]_[local]_[hash:base64]',
                            },
                            localsConvention: 'camelCase',
                            sourceMap: true,
                        },
                    },
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': dotenv.pared,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
    ],
};
