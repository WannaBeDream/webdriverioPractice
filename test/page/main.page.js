import Page from "./page";

class MainPage extends Page {

    get signUpButton() {
        return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]:last-child');
    }
    get searchInput() {
        return $('//input[@placeholder="Search GitHub"]');
    }
    get signInButton() {
        return $('a[href="/login"]');
    }
    get whyGitHubButton() {
        return $('//*[@class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block" and contains(text(),"Why GitHub?")]')
    }
    get exploreButton() {
        return $('//*[@class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block" and contains(text(),"Explore")]')
    }
    get pricingButton() {
        return $('//*[@class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block" and contains(text(),"Pricing")]')
    }
    get viewProfileAndMoreButton() {
        return $('//*[@aria-label="View profile and more"]');
    }
    get ProfileAndMoreTitle() {
        return $('//a[@href="/GalyaPulemet"]/strong');
    }
    get featuresLink() {
        return $('.dropdown-menu a[href="/features"]');
    }
    get exploreLink() {
        return $('//a[@href="/explore"]');
    }
    get plansLink() {
        return $('//a[@href="/pricing" and contains(text(),"Plans")]');
    }
    get careersLink() {
        return $('a[href="/about/careers"]');
    }
    get signOutButton() {
        return $('//*[@class="dropdown-item dropdown-signout"]');
    }
    get enterpriseLink() {
        return $('//a[@href="/enterprise" and @class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block"]');
    }
    clickSignOutButton() {
        this.signOutButton.click();
    }
    clickCareersLink() {
        this.careersLink.click();
    }
    clickEnterpriseLink() {
        this.enterpriseLink.click();
    }
    clickSearchInput() {
        this.searchInput.click();
    }
    setSearchInput(value) {
        this.searchInput.setValue(value);
    }
    clickProfileAndMoreTitle() {
        this.ProfileAndMoreTitle.click();
    }
    clickViewProfileAndMoreButton() {
        this.viewProfileAndMoreButton.click();
    }
    clickSignUpButton() {
        this.signUpButton.click();
    }
    clickSignInButton() {
        this.signInButton.click();
    }
    compareText(e,value) {
        super.compareText(e,value)
    }
    open() {
        super.open('')
    }
    pause(value = 2000) {
        super.pause(value)
    }

}

export default new MainPage();