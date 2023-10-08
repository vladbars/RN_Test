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
          '@utils': './src/utils',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    ],
  ],
}
