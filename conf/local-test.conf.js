const { config: baseConfig } = require('./base.conf.js');

const localConfig = {
  // Adding browserstackLocal to browserstack-service to initiate local binary
  services: [
    [
      '@wdio/browserstack-service',
      { browserstackLocal: true, opts: { forcelocal: false } },
    ],
  ],
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'latest',
      'bstack:options': {
        buildName: 'browserstack-build-1',
        source: 'webdriverio:sample-v7-v1.0'
      }
    },
  ],
  specs: ['./tests/specs/local_test.js'],
};

exports.config = { ...baseConfig, ...localConfig };
