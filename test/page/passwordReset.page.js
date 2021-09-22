import Page from "./page";

class PasswordResetPage extends Page {

    get firstWraperCheckFrame() {
        return $('//iframe[@class="js-octocaptcha-frame width-full d-block border-0 rounded-2"]');
    }
    get secondWraperCheckFrame() {
        return $('#fc-iframe-wrap');
    }
    get thirdWraperCheckFrame() {
        return $('#CaptchaFrame');
    }
    get sendPasswordResetEmailButton() {
        return $('input[value="Send password reset email"]');
    }
    get frameCheckButton() {
        return $('#home_children_button');
    }
    get pageUrl() {
        return '/password_reset';
    }
    get resetEmailInput() {
        return $('#email_field');
    }
    get checkUserLink() {
        return $('a[aria-describedby="descriptionVerify"]');
    }
    clickCheckUserLink() {
        this.checkUserLink.click();
    }
    clickResetEmailInput() {
        this.resetEmailInput.click();
    }
    setResetEmailInput(value) {
        this.resetEmailInput.setValue(value);
    }
    open() {
        super.open('/password_reset')
    }
    pause(value = 1000) {
        super.pause(value)
    }
    checkIfElementDisplayed(e) {
        return super.checkIfElementDisplayed(e);
    }
    switchToFrame(frame) {
        super.switchToFrame(frame);
    }
    

}

export default new PasswordResetPage();