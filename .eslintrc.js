module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    '@react-native-community',
  ],

  plugins: ['@typescript-eslint'],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  
  rules: {}
};
