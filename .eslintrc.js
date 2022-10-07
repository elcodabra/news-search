module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    'css-modules',
  ],
  extends: [
    'airbnb/base',
    'eslint:recommended',
    'plugin:react/recommended',
      	'next/core-web-vitals',
    'plugin:css-modules/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'css-modules/no-unused-class': [2, { camelCase: true }],
    'css-modules/no-undef-class': [2, { camelCase: true }],
  },
};
