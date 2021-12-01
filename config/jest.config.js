// const expoPreset = require('jest-expo/jest-preset.js')
const jestPreset = require('@testing-library/react-native/jest-preset');

module.exports = {
  rootDir: '../',
  preset: 'react-native',
  testEnvironment: 'node',
  setupFiles: [...jestPreset.setupFiles],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,js,tsx,jsx}',
    '!src/styled-components.ts',
  ],
  clearMocks: true,
};
