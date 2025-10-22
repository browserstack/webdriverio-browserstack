describe("Testing with BStackDemo", () => {
  it("add product to cart", async () => {
    await browser.url("https://bstackdemo.com/");
    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/StackDemo/i),
      5000,
      "Title didn't match with BrowserStack"
    );

    const productOnScreen = await $('//*[@id="1"]/p');
    const productOnScreenText = await productOnScreen.getText();

    const addToCart = await $('//*[@id="1"]/div[4]');
    await addToCart.click();

    const productInCart = await $('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]');

    await browser.waitUntil(async () => (
      await productInCart.getText()).match(productOnScreenText), 
      { timeout: 5000 }
    );
  });

  it("flaky test - add random product to cart", async () => {
    await browser.url("https://bstackdemo.com/");
    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/StackDemo/i),
      5000,
      "Title didn't match with BrowserStack"
    );

    const randomProductIndex = Math.random() > 0.5 ? "1" : "2";
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

  it("always failing test - interact with non-existent element", async () => {
    await browser.url("https://bstackdemo.com/");
    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/StackDemo/i),
      5000,
      "Title didn't match with BrowserStack"
    );

    const nonExistentElement = await $('//*[@id="non-existent"]/p');
    await nonExistentElement.click(); // This will throw an error as the element does not exist
  });
});

describe("Additional Tests with BStackDemo", () => {
  before(async () => {
    await browser.url("https://bstackdemo.com/");
    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/StackDemo/i),
      5000,
      "Title didn't match with BrowserStack"
    );
  });

  it("flaky test - random product selection", async () => {
    const randomProductIndex = Math.random() > 0.5 ? "1" : "2";
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

  it("always failing test - missing element 2", async () => {
    const nonExistentElement = await $('//*[@id="non-existent-2"]/p');
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

  it("always failing test - same stacktrace 3", async () => {
    const nonExistentElement = await $('//*[@id="common-error"]/p');
    await nonExistentElement.click(); // This will throw an error
  });

  it("passing test - verify page title", async () => {
    const title = await browser.getTitle();
    expect(title).to.match(/StackDemo/i); // Use 'match' instead of 'toMatch'
  });

  it("test with retry - retry on failure", function () {
    this.retries(2); // Framework-level retry
    const randomOutcome = Math.random() > 0.7; // 30% chance of passing
    if (!randomOutcome) {
      throw new Error("Test failed, retrying...");
    }
  });
});
