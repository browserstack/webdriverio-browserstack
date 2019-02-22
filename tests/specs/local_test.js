var assert = require('assert');

describe('BrowserStack Local Testing', function() {
  it('can check tunnel working', async function () {
    await browser.url('http://bs-local.com:45691/check');
    const source = await browser.getSource();

    assert(source.match(/Up and running/i));
  });
});
