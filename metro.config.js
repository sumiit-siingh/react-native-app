const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add Tailwind CSS React Native transformer
config.transformer.babelTransformerPath = require.resolve('tailwindcss-react-native/transformer');

module.exports = config;