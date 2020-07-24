if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '../../.env.development' });
} else {
  require('dotenv').config({ path: '../../.env' });
}

const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

console.log('==== build SERVER ', process.env.NODE_ENV);

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new webpack.HotModuleReplacementPlugin()
];

module.exports = {
  target: 'node',
  externals: [
    nodeExternals()
  ],
  plugins,
  entry: {
    api: path.resolve(__dirname, '.build/server/entry'),
  },
  output: {
    path: path.resolve(__dirname, '../../functions/server'),
    filename: 'bundle.js',
    libraryTarget: 'this',
    globalObject: 'this',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/transform-runtime']
            },
          },
        ]
      }
    ]
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.js','.ts','.graphql']
  }
};
