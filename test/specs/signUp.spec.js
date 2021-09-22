// import mainPage from '../page/main.page'
// import signUpPage from '../page/signUp.page'
// import faker from 'faker';

// describe("should not sign up with valid data and without filling captcha.", () => {
    
//     it("should go to sign up page from main page", () => {
//         mainPage.open();
//         mainPage.clickSignUpButton();
//         mainPage.pause();
//     })
//     it("should open sign up content container", () => {
//         signUpPage.open();
//         signUpPage.clickSignUpContentContainer();
//         signUpPage.pause(4000);
//     })
//     it("should fill email input with valid data", () => {
//         signUpPage.clickEmailInput();
//         signUpPage.setEmailInput(faker.internet.email())
//         signUpPage.pause();
//     })
//     it("should click on continue password button", () => {
//         signUpPage.clickPasswordContainerButton();
//         signUpPage.pause();
//     })
//     it("should fill password input with valid data", () => {
//         signUpPage.clickPasswordInput();
//         signUpPage.setPasswordInput(faker.internet.password())
//         signUpPage.pause();
//     })
//     it("should click on continue username button", () => {
//         signUpPage.clickUsernameContainerButton();
//         signUpPage.pause();
//     })
//     it("should fill username input with valid data", () => {
//         signUpPage.clickUsernameInput();
//         signUpPage.setUsernameInput(faker.internet.userName())
//         signUpPage.pause();
//     })
//     it("should click on sign up continue button", () => {
//         signUpPage.clickSignUpContinueContainerButton()
//         signUpPage.pause();
//     })
//     it("should check for displayng element", () => {
//         signUpPage.checkIfElementDisplayed(signUpPage.greetingsMessage);
//         signUpPage.pause();
//     })
//     it("should check current user url with sign up url", () => {
//         signUpPage.checkForUrl(signUpPage.pageUrl);
//         signUpPage.pause();
//     })  

// })