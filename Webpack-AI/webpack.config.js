const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: "main.js", // Name of the output file
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  mode: 'development', // Set mode (development or production)
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')  // Save fire from dist directory
    },
    compress: true, // Enable gzip compression for faster loading
    port: 9000, // Run the server on localhost:9000
    open: true, // Automatically open the browser
    hot: true, // Enables Hot Module Replacement
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Load and inject CSS files
      }
    ]
  }
}