const webpack = require('webpack');
const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  // 1
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  // 2
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },

  //4
  plugins:  
     //  [new ESLintPlugin()]:
       [new webpack.HotModuleReplacementPlugin()],
     
  // 3
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    hot: true,
  }, 
};

/* 
  The Webpack configuration file gives the following instructions:
        (1) Use the src/index.js file as entry point to bundle it. If the src/index.js file imports other JavaScript files, bundle them as well.
        (2) The bundled source code files shall result in a bundle.js file in the /dist folder.
        (3) The /dist folder will be used to serve our application to the browser.
        (4) Now, all source code that goes through Weback will be checked by ESLint automatically. 
           Once you start your application, it will output an error though: "No ESLint configuration found". You need this 
           file to define your ESLint configuration. Create it in your project's root directory 
           on the command line: 
           touch .eslintrc

           npm install --save-dev @babel/eslint-parser

        
              
  */  
