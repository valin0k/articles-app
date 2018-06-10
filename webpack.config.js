var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/App.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
  devServer: {
    proxy: [{
      path: '/api/',
      target: 'http://localhost:3001'
    }]
  },
  module: {
        loaders: [{
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            }, {
              test: /\.css/,
              loaders: ['style-loader', 'css-loader']
            }
        ]
    }
}
