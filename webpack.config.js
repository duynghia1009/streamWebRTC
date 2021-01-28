const webpack = require('webpack')
module.exports = {
    entry: './src/app.js',
    mode: 'production',
    output: {
        filename: './public/bundle.js'
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ]
};