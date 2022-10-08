module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
  },
  extends: [
    'airbnb/base',
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'no-shadow': 'off',
  },
};
