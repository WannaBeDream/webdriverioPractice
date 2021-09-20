import Page from "./page";

class DocsPage extends Page {
    get editLink() {
        return $('a[href="https://github.com/webdriverio/webdriverio/edit/main/website/docs/GettingStarted.md"]')
    }
    clickEditLink() {
        this.editLink.click();
    }
    open() {
        super.open('/docs/gettingstarted')
    }
    pause(value = 1000) {
        super.pause(value)
    }
}

export default new DocsPage();