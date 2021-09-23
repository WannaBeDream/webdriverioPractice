import mainPage from '../page/main.page'
import aboutCareers from '../page/aboutCareers.page'


describe("should log info about careers.", () => {

    it("should go to about careers page", () => {
        mainPage.open()
        mainPage.careersLink.scrollIntoView()
        mainPage.pause(2000)
        mainPage.clickCareersLink()
        mainPage.pause(2000)
    })
    it("should go to open positions section", () => {
        aboutCareers.clickOpenPositionLink()
        aboutCareers.pause(2000)
    })
    it("should show positions titles in the command line interface", () => {
        aboutCareers.consoleLogInfoAboutCareers();
        aboutCareers.pause(2000)
    })


})