module.exports = {
	extends: [
		'./lib/rules/best-practices.js',
		'./lib/rules/stylistic.js',
	].map(require.resolve),
}
