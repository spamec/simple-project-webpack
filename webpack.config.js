const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin({filename: 'css.bundle.css'});
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
    entry: {
        'bundle.js': [
            './src/main.js'
        ], 'bundle.css': [
            './src/main.css',
            './src/modules/someModule/someModule.css'
        ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader', options: {importLoaders: 1}},
                        {
                            loader: 'postcss-loader', options: {
                                ident: 'postcss',
                                plugins: () => [
                                    postcssCustomProperties(/* pluginOptions */),
                                    require('cssnano')({
                                        preset: 'default'
                                    })
                                ]
                            }
                        }

                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name]"),

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
