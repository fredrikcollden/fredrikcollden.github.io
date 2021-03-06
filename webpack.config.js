const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        __dirname + '/src/ui/main.js',
        __dirname + '/src/ui/main.scss'
    ],
    //devtool: 'inline-source-map',
    devServer: {
        static: './',
        client: {
            overlay: false,
        },
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
                use: {
                    loader: "babel-loader",
                },
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
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
              { from: "src/ui/images", to: "images" }
            ],
          }),
    ],
    optimization: {
        //runtimeChunk: 'single',
    },
};