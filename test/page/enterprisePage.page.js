import Page from "./page";

class EnterprisePage extends Page {

    get startFreeTrialButton() {
        return $('a[href="/organizations/enterprise_plan?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise"]');
    }
    get enterpriseCloudDiv() {
        return $('a[href="https://github.com/join?plan=business_plus&ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise&setup_organization=true"]');
    }
    get enterpriseServerDiv() {
        return $('a[href="https://enterprise.github.com/trial?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise&source=pricing-card-enterprise"]');
    }
    clickEnterpriseCloudDiv() {
        this.enterpriseCloudDiv.click();
    }
    clickStartFreeTrialButton() {
        this.startFreeTrialButton.click();
    }
    clickEnterpriseServerDiv() {
        this.enterpriseServerDiv.click();
    }
    open() {
        super.open('/enterprise')
    }
    pause(value = 2000) {
        super.pause(value)
    }

}

export default new EnterprisePage();