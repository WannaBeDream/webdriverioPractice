import Page from "./page";

class SearchInput extends Page {


    get textForCheck() {
        return 'webdriverio';
    }
    get typeScriptFilterLink() {
        return $('a[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]');
    }
    get firstLinkAfterSearching() {
        return $('//ul[contains(@class,"repo-list")]//a[@href="/webdriverio/webdriverio"]');
    }
    clickFirstLinkAfterSearching() {
        this.firstLinkAfterSearching.click()
    }
    clickTypeScriptFilterLink() {
        this.typeScriptFilterLink.click()
    }
    pause(value = 2000) {
        super.pause(value)
    }

}

export default new SearchInput();