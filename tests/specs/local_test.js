describe('BrowserStack Local Testing', ()=> {
  it('can check tunnel working', async () => {
    await browser.url('http://bs-local.com:45691/check');
    (await browser.getPageSource()).should.match(/Up and running/i);
  });
});
