// import faker from 'faker';
// import mainPage from '../page/main.page'
// import pricingPage from '../page/pricing.page'
// import joinPage from '../page/join.page'

// describe("should not sign up with pricing link", () => {
    
//     it("should go to pricing page", () => {
//         mainPage.open();
//         mainPage.pricingButton.moveTo();
//         mainPage.pause();
//         mainPage.plansLink.click();
//     })  
//     it("should get free tier account and redirect to join page", () => {
//         pricingPage.joinForFreeButton.scrollIntoView();
//         pricingPage.pause();
//         pricingPage.clickJoinForFreeButton();
//     })  
//     it("should fill username input with valid data", () => {
//         joinPage.usernameInput.moveTo();
//         joinPage.setUsernameInput(faker.internet.userName());
//     })  
//     it("should fill email input with valid data", () => {
//         joinPage.emailInput.moveTo();
//         joinPage.setEmailInput(faker.internet.email());
//     })  
//     it("should fill password input with valid data", () => {
//         joinPage.passwordInput.scrollIntoView()
//         joinPage.passwordInput.moveTo();
//         joinPage.setPasswordInput(faker.internet.password());
//     })  
//     it("should check create account button", () => {
//         joinPage.createAccountButton.scrollIntoView()
//         joinPage.createAccountButton.moveTo();
//         joinPage.checkIfElementDisplayed(joinPage.createAccountButton);
//     })  
    
    

// })