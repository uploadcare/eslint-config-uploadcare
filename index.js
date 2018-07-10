module.exports = {
  extends: [
    './lib/rules/best-practices.js',
    './lib/rules/stylistic.js',
    './lib/rules/react.js',
  ].map(require.resolve),
}
