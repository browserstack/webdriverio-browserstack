describe('Google\'s Search Functionality', () => {
  it('can find search results', () => {
      browser.url('https://www.google.com/ncr');
      $('[name="q"]').setValue('BrowserStack');
      browser.keys("\uE007");
      browser.getTitle().should.match(/BrowserStack - Google Search/i);
  });
});
