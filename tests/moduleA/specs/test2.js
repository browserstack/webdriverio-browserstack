describe("BStackDemo Tests Module A", () => {
  before(async () => {
    await browser.url("https://bstackdemo.com/");
    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/StackDemo/i),
      5000,
      "Title didn't match with BrowserStack"
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

  it("always passing test - example A", async () => {
    const url = await browser.getUrl();
    expect(url).to.include("bstackdemo");
  });

  it("always passing test - example B", async () => {
    const result = 5 + 3;
    expect(result).to.equal(8);
  });

  it("always passing test - example C", async () => {
    const result = 7 * 6;
    expect(result).to.equal(42);
  });

  it("always passing test - example D", async () => {
    const str1 = "Browser";
    const str2 = "Stack";
    const result = str1 + str2;
    expect(result).to.equal("BrowserStack");
  });

  it("always passing test - example E", async () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.length).to.equal(5);
  });
});