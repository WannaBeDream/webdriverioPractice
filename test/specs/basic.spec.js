import mainPage from '../page/main.page'
import docsPage from '../page/docs.page'
import apiPage from '../page/api.page'
import blogPage from '../page/blog.page'
import contributePage from '../page/contribute.page'

describe("web driver io page", () => {

    it("should demonstrate the setValue to searchInput", () => {
        // 1 approach
        mainPage.open();
        mainPage.clickSearchButton();
        mainPage.pause();
        mainPage.setSearchInput('Bla bla bla');
        mainPage.pause();
        // 2 approach
        mainPage.open();
        mainPage.searchButton.click();
        mainPage.pause();
        mainPage.searchInput.setValue('Which approach do you prefer?')
        mainPage.pause();
    })
    
    it("should click Docs edit link", () => {
        // 1 approach
        docsPage.open();
        docsPage.clickEditLink();
        docsPage.pause();
        // 2 approach
        docsPage.open();
        docsPage.editLink.click();
        docsPage.pause();
    })
    it("should click API edit link", () => {
        // 1 approach
        apiPage.open();
        apiPage.clickEditLink();
        apiPage.pause();
        // 2 approach
        apiPage.open();
        apiPage.editLink.click();
        apiPage.pause();
    })
    it("should click SOLID link", () => {
        // 1 approach
        blogPage.open();
        blogPage.clickSolidLink();
        blogPage.pause();
        // 2 approach
        blogPage.open();
        blogPage.solidLink.click();
        blogPage.pause();
    })
    it("should click cod of conduct link", () => {
        // 1 approach
        contributePage.open();
        contributePage.clickCodeOfConductLink();
        contributePage.pause();
        // 2 approach
        contributePage.open();
        contributePage.codeOfConductLink.click();
        contributePage.pause();
    })

})