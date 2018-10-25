/*
const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.min.js'
    }
};
*/


const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin({ filename: 'css.bundle.css' })

module.exports = {
    entry: [
        './src/main.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // devtool: "source-map",
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        minimize: true,
                        url: false
                    }
                }
                ]
            })
        },
        ]
    },
    plugins: [
        extractCSS
    ]
};

/*var postcss = require('postcss');
var cssvariables = require('postcss-css-variables');

var fs = require('fs');

var mycss = fs.readFileSync('./src/styles.css', 'utf8');

var output = postcss([
    cssvariables(/!*options*!/)
])
    .process(mycss)
    .css;

fs.writeFile('./dist/styles.css',output)*/
