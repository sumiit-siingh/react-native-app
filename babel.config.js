module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',        // handles JSX, Flow, etc.
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: [
      'tailwindcss-react-native/babel', // Tailwind support
      // 'expo-router/babel' ← ❌ REMOVE THIS
    ],
  };
};
