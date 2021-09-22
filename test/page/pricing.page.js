import Page from "./page";

class PricingPage extends Page {

    get joinForFreeButton() {
        return $('//a[@href="/join?plan=free&ref_cta=Join%2520for%2520free&ref_loc=cards&ref_page=%2Fpricing&source=pricing-card-free"]');
    }

    clickJoinForFreeButton() {
        this.joinForFreeButton.click();
    }
    open() {
        super.open('/pricing')
    }
    pause(value = 1000) {
        super.pause(value)
    }

}

export default new PricingPage();