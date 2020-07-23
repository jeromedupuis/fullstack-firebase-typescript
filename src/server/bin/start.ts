const path = require("path");
require("@babel/register");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '../../.env.development' });
}

require(path.resolve(__dirname, "../entry"));
