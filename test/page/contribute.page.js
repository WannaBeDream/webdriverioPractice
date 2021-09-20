import Page from "./page";

class ContributePage extends Page {
    get codeOfConductLink() {
        return $('a[href="https://github.com/webdriverio/webdriverio/blob/main/CODE_OF_CONDUCT.md"]')
    }
    clickCodeOfConductLink() {
        this.codeOfConductLink.click();
    }
    open() {
        super.open('/docs/contribute')
    }
    pause(value = 1000) {
        super.pause(value)
    }
}

export default new ContributePage();