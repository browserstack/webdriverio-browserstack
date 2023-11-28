exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: ['./tests/specs/test.js'],
  exclude: [],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  hostname: 'hub.browserstack.com',
  services: [['browserstack']],

  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  afterTest: async (test, context, { error, result, duration, passed, retries }) => {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~ AFTER TEST HOOK TIMESTAMP :: ${Date.now()} ~~~~~~~~~~~~~~~~~~~~~~~~`)
  },
  after: function (result, capabilities, specs) {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~ AFTER HOOK TIMESTAMP :: ${Date.now()} ~~~~~~~~~~~~~~~~~~~~~~~~`)
  },

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 5000,
  },
};
