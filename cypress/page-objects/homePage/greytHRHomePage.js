import { default as homepage } from "./greyt-hr-homepage.json"

/**
 * GreytHR Home page object
//  * This class uses page objects from {@link greyt-hr-homepage.json}
 *
 * @export
 * @class GreytHRHomePage
 */
module.exports = class GreytHRHomePage {

    /**
       * Navigate to the Aulani URL - Home Page
       * @param{string} url- mention the type of Application
       */
    navigateURLHome(url) {
        cy.log("this is the URL : " + url);
        cy.visit(url);
    }

    enterLoginDetails() {
        cy.wait(5000);
        cy.get(homepage.page.userid)
            .clear()
            .type(homepage.expectedData.username);

        cy.get(homepage.page.pwd)
            .clear()
            .type(homepage.expectedData.password);
    }

    login() {
        cy.wait(5000);
        cy.get(homepage.page.login).click();
    }
}