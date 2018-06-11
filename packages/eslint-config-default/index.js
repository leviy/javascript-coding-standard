module.exports = {
    extends: 'airbnb-base',
    env: {
        'browser': true,
        'jquery': true,
        'jest/globals': true
    },
    plugins: ['jest'],
    rules: {
        'import/first': 'off',
        'import/no-extraneous-dependencies': ['error', {
            'devDependencies': true
        }],
        'arrow-body-style': 'off',
        'class-methods-use-this': 'off',
        'max-len': [2, 140, 4],
        'indent': ['error', 4],
        'no-continue': 'off',
        'no-prototype-builtins': 'off',
        'no-underscore-dangle': ['error', {
            'allowAfterThis': true
        }],
        'object-shorthand': ['error', 'never'],
        'prefer-destructuring': ['error', {
            'array': false
        }]
    }
};
