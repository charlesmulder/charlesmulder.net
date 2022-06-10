const path = require('path');

module.exports = {
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
       test: /\.cow/,
       type: 'asset/resource'
     }
    ]
  },
  resolve: {
    alias: {
      ".cows": "cowsay/cows"
    }
  }
};
