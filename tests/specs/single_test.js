var assert = require('assert');

describe('Google\'s Search Functionality', function () {
  it('can find search results', async function () {
    await browser.url('https://www.google.com/');
    const title = await browser.getTitle();
    assert(title.match(/Google/i));
  });
});
