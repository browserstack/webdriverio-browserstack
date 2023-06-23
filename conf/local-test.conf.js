const { config: baseConfig } = require('./base.conf.js');

const localConfig = {
  // Adding browserstackLocal to browserstack-service to initiate local binary
  services: [
    [
      'browserstack',
      { 
        browserstackLocal: true, 
        buildIdentifier: '#${BUILD_NUMBER}', 
        opts: { 
          forcelocal: false, 
          localIdentifier: 'webdriverio-browserstack-repo' 
        } 
      },
    ],
  ],
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'latest',
      'bstack:options': {
        buildName: 'browserstack build',
        source: 'webdriverio:sample-master:v1.2'
      }
    },
  ],
  specs: ['./tests/specs/local_test.js'],
};

exports.config = { ...baseConfig, ...localConfig };
