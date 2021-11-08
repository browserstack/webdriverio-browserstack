describe("Google's Search Functionality", () => {
  it("can find search results", async () => {
    await browser.url("https://www.google.com/ncr");
    const inputForm = await $("//input[@name='q']");
    await inputForm.setValue(["BrowserStack", "Enter"]); // this helps in majority desktops

    try {
      await browser.waitUntil(async () => (await browser.getTitle()).match(/BrowserStack/i));
    } catch (e) {
      await browser.elementSubmit(inputForm.elementId); // this helps in remaining cases, i.e. iPhone
    }

    await browser.waitUntil(
      async () => (await browser.getTitle()).match(/BrowserStack/i),
      5000,
      "Title didn't match with BrowserStack"
    );
  });
});
