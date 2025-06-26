module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: [
      'tailwindcss-react-native/babel',
      'react-native-reanimated/plugin', // Keep this last
    ],
  };
};