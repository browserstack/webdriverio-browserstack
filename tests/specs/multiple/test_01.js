var assert = require('assert');

describe('Google\'s Search Functionality', function() {
  it('opens google', async function () {
    await browser.url('https://www.google.com/ncr');
    const title = await browser.getTitle();

    assert(title.match(/Google/i));
  });
});
