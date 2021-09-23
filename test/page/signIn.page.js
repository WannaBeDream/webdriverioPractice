import Page from "./page";

class SignInPage extends Page {

    get pageUrl() {
        return '/login';
    }
    get loginInput() {
        return $('#login_field');
    }
    get passwordInput() {
        return $('#password');
    }
    get signInButton() {
        return $('input[value="Sign in"]');
    }
    get resetPasswordLink() {
        return $('a[href="/password_reset"]');
    }
    clickResetPasswordLink() {
        this.resetPasswordLink.click();
    }
    clickSignInButton() {
        this.signInButton.click();
    }
    clickLoginInput() {
        this.loginInput.click();
    }
    setLoginInput(value) {
        this.loginInput.setValue(value);
    }
    clickPasswordInput() {
        this.passwordInput.click();
    }
    setPasswordInput(value) {
        this.passwordInput.setValue(value);
    }
    open() {
        super.open('/login')
    }
    pause(value = 2000) {
        super.pause(value)
    }
    checkIfElementDisplayed(e) {
        return super.checkIfElementDisplayed(e);
    }

}

export default new SignInPage();