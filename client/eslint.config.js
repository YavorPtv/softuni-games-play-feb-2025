import js from '@eslint/js';
import globals from 'globals';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist', 'node_modules', 'build'] }, // Ignore build folders
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Support TypeScript if needed
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJsxA11y,
      import: eslintPluginImport,
      'react-refresh': eslintPluginReactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginJsxA11y.configs.recommended.rules,

      // Best practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'import/order': ['error', { 'newlines-between': 'always' }],

      // React-specific rules
      'react/react-in-jsx-scope': 'off', // No need with Next.js / modern setups
      'react/prop-types': 'off', // Useful if using TypeScript
      'react-hooks/exhaustive-deps': 'warn',
      
      // Accessibility
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',

      // Performance
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
