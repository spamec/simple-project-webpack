var config = {
    use: [
        'postcss-cssnext',
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
        require('cssnano')({
            preset: 'default',
        }),
    ],
    // Other options such as input and output
};

module.exports = config;



