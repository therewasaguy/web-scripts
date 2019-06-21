module.exports = {
  ...require('./packages/web-scripts/config/commitlint.config.js'),
  extends: [
    '@commitlint/config-conventional',
    '@commitlint/config-lerna-scopes',
  ],
};
