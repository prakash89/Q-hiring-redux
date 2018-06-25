import path from 'path';
import webpack from 'webpack';


export default {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.scss', '.css', '.json']
  },
  devServer: {
    disableHostCheck: true,
    host: 'localhost',
    port: 8080
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
    ]
  }
};
