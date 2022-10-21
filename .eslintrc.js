module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react', '@typescript-eslint'
	],
	rules: {
		quotes: ['error', 'single'],
		'indent': [
			'error', 'tab'
		],
		semi: [
			'error', 'never'
		],
		'react/react-in-jsx-scope': 'off',
		'array-element-newline': ['error', { 'minItems': 3 }],
		'no-inline-comments': 'error'
	}
}
