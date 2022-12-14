describe('BrowserStack Local Testing', () => {
  it('can check tunnel working', async () => {
    await browser.url('http://bs-local.com:45454');
    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/BrowserStack Local/i),
      5000,
      "Failed to connect local tunnel"
    );
  });
});
