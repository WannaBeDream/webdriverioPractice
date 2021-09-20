import Page from "./page";

class MainPage extends Page {

    get searchButton() {
        return $('.DocSearch.DocSearch-Button');
    }
    get searchInput() {
        return $('input.DocSearch-Input');
    }
    clickSearchButton() {
        this.searchButton.click();
    }
    setSearchInput(value) {
        this.searchInput.setValue(value);
    }
    open() {
        super.open('')
    }
    pause(value = 1000) {
        super.pause(value)
    }

}

export default new MainPage();