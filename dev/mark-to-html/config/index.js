const { resolve } = require("path");
const port = process.env.npm_config_port;
const domain = "http://localhost";
const title = "This is my first Document by Vite";

const outerDir = {
  rootPath: resolve(__dirname, "../../../"),
  srcPath: resolve(__dirname, "../../../src/"),
  htmlPath: resolve(__dirname, "../../../src/html/"),
  jsPath: resolve(__dirname, "../../../src/js/"),
  cssPath: resolve(__dirname, "../../../src/css/"),
  mdPath: resolve(__dirname, "../../../workspace"),
};

const innerDir = {
  rootPath: resolve(__dirname, "../temp_files"),
  htmlPath: resolve(__dirname, "../temp_files/html"),
  jsPath: resolve(__dirname, "../temp_files/js"),
  cssPath: resolve(__dirname, "../temp_files/css"),
};

module.exports = {
  port,
  domain,
  title,
  outerDir,
  innerDir,
};
