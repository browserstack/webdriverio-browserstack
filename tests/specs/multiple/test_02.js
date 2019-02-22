var assert = require('assert');

describe('Google\'s Search Functionality', function() {
  it('can find search results', async function () {
    await browser.url('https://www.google.com/ncr');
    await browser.setValue('*[name="q"]','BrowserStack\n');
    const title = await browser.getTitle();

    assert(title.match(/BrowserStack - Google Search/i));
  });
});
