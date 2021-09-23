import Page from "./page";

class SignUpPage extends Page {


    get pageUrl() {
        return 'https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home';
    }
    get emailInput() {
        return $('#email');
    }
    get passwordInput() {
        return $('#password');
    }
    get usernameInput() {
        return $('#login');
    }
    get usernameContainerButton() {
        return $('//*[@data-continue-to="username-container"]');
    }
    get signUpContentContainer() {
        return $('.signup-content-container');
    }
    get passwordContainerButton() {
        return $('//*[@data-continue-to="password-container"]');
    }
    get signUpContinueContainerButton() {
        return $('//*[@data-optimizely-event="click.signup_continue.username"]');
    }
    get greetingsMessage() {
        return $('//span[contains(text(),"Welcome to GitHub!")]');
    }
    clickEmailInput() {
        this.emailInput.click();
    }
    clickPasswordInput() {
        this.passwordInput.click();
    }
    clickUsernameContainerButton() {
        this.usernameContainerButton.click();
    }
    clickSignUpContentContainer() {
        this.signUpContentContainer.click();
    }
    clickPasswordContainerButton() {
        this.passwordContainerButton.click();
    }
    clickUsernameInput() {
        this.usernameInput.click();
    }
    clickSignUpContinueContainerButton() {
        this.signUpContinueContainerButton.click();
    }
    setUsernameInput(value) {
        this.usernameInput.setValue(value);
    }
    setEmailInput(value) {
        this.emailInput.setValue(value);
    }
    setPasswordInput(value) {
        this.passwordInput.setValue(value);
    }
    open() {
        super.open('/signup')
    }
    pause(value = 2000) {
        super.pause(value)
    }
    checkForUrl(url) {
        super.checkForUrl(url)
    }
    checkIfElementDisplayed(e) {
        return super.checkIfElementDisplayed(e);
    }

}

export default new SignUpPage();