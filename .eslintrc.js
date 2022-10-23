const TSCONFIG_PROJECTS = ['tsconfig.eslint.json'];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: TSCONFIG_PROJECTS,
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint', 'testing-library', 'simple-import-sort'],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:testing-library/react',
    'prettier'
  ],
  settings: {
    // Tells eslint-plugin-react to automatically detect the version of React to use.
    react: {
      version: 'detect'
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        project: TSCONFIG_PROJECTS
      }
    }
  },
  rules: {
    // We need to be able to import devDependencies
    'import/no-extraneous-dependencies': ['error', { optionalDependencies: false, peerDependencies: false }],

    // Prevents from writing functions that are too complex (in terms of cyclomatic complexity).
    complexity: [2, 10],

    // Disabled as we're using simple-import-sort plugin.
    'sort-imports': 'off',
    'import/order': 'off',

    // To make imports better searchable we always use named exports.
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    // Automatically sorts imports to ensure their consistency.
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // Configure Next Link component
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],

    // In many cases TS infers return type of a function so we don't need to provide it explicitly.
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Enforces some naming conventions across the codebase.
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        leadingUnderscore: 'allow',
        format: null
      },
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'parameter', format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow' },
      { selector: 'typeLike', format: ['PascalCase'] },

      // Interfaces shouldn't be prefixed with `I`.
      { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },

      // Types shouldn't be prefixed with `T`.
      { selector: 'typeAlias', format: ['PascalCase'], custom: { regex: '^T[A-Z]', match: false } },

      // Generics should have meaningful names instead of one-letters.
      { selector: 'typeParameter', format: ['PascalCase'], custom: { regex: '[a-zA-Z]{2,}', match: true } }
    ],

    // This rule is having issues with setting button type dynamically.
    'react/button-has-type': 'off',

    // It is simpler to destructure render
    'testing-library/prefer-screen-queries': 'off'
  },
  overrides: [
    {
      // Files with React components.
      files: ['*.tsx'],
      rules: {
        // Ensures we provide a key when rendering components in iteration.
        'react/jsx-key': 2,

        // There is no need for prop types as we use TypeScript.
        'react/prop-types': 0,

        // We see no reason to prevent props spreading in react components.
        'react/jsx-props-no-spreading': 0,

        // As the project uses JSX transform, there is no need for importing React explicitly.
        'react/react-in-jsx-scope': 0,

        // To be consistent we want to always use arrow function when creating components.
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],

        // In many cases undefined is considered a valid value for a prop.
        'react/require-default-props': 0
      }
    },
    {
      // Files with necessary default exports
      files: [
        'src/pages/*',
        '*.stories.tsx',
        'src/pages/_app.tsx',
        'src/pages/index.tsx',
        'vitest.config.ts',
        'cypress.config.ts'
      ],
      rules: {
        'import/no-default-export': 'off'
      }
    },
    {
      // Files with necessary require()
      files: ['tailwind.config.js'],
      rules: {
        'global-require': 'off'
      }
    }
  ]
};
