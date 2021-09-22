export default class Page {
    constructor() {
        this.title = 'github page'
    }

    open(path) {
        browser.maximizeWindow()
        browser.url(path)
    }
    pause(value) {
        browser.pause(value)
    }
    switchToFrame(frame) {
        browser.switchToFrame(frame);
        browser.pause(3000)
    }
    compareText(e,value) {
        return expect(e).toHaveText(value);
    }
    checkIfElementDisplayed(e) {
        return expect(e).toBeDisplayed();
    }
    checkForUrl(Url) {
        return expect(browser).toHaveUrl(Url);
    }

}
