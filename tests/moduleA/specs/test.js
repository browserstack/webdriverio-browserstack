describe("BStackDemo Tests Module A", () => {
  // common hook for all tests - navigating to the URL and verifying the title
  before(async () => {
    await browser.url("https://bstackdemo.com/");
    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/StackDemo/i),
      5000,
      "Title didn't match with BrowserStack"
    );
  });

  it("flaky test - random product selection", async () => {
    const randomProductIndex = Math.random() > 0.5 ? "1" : "2000";
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

  it("always failing test - missing element 1", async () => {
    const nonExistentElement = await $('//*[@id="non-existent-1"]/p');
    await nonExistentElement.click(); // This will throw an error
  });

  it("always failing test - same stacktrace 1", async () => {
    const nonExistentElement = await $('//*[@id="common-error"]/p');
    await nonExistentElement.click(); // This will throw an error
  });

  it("always failing test - same stacktrace 2", async () => {
    const nonExistentElement = await $('//*[@id="common-error"]/p');
    await nonExistentElement.click(); // This will throw an error
  });

  it("Always Passing Test - example F", async () => {
    expect(true).to.equal(true);
  });

  it("Always Passing Test - example G", async () => {
    expect(true).to.equal(true);
  });

  it("Always Passing Test - example H", async () => {
    expect(true).to.equal(true);
  });

  it("Always Passing Test - example I", async () => {
    expect(true).to.equal(true);
  });

  it("passing test - verify page title", async () => {
    const title = await browser.getTitle();
    expect(title).to.match(/StackDemo/i); // Use 'match' instead of 'toMatch'
  });

  it("Test with framework-level retry - 2 retries configured", function () {
    this.retries(2); // Framework-level retry
    const randomOutcome = Math.random() > 0.7; // 30% chance of passing
    if (!randomOutcome) {
      throw new Error("Test failed, retrying...");
    }
  });

  it("Another Test with framework-level retry - 2 retries configured", function () {
    this.retries(2); // Framework-level retry
    const randomOutcome = Math.random() > 0.7; // 30% chance of passing
    if (!randomOutcome) {
      throw new Error("Test failed, retrying...");
    }
  });

  it("always passing test - example A", async () => {
    const url = await browser.getUrl();
    expect(url).to.include("bstackdemo");
  });
});