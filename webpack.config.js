const path = require("path");

module.exports = {
  entry: "./assets/js/index.js",
  mode: "development",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "js", "build")
  }
}
