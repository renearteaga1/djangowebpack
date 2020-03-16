const path = require('path');
const bundlerTracker = require('webpack-bundle-tracker');
const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
]

module.exports = {
    entry: './static/js/script.js',
    output: {
        filename: 'bundle-[hash].js',
        path: path.resolve(__dirname, 'dist/js')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 8080
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    },
    plugins: [
        new bundlerTracker({filename: './webpack-stats.json'}),
    ],
}