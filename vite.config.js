const ViteDocCreator = require("./dev/mark-to-html");

module.exports = {
  plugin: [new ViteDocCreator()],
};
