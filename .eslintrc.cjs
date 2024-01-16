module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:eslint-comments/recommended',
    // Turns off all rules that are unnecessary or might conflict with Prettier.
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // parserOptions.project tells our parser how to find the TSConfig for each source file (true indicates to find the closest tsconfig.json for each source file)
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', '@typescript-eslint', 'import', 'eslint-comments', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // compatible with .prettierrc at root
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        tabWidth: 2,
        semi: true,
      },
    ],
    /**
     * import
     * @see https://github.com/import-js/eslint-plugin-import
     */
    'import/no-unresolved': 'off',
    'import/no-duplicates': 'error',
    // @see https://typescript-eslint.io/blog/consistent-type-imports-and-exports-why-and-how/#benefits-of-enforcing-type-only-importsexports
    // @see https://swc.rs/docs/migrating-from-tsc#verbatimmodulesyntax-true
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'separate-type-imports',
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    'eslint-comments/no-unused-disable': 'error',
  },
  overrides: [
    // @typescript-eslint不对js(x)文件生效
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['**/*.{cjs,js,jsx}'],
    },
  ],
};
