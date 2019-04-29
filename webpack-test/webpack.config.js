const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(mp4)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};