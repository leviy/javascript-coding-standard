module.exports = {
    extends: 'airbnb-base',
    env: {
        'browser': true,
        'jquery': true,
        'jest/globals': true
    },
    plugins: ['jest', 'jsdoc'],
    rules: {
        'import/first': 'off',
        'import/no-extraneous-dependencies': ['error', {
            'devDependencies': true
        }],
        'arrow-body-style': 'off',
        'class-methods-use-this': 'off',
        'max-len': ['error', {
            'code': 140
        }],
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],
        'no-continue': 'off',
        'no-prototype-builtins': 'off',
        'no-underscore-dangle': ['error', {
            'allowAfterThis': true
        }],
        'object-shorthand': ['error', 'methods'],
        'prefer-destructuring': ['error', {
            'array': false
        }],
        'no-param-reassign': ['error', {
            'props': false
        }],
        'operator-linebreak': 'off',
        'no-multiple-empty-lines': ['error', {
            'max': 1,
            'maxEOF': 1
        }],
        'jsdoc/check-alignment': 'warn',
        'jsdoc/check-param-names': 'warn',
        'jsdoc/check-syntax': 'error',
        'jsdoc/check-tag-names': 'warn',
        'jsdoc/check-types': 'error',
        'jsdoc/implements-on-classes': 'warn',
        'jsdoc/require-jsdoc': 'warn',
        'jsdoc/require-param': 'error',
        'jsdoc/require-param-name': 'error',
        'jsdoc/require-param-type': 'error',
        'jsdoc/require-returns': 'error',
        'jsdoc/require-returns-check': 'error',
        'jsdoc/require-returns-type': 'error',
        'jsdoc/valid-types': 'warn',
    }
};
