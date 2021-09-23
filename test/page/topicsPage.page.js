import Page from "./page";

class TopicsPage extends Page {

    get topicsTitle() {
        return $('.h1');
    }
    open() {
        super.open('/topics')
    }
    pause(value = 2000) {
        super.pause(value)
    }
    compareText(e,value) {
        super.compareText(e,value);
    }
}

export default new TopicsPage();