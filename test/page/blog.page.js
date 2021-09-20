import Page from "./page";

class BlogPage extends Page {
    get solidLink() {
        return $('//a[@href="https://en.wikipedia.org/wiki/SOLID"]')
    }
    clickSolidLink() {
        this.solidLink.click();
    }
    open() {
        super.open('/blog/')
    }
    pause(value = 1000) {
        super.pause(value)
    }
    
}

export default new BlogPage();