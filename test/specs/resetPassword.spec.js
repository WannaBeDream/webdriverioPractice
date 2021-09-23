require('dotenv').config()
import mainPage from '../page/main.page'
import passwordResetPage from '../page/passwordReset.page';
import signInPage from '../page/signIn.page';

describe("should not reset github account password with valid data but without captcha.", () => {
    
    it("should redirect from homepage to sign in page", () => {
        mainPage.open()
        mainPage.clickSignInButton();
        mainPage.pause()
    })  
    it("should click on reset password link", () => {
        signInPage.clickResetPasswordLink()
        signInPage.pause()
    })  
    it("should fill email input with valid data", () => {
        passwordResetPage.clickResetEmailInput()
        passwordResetPage.pause();
        passwordResetPage.setResetEmailInput(process.env.GITHUB_USERNAME + "@gmail.com")
        passwordResetPage.pause();
    })  
    it("should open captcha test and check for reset password button", () => {
        passwordResetPage.switchToFrame(passwordResetPage.firstWraperCheckFrame)
        passwordResetPage.switchToFrame(passwordResetPage.secondWraperCheckFrame)
        passwordResetPage.switchToFrame(passwordResetPage.thirdWraperCheckFrame)
        passwordResetPage.frameCheckButton.click();
        passwordResetPage.pause()
        browser.switchToParentFrame();
        browser.switchToParentFrame();
        browser.switchToParentFrame();
        
        passwordResetPage.checkIfElementDisplayed(passwordResetPage.sendPasswordResetEmailButton);
        passwordResetPage.pause()
    })  

})