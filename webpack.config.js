const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    externals: [nodeExternals()],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            include: __dirname,
            exclude: /node_modules/,
        }],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
};
