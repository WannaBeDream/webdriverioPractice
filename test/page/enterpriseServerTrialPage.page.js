import Page from "./page";

class EnterpriseServerTrial extends Page {

    get inputName() {
        return $('#contact_request_name');
    }
    get inputCompany() {
        return $('#contact_request_organization_name');
    }
    get inputWorkEmail () {
        return $('#contact_request_email');
    }
    get inputPhoneNumber () {
        return $('#contact_request_phone');
    }
    get inputRadioAws () {
        return $('#contact_request_instance_type_aws');
    }
    get inputRadioQuestionsYes () {
        return $('#questions_yes');
    }
    get textareaQuestionsList () {
        return $('#questions-list');
    }
    get checkboxTermsOfUse () {
        return $('#contact_request_agreed_to_terms');
    }
    setInputName (value) {
        this.inputName.setValue(value)
    }
    setInputCompany (value) {
        this.inputCompany.setValue(value)
    }
    setInputWorkEmail (value) {
        this.inputWorkEmail.setValue(value)
    }
    setInputPhoneNumber (value) {
        this.inputPhoneNumber.setValue(value)
    }
    setTextareaQuestionsList (value) {
        this.textareaQuestionsList.setValue(value)
    }
    clickInputRadioAws() {
        this.inputRadioAws.click();
    }
    clickInputRadioQuestionsYes() {
        this.inputRadioQuestionsYes.click();
    }
    clickCheckboxTermsOfUse() {
        this.checkboxTermsOfUse.click();
    }

    open() {
        super.open('/trial')
    }
    pause(value = 2000) {
        super.pause(value)
    }
    checkIfElementDisplayed(e) {
        return super.checkIfElementDisplayed(e);
    }
}

export default new EnterpriseServerTrial();