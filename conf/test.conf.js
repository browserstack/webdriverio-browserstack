const { config: baseConfig } = require('./base.conf.js');
const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      projectName: 'sample-tests-ai',
      buildName: 'wdio-mocha-automate'
    }
  },
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        browserVersion: '120.0',
        os: 'Windows',
        osVersion: '10'
      }
    },
    {
      browserName: 'Safari',
      'bstack:options': {
        browserVersion: '15.6',
        os: 'OS X',
        osVersion: 'Monterey'
      }
    },
    {
      browserName: 'Chromium',
      'bstack:options': {
        deviceOrientation: 'portrait',
        deviceName: 'iPhone 13',
        osVersion: '15'
      }
    }
  ],
};
exports.config = { ...baseConfig, ...parallelConfig };
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});