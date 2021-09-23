import Page from "./page";

class AboutCareers extends Page {

    get openPositionLink() {
        return $('a[href="#positions"]');
    }
    get CarrersTagsArray() {
        return $$('//div[@class="Details js-details-container"]//h3');
    }
    clickOpenPositionLink() {
        this.openPositionLink.click();
    }
    consoleLogInfoAboutCareers() {
        this.CarrersTagsArray.forEach(e => {
            console.log(e.getText())
        });
    }
    open() {
        super.open('/about/careers')
    }
    pause(value = 2000) {
        super.pause(value)
    }


}

export default new AboutCareers();