const { config: baseConfig } = require('./base.conf.js');
const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildName: 'Browserstack Build',
      source: 'webdriverio:sample-master:v1.2',
      projectName: 'Browserstack Samples',
    }
  },
  services: [
    [
      'browserstack',
      { 
        buildIdentifier: '#${BUILD_NUMBER}',
        testObservability: true,
        testObservabilityOptions: {
          buildTag: ['bstack_sample']
        }
      },
    ],
  ],
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
