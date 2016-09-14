var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'x-router-swig.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'x-router-swig.js',
    library: 'xrouterswig',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  node: {
    __dirname: false,
    __filename: false,
    fs: 'empty'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({sourceMap:true})
  ]
};
