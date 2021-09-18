const assert = require('assert');

describe("web driver io page", () => {

    xit("should have the rigth title", async () => {
        await browser.url('https://webdriver.io');
        const title = await browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    })
    xit("should demonstrate the addValue command", async () => {
        await browser.url('https://webdriver.io');
        const myButton = await $('.DocSearch-Button')
        await myButton.click()
        let input = await $('.DocSearch-Input');
        await input.addValue('test');
        await browser.pause(2000);
        await input.addValue(123);
        await browser.pause(2000);
        let value = await input.getValue();
        assert(value === "test123"); // true
    })
    xit("should demonstrate the setValue command", async () => {
        await browser.url('https://webdriver.io');
        const myButton = await $('.DocSearch-Button')
        await myButton.click()
        let input = await $('.DocSearch-Input');
        await input.setValue('you are hacked!');
        await browser.pause(2000);
    })
    xit("should demonstrate the click command", async () => {
        await browser.url('https://webdriver.io');
        const blogBtn = await $('[href="/blog"]');
        await browser.pause(2000);
        await blogBtn.click()
        await browser.pause(2000);
        let guideBtn = await $('.navbar__items [href="/docs/gettingstarted"]');
        await guideBtn.click()
        await browser.pause(2000);
    })
    xit("should demonstrate the getAtribute func", async () => {
        await browser.url('https://webdriver.io');
        const myButton = await $('.DocSearch-Button')
        await myButton.click()
        let input = await $('.DocSearch-Input');
        const placeholder = await input.getAttribute('placeholder')
        console.log(">>>> placeholder attribute is " + placeholder);

        await input.setValue('DreamReal');
        const value = await input.getAttribute('value')
        console.log(">>>> value attribute is " + value);
    })
    xit("should demonstrate the getLocation func", async () => {
        await browser.url('https://webdriver.io');
        const blogBtn = await $('[href="/blog"]');
        const location = await blogBtn.getLocation();
        console.log(location);

        const xLocation = await blogBtn.getLocation('x');
        console.log("xLocation " + xLocation);
    })
    xit("should demonstrate the getText func", async () => {
        await browser.url('https://webdriver.io');
        const blogBtn = await $('[href="/blog"]');
        console.log("Text for element " + await blogBtn.getText());
    })

    // Homework from 9 lesson
    xit('should finished with test case is done in search input', async () => {
        await browser.url('https://webdriver.io');
        const apiBtn = await $('.navbar__items [href="/docs/api"]');
        await apiBtn.click();
        const urlValue = await browser.getUrl();
        console.log("Current url value is: " + urlValue);

        const headerTag = await $('.docTitle_3a4h');
        console.log("Text value of header tag is: " + await headerTag.getText());

        const link = await $('.docItemContainer_33ec .markdown a')
        console.log("Href attribute of the link is: " + await link.getAttribute('href'))

        const searchBtn = await $('.DocSearch-Button');
        await searchBtn.click();
        const searchInput = await $('.DocSearch-Input');
        await searchInput.addValue('Test case is DONE!');
        await browser.pause(5000);

    })
    // end of homework from 9 lesson

    xit('should detect is an element is clickable', async () => {
        await browser.url('https://webdriver.io');
        const blogBtn = await $('[href="/blog"]');
        let clickable = await blogBtn.isClickable();
        console.log("IS CLICKABLE: " + clickable);
    })
    xit('should detect is an element is displayed', async () => {
        await browser.url('https://webdriver.io');
        const blogBtn = await $('[href="/blog"]');
        let isDisplayed = await blogBtn.isDisplayed();
        console.log("IS DISPLAYED: " + isDisplayed);
    })
    xit('should detect is an element is displayed in viewport', async () => {
        await browser.url('https://webdriver.io');
        const isDisplayedInViewport = await $('[href="/blog"]').isDisplayedInViewport();
        console.log("isDisplayedInViewport: " + isDisplayedInViewport);
    })
    xit('should detect is an element is enabled', async () => {
        await browser.url('https://webdriver.io');
        const isEnabled = await $('[href="/blog"]').isEnabled();
        console.log("isEnabled: " + isEnabled);
    })

    xit('should detect is an element is enabled', async () => {
        await browser.url('https://webdriver.io');
        const searchBtn = await $('.DocSearch-Button')
        await searchBtn.click()
        let searchInput = await $('.DocSearch-Input');
        console.log("searchInput is focused before click: " + await searchInput.isFocused());
        await browser.pause(2000);
        await searchInput.click();
        console.log("searchInput is focused after click: " + await searchInput.isFocused());
        await browser.pause(2000);
    })
    xit('should move to element ', async () => {
        await browser.url('https://webdriver.io');
        const githubLink = await $('.footer [href="https://github.com/webdriverio/webdriverio"]');
        await browser.pause(4000);
        await githubLink.scrollIntoView();
        await browser.pause(4000);
    })
    xit('should save a screenshot of the browser view', async () => {
        await browser.url('https://webdriver.io');
        const githubLink = await $('.footer [href="https://github.com/webdriverio/webdriverio"]');
        await githubLink.saveScreenshot('githubLinkScreenShot.png');
    })
    xit('should switch to another window', async () => {
        // open url
        await browser.url('https://www.google.com/')
        // create new window 
        await browser.newWindow('https://webdriver.io');
        browser.pause();

        // switch back via url match
        await browser.switchWindow('google.com');
        await browser.pause(2000);
        // switch back via title match
        await browser.switchWindow('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
        await browser.pause(2000);
    })
    xit('should wait until ', async () => {
        await browser.url('https://webdriver.io');
        await browser.waitUntil(async () => {
            return await $('[href="/blog"]').isDisplayed();
        }, { timeout: 5000, timeoutMsg: "blog is not displayed" });
    })
    xit('should get html fro certain elements', async () => {
        await browser.url('https://webdriver.io');
        const outerHtml = await $('.hero__title').getHTML();
        console.log('OUTERHTML :' + outerHtml);

        const innerHtml = await $('.hero__title').getHTML(false);
        console.log('innerHtml :' + innerHtml);
    })




    it('homework from lesson 14 is done', async () => {
        await browser.url('https://webdriver.io/docs/api');
        const jsonWireLink = await $('//*[text()="JSONWire protocol"]').getAttribute('href');
        await browser.newWindow(jsonWireLink);
        console.log("selenium wiki's visible is: " + await $('a[href="/SeleniumHQ/selenium/wiki"]').isDisplayed());
        await browser.switchWindow('https://webdriver.io/docs/api');
        const intoductionH1 = await $('.docTitle_3a4h');
        await browser.waitUntil(async () => (await intoductionH1.getText()) === 'Introduction',
            {
                timeout: 3000,
                timeoutMsg: 'expected text to be undifferent after 3s'
            }
        )
        await intoductionH1.saveScreenshot('waitUntilSreenshot.png');
        const twitterLink = await $('[href="https://twitter.com/webdriverio"]');
        const blogLink = await $('[href="/blog"]');
        console.log("twitterLink's displaying is" + await twitterLink.isDisplayed());
        console.log("twitterLink's displaying in viewport is" + await twitterLink.isDisplayedInViewport());
        await twitterLink.scrollIntoView();
        console.log("twitterLink's displaying" + await twitterLink.isDisplayed());
        console.log("twitterLink's displaying in viewport is" + await twitterLink.isDisplayedInViewport());
        console.log("href blog focusing is " + await blogLink.isFocused());
        await blogLink.click();
        console.log("href blog focusing is " + await blogLink.isFocused());
    })

})