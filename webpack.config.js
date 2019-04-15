const path = require('path');

module.exports = {
    context: __dirname,
    entry: '../../left-punch-right-kick/src/javascripts/left-punch-right-kick.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
    
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
