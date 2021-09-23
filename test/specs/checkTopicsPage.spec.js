import mainPage from '../page/main.page'
import explorePage from '../page/explorePage.page'
import topicsPage from '../page/topicsPage.page'

describe("should go to topics page from main page.", () => {

    it("should drop 'Explore' popup and open explore page", () => {
        mainPage.open()
        mainPage.exploreButton.click();
        mainPage.pause()
        mainPage.exploreLink.click()
        mainPage.pause()
    })
    it("should open topics page", () => {
        explorePage.clickTopicsLink()
        explorePage.pause()
    })
    it("should check topics title text", () => {
        topicsPage.compareText(topicsPage.topicsTitle, "Topics")
        topicsPage.pause()
    })


})