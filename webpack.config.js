const path =require('path')

module.exports = {
    entry: './static/js/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    mode: 'development',
}