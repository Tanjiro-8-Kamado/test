const build = require("@cypress/webpack-preprocessor");
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');
const {addMatchImageSnapshotPlugin,} = require('cypress-image-snapshot/plugin');
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  registerReportPortalPlugin(on, config);
  
  const options = {
    webpackOptions: require("../webpack.config.js")
  };
  on("file:preprocessor", build(options));
  addMatchImageSnapshotPlugin(on, config);
};

