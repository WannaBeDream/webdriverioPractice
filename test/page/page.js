// Page.js
export default class Page {
    constructor() {
        this.title = 'webdriver.io page'
    }

    open(path) {
        browser.url(path)
    }
    pause(value) {
        browser.pause(value)
    }
}
