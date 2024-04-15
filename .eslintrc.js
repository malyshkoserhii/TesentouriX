module.exports = {
	root: true,
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	env: {
		'react-native/react-native': true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-native/all',
		'prettier',
	],
	ignorePatterns: ['.eslintrc.js'],
	plugins: ['prettier', 'react-hooks', 'react', 'react-native'],
	rules: {
		'no-console': 'error',
		'max-len': ['error', 120],
		'ordered-imports': 0,
		'no-unused-expressions': [
			2,
			{ allowShortCircuit: true, allowTernary: true },
		],
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
	},
};
