const path = require('path');

module.exports = {
    entry: [
        __dirname + '/src/ui/main.js',
        __dirname + '/src/ui/main.scss'
    ],
    //devtool: 'inline-source-map',
    devServer: {
        static: './',
    },
    output: {
        filename: 'js/main.min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [],
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].min.css'}
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
        //runtimeChunk: 'single',
    },
};