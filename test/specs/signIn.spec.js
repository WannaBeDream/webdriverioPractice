// require('dotenv').config()
// import mainPage from '../page/main.page'
// import signInPage from '../page/signIn.page';

// describe("should sign in to github account.", () => {
    
//     it("should redirect from homepage to sign in page", () => {
//         mainPage.open()
//         mainPage.clickSignInButton();
//         mainPage.pause()
//     })  
//     it("should fill login input with valid data", () => {
//         signInPage.clickLoginInput()
//         signInPage.pause()
//         signInPage.setLoginInput(process.env.GITHUB_USERNAME)
//         signInPage.pause()
//     })  
//     it("should fill password input with valid data", () => {
//         signInPage.clickPasswordInput()
//         signInPage.pause()
//         signInPage.setPasswordInput(process.env.GITHUB_PASSWORD)
//         signInPage.pause()
//     })  
//     it("should log into prepair account", () => {
//         signInPage.clickSignInButton();
//         signInPage.pause()
//     })  
//     it("should open pop up", () => {
//         mainPage.clickViewProfileAndMoreButton();
//         mainPage.pause()
//     })  
//     it("should compare github username and pop up title", () => {
//         mainPage.compareText(mainPage.ProfileAndMoreTitle, process.env.GITHUB_USERNAME);
//         mainPage.pause()
//     })  

// })