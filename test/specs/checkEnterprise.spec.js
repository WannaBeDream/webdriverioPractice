import faker from 'faker';
import mainPage from '../page/main.page';
import enterprisePage from '../page/enterprisePage.page';
import joinPage from '../page/join.page';
import enterpriseServerTrialPage from '../page/enterpriseServerTrialPage.page';


describe("should visit enterprise's pages", () => {

    it("should go to enterprise page", () => {
        mainPage.open()
        mainPage.clickEnterpriseLink();
        mainPage.pause(2000)
    })
    it("should open topics page", () => {
        enterprisePage.clickStartFreeTrialButton()
        enterprisePage.pause(2000)
    })
    it("should go to enterpise cloud page", () => {
        enterprisePage.clickEnterpriseCloudDiv()
        enterprisePage.pause(2000)
    })
    it("should fill username input with valid data", () => {
        joinPage.usernameInput.moveTo();
        joinPage.setUsernameInput(faker.name.findName());
        joinPage.pause(2000);
    })  
    it("should fill email input with valid data", () => {
        joinPage.emailInput.moveTo();
        joinPage.setEmailInput(faker.internet.exampleEmail());
        joinPage.pause(2000);
    })  
    it("should fill password input with valid data", () => {
        joinPage.passwordInput.scrollIntoView()
        joinPage.pause(2000);
        joinPage.passwordInput.moveTo();
        joinPage.setPasswordInput(faker.internet.password());
        joinPage.pause(2000);
    })  
    it("should check create account button", () => {
        joinPage.createAccountButton.scrollIntoView()
        joinPage.pause(2000);
        joinPage.createAccountButton.moveTo();
        joinPage.checkIfElementDisplayed(joinPage.createAccountButton);
        joinPage.pause(2000);
    })  
    it("should go to the previous page", () => {
        browser.back()
    })  
    it("should go to enterpise server trial page", () => {
        enterprisePage.clickEnterpriseServerDiv();
        enterprisePage.pause(2000);
    })  
    it("should fill name input", () => {
        enterpriseServerTrialPage.setInputName(faker.name.findName());
        enterpriseServerTrialPage.pause(2000);
    })  
    it("should fill company input", () => {
        enterpriseServerTrialPage.setInputCompany(faker.company.companyName());
        enterpriseServerTrialPage.pause(2000);
    })  
    it("should fill work email input", () => {
        enterpriseServerTrialPage.setInputWorkEmail(faker.internet.exampleEmail());
        enterpriseServerTrialPage.pause(2000);
    })  
    it("should fill phone number input", () => {
        enterpriseServerTrialPage.setInputPhoneNumber(faker.phone.phoneNumber());
        enterpriseServerTrialPage.pause(2000);
    })  
    it("should click on aws radio input", () => {
        enterpriseServerTrialPage.clickInputRadioAws();
        enterpriseServerTrialPage.pause(2000);
    })  
    it("should click on radio input with text 'Questions about github enterprise?' ", () => {
        enterpriseServerTrialPage.clickInputRadioQuestionsYes();
        enterpriseServerTrialPage.pause(2000);
    })  
    it("should check displayng of questions textarea ", () => {
        enterpriseServerTrialPage.checkIfElementDisplayed(enterpriseServerTrialPage.textareaQuestionsList);
        enterpriseServerTrialPage.pause(2000);
    })  
    it("should fill textarea with some text", () => {
        enterpriseServerTrialPage.textareaQuestionsList.scrollIntoView();
        enterpriseServerTrialPage.pause(2000);
        enterpriseServerTrialPage.setTextareaQuestionsList(faker.lorem.paragraph());
        enterpriseServerTrialPage.pause(2000);
    })  
    it("should click to checkbox with text 'Accept terms of use' ", () => {
        enterpriseServerTrialPage.checkboxTermsOfUse.scrollIntoView();
        enterpriseServerTrialPage.pause(2000);
        enterpriseServerTrialPage.clickCheckboxTermsOfUse();
        enterpriseServerTrialPage.pause(2000);
    })  

})




