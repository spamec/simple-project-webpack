const postcssCustomProperties = require('postcss-custom-properties');

var config = {
    use: [
        'postcss-cssnext',
        'postcss-custom-properties',
        'postcss-import',
        'postcss-custom-properties',
        'postcss-nesting',
        'postcss-calc',

    ],
    'autoprefixer': {
        browsers: '> 5%'
    },
    'postcssCssnext': {
        features: {
            autoprefixer: true
        }
    },
    plugins: [
        postcssCustomProperties(/* pluginOptions */)
        // require('cssnano')({
        //     preset: 'default'
        // }),

    ],
    // Other options such as input and output
};

module.exports = config;



