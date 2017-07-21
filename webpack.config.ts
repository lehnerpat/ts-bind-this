import * as webpack from 'webpack';
import * as path from 'path';

declare var __dirname;

import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const outputFolder = path.resolve(__dirname, 'dist');

const config: webpack.Configuration = {
    entry: './src/main.ts',

    /** https://webpack.js.org/configuration/devtool/ */
    devtool: 'inline-source-map',

    /** https://webpack.js.org/configuration/dev-server/ */
    devServer: {
        contentBase: outputFolder,
        overlay: true
    },

    /** https://webpack.js.org/configuration/output/ */
    output: {
        path: outputFolder,
        filename: '[name].[chunkhash].bundle.js'
    },

    resolve: {
        /** https://webpack.js.org/configuration/resolve/#resolve-extensions */
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        /** https://webpack.js.org/configuration/module/#module-rules */
        rules: [
            /** https://github.com/TypeStrong/ts-loader */
            { test: /\.tsx?$/, loader: 'ts-loader' },

            /**
             * https://github.com/webpack-contrib/css-loader
             * https://github.com/webpack-contrib/style-loader
             */
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },

    plugins: [
        /** https://github.com/jantimon/html-webpack-plugin */
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

};

export default config;