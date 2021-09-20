import Page from "./page";

class ApiPage extends Page {
    get editLink() {
        return $('a[href="https://github.com/webdriverio/webdriverio/edit/main/website/docs/API.md"]')
    }
    clickEditLink() {
        this.editLink.click();
    }
    open() {
        super.open('/docs/api')
    }
    pause(value = 1000) {
        super.pause(value)
    }
}

export default new ApiPage();