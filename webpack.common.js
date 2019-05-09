module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
     },
     {
        test: /\.js$|\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel']          
        }
      }
    ]
  }  
}
