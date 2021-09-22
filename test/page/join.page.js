import Page from "./page";

class JoinPage extends Page {

    get usernameInput() {
        return $('#user_login');
    }
    get emailInput() {
        return $('#user_email');
    }
    get passwordInput() {
        return $('#user_password');
    }
    get createAccountButton() {
        return $('#signup_button');
    }
    clickPasswordInput() {
        this.passwordInput.click();
    }
    setPasswordInput(value) {
        this.passwordInput.setValue(value);
    }
    clickUsernameInput() {
        this.usernameInput.click();
    }
    setUsernameInput(value) {
        this.usernameInput.setValue(value);
    }
    clickEmailnput() {
        this.emailInput.click();
    }
    setEmailInput(value) {
        this.emailInput.setValue(value);
    }
    open() {
        super.open('/join?recommend_plan=true&ref_cta=Join%2520for%2520free&ref_loc=pricing%2520comparison&ref_page=%2Fpricing&source=pricing-comparison-free')
    }
    pause(value = 1000) {
        super.pause(value)
    }
    checkIfElementDisplayed(e) {
        return super.checkIfElementDisplayed(e);
    }

}

export default new JoinPage();