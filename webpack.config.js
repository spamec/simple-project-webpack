const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.min.js'
    }
};