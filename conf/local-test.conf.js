const { config: baseConfig } = require("./base.conf.js");
const browserstack = require('browserstack-local');


const localConfig = {
  // Adding browserstackLocal to browserstack-service to initiate local binary
  capabilities: [{
    browserName: 'chrome',
    build: 'browserstack-build-1',
    name: 'BrowserStack Local Test',
    "browserstack.local": true // For enabling local testing for the session
  }],
  specs: ['./tests/specs/local_test.js'],

  // Code to start browserstack local before start of test
  onPrepare: function (config, capabilities) {
    console.log("Connecting local");
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({ 'key': exports.config.key }, function (error) {
        if (error) return reject(error);

        console.log('Connected. Now testing...');
        resolve();
      });
    });
  },

  // Code to mark the status of test on BrowserStack based on the assertion status
  afterTest: function (test, context, { error, result, duration, passed, retries }) {
    if(passed) {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}');
    } else {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}');
    }
  },

  // Code to stop browserstack local after end of test
  onComplete: function (capabilties, specs) {
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(function() {
        console.log("Binary stopped");
        resolve();
      });
    });
  }
};

exports.config = { ...baseConfig, ...localConfig };
