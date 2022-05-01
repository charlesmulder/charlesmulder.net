const path = require('path');

module.exports = {
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
