import faker from 'faker';
import mainPage from '../page/main.page'
import pricingPage from '../page/pricing.page'
import joinPage from '../page/join.page'

describe("should not sign up with pricing link", () => {
    
    it("should go to pricing page", () => {
        mainPage.open();
        mainPage.pricingButton.click()
        mainPage.pause();
        mainPage.plansLink.click();
        mainPage.pause();
    })  
    it("should get free tier account and redirect to join page", () => {
        pricingPage.joinForFreeButton.scrollIntoView();
        pricingPage.pause();
        pricingPage.clickJoinForFreeButton();
        pricingPage.pause();
    })  
    it("should fill username input with valid data", () => {
        joinPage.usernameInput.scrollIntoView();
        joinPage.pause();
        joinPage.setUsernameInput(faker.name.firstName()+'88888')
        joinPage.pause();
    })  
    it("should fill email input with valid data", () => {
        joinPage.emailInput.scrollIntoView();
        joinPage.pause();
        joinPage.setEmailInput(faker.internet.email());
        joinPage.pause();
    })  
    it("should fill password input with valid data", () => {
        joinPage.passwordInput.scrollIntoView()
        joinPage.pause();
        joinPage.passwordInput.scrollIntoView();
        joinPage.pause();
        joinPage.setPasswordInput(faker.internet.password());
        joinPage.pause();
    })  
    it("should check create account button", () => {
        joinPage.createAccountButton.scrollIntoView()
        joinPage.pause();
        joinPage.createAccountButton.scrollIntoView();
        joinPage.pause();
        joinPage.checkIfElementDisplayed(joinPage.createAccountButton);
        joinPage.pause();
    })  
    
    

})