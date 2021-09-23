import Page from "./page";

class ExplorePage extends Page {

    get topicsLink() {
        return $('nav[aria-label="Explore navigation"]  a[href="/topics"]');
    }

    clickTopicsLink() {
        this.topicsLink.click();
    }
    open() {
        super.open('/explore')
    }
    pause(value = 2000) {
        super.pause(value)
    }

}

export default new ExplorePage();