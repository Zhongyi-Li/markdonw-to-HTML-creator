const { initFolders, initFiles, initWatchers } = require("./init/index");

class ViteDocCreator {
  constructor(options) {
    this.options = {
      title: undefined,
      port: 0,
      domain: undefined,
    };

    if (options) {
      Object.assign(this.options, options);
    }

    this.initialize();
    console.log("dev");
  }

  initialize() {
    initFolders(this.options);
    initFiles(this.options);
    initWatchers(this.options);
  }
}

module.exports = ViteDocCreator;
