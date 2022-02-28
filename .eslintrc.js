module.exports = {
  "env": {
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "plugins": ["vue"],
  "rules": {
    "vue/multi-word-component-names": ["error", {
      "ignores": ["default", "Login", "Home"]
    }]
  }
}