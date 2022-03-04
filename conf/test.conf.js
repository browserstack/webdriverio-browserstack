const { config: baseConfig }= require("./base.conf.js");

const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    build: 'browserstack-build-1',
    name: 'Google Test',
  },
  capabilities: [{
    browserName: 'chrome'
  },{
    browserName: 'firefox'
  },{
    browserName: 'internet explorer'
  },{
    browserName: 'safari'
  }],
};

exports.config = {...baseConfig, ...parallelConfig};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});

