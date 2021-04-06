const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './js/pricingbycountry.js',
    output: {
        path: __dirname + '/js',
        filename: 'pricingbycountry.min.js'
    },
    // optimization: {
    //     minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }],
    },
};