require('dotenv').config()
import mainPage from '../page/main.page'

describe("should drop down all pop-ups.", () => {
    
    it("should drop 'Why github?' popup", () => {
        mainPage.open()
        mainPage.whyGitHubButton.moveTo();
        mainPage.pause()
        mainPage.checkIfElementDisplayed(mainPage.featuresLink)
        mainPage.pause()
        mainPage.signUpButton.moveTo()
        mainPage.pause()
    })  
    it("should drop 'Explore' popup", () => {
        mainPage.exploreButton.moveTo();
        mainPage.pause()
        mainPage.checkIfElementDisplayed(mainPage.exploreLink)
        mainPage.pause()
        mainPage.signUpButton.moveTo()
        mainPage.pause()
    })  
    it("should drop 'Pricing' popup", () => {
        mainPage.pricingButton.moveTo();
        mainPage.pause()
        mainPage.checkIfElementDisplayed(mainPage.plansLink)
        mainPage.pause()
        mainPage.signUpButton.moveTo()
        mainPage.pause()
    })  


})