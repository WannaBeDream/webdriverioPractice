import mainPage from '../page/main.page'
import searchInput from '../page/searchInput.page'

describe("should find webdriverio on typescript basis repozitory", () => {

    it("should find webdriverio with input on the main page", () => {
        mainPage.open();
        mainPage.clickSearchInput();
        mainPage.pause()
        mainPage.setSearchInput(searchInput.textForCheck);
        mainPage.pause()
        browser.keys('\uE007');
        mainPage.pause()
    })
    it("should open first repository by 'typescript' and 'webdriverio' texts", () => {
        searchInput.typeScriptFilterLink.scrollIntoView();
        searchInput.pause()
        searchInput.clickTypeScriptFilterLink();
        searchInput.pause()
        searchInput.clickFirstLinkAfterSearching();
        searchInput.pause()
    })
    it("should check url to have phrase 'webdriverio' ", () => {
        expect(browser).toHaveUrlContaining(searchInput.textForCheck)
        searchInput.pause()
    })

})