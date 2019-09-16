module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
      },
    ],
    'consistent-this': ['error', 'self'],
    semi: ['error', 'never'],

    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/no-direct-mutation-state': 'error',
    'react/sort-prop-types': 'error',
    'react/forbid-prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/sort-prop-types': 'error',

    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
      },
    ], // airbnb is allowing some edge cases
    'import/no-extraneous-dependencies': 0,
  }
};
