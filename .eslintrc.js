module.exports = {
    extends: "airbnb-base",
    parserOptions: {
        ecmaVersion: 2017
    },
    env: {
        node: true,
        mocha: true,
    },
    rules: {
      "linebreak-style": ["error", "windows"],
      "require-jsdoc": 0,
      "new-cap": 0,
      "no-console": 0,
      "consistent-return": 0,
      "global-require": 0,
      "no-underscore-dangle": 0,
      "no-await-in-loop": 0,
      "class-methods-use-this": 0,
    }
};