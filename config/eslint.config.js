module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'space-in-parens': ['error', 'never'],
    'react/jsx-curly-spacing': [2, 'never'],
  },

  plugins: ['react', 'react-hooks', 'jsx-a11y'],

  extends: ['zurgbot', 'plugin:jsx-a11y/recommended'],
};
