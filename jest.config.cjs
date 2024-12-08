module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  testMatch: ["**/test/**/*.test.js"],
  transformIgnorePatterns: ["/node_modules/"]
};
