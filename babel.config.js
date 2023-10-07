module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@api': './src/api',
          '@config': './src/config',
          '@screens': './src/screens',
          '@models': './src/models',
          '@styles': './src/styles',
          '@navigation': './src/navigation',
          '@localize': './src/localize',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    ],
  ],
  overrides: [
    {
      test: './node_modules/ethers',
      plugins: [['@babel/plugin-transform-private-methods', {loose: true}]],
    },
  ],
};
