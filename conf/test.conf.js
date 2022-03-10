const { config: baseConfig } = require("./base.conf.js");

const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    build: 'browserstack-build-1',
  },
  capabilities: [{
    browserName: 'chrome',
    browserVersion: 'latest',
    os: 'Windows',
    osVersion: '10'
  }, {
    browserName: 'safari',
    browserVersion: 'latest',
    os: 'OS X',
    osVersion: 'Big Sur'
  }, {
    browserName: 'chrome',
    device: 'Samsung Galaxy S20'
  }],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
