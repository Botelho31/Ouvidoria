module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint'
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-var-requires': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
}
