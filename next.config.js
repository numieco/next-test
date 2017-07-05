const path = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  distDir: 'public',

  // exportPathMap: function () {
  //   return {
  //     "/": { page: "/" }
  //   }
  // },

  webpack: (config, { dev }) => {
    config.plugins.push(
      new ExtractTextPlugin({
        filename: 'style.css',
        allChunks: true
      })
    )
    config.module.loaders = [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use : 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded'}),
        exclude: ['node_modules']
      }    
    ]
    config.module.rules.push(
      {
        test: /\.(css|sass)/,
        loader: 'emit-file-loader',
        options: {
          name: 'public/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    ,
      {
        test: /\.sass$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    return config
  }
}
