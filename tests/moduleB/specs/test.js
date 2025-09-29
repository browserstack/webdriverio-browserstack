describe("BStackDemo Tests Module B", () => {
  before(async () => {
    await browser.url("https://bstackdemo.com/");
    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/StackDemo/i),
      5000,
      "Title didn't match with BrowserStack"
    );
  });

  it("Flaky test - random product selection", async () => {
    const randomProductIndex = Math.random() > 0.7 ? "1" : "2000";
    const productOnScreen = await $(`//*[@id="${randomProductIndex}"]/p`);
    const productOnScreenText = await productOnScreen.getText();

    const addToCart = await $(`//*[@id="${randomProductIndex}"]/div[4]`);
    await addToCart.click();

    const productInCart = await $('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]');
    await browser.waitUntil(async () => (
      await productInCart.getText()).match(productOnScreenText), 
      { timeout: 5000 }
    );
  });

  it("Failing test - clicking on a non-existent element", async () => {
    const nonExistentElement = await $('//*[@id="non-existent-1"]/p');
    await nonExistentElement.click(); // This will throw an error
  });

  it("Failing test - same stacktrace", async () => {
    const nonExistentElement = await $('//*[@id="common-error"]/p');
    await nonExistentElement.click(); // This will throw an error
  });

  it("Failing test - same stacktrace 2", async () => {
    const nonExistentElement = await $('//*[@id="common-error"]/p');
    await nonExistentElement.click(); // This will throw an error
  });

  it("Failing test - same stacktrace 3", async () => {
    const nonExistentElement = await $('//*[@id="common-error"]/p');
    await nonExistentElement.click(); // This will throw an error
  });

  it("Passing test - verify page title", async () => {
    const title = await browser.getTitle();
    expect(title).to.match(/StackDemo/i); // Use 'match' instead of 'toMatch'
  });

  it("Always passing test", async () => {
    const result = 6 + 3;
    expect(result).to.equal(9);
  });

  it("Always passing test - example B", async () => {
    const result = 1000 * 2;
    expect(result).to.equal(2000);
  });

  it("Always passing test - example C", async () => {
    const result = 1000 * 2;
    expect(result).to.equal(2000);
  });

  it("Always passing test - example D", async () => {
    const str1 = "BrowserStack is better than LambdaTest";
    const str2 = str1.substring(3, 10);
    expect(str2).to.equal("wserSta");
  });

  it("Always passing test - example E", async () => {
    const str1 = "BrowserStack is better than LambdaTest";
    const str2 = str1.substring(3, 11);
    expect(str2).to.equal("wserStac");
  });

  it("Test with framework-level retry - 2 retries configured", function () {
    this.retries(2); // Framework-level retry
    const randomOutcome = Math.random() > 0.7; // 30% chance of passing
    if (!randomOutcome) {
      throw new Error("Test failed, retrying...");
    }
  });
});