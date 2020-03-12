const path = require('path')
const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
]

module.exports = {
    entry: './static/js/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    devServer: {
        contentBase: path.join(__dirname, 'static'),
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
    }
}