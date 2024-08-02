// const EchoTechHomePage = require("../../page-objects/homePage/EchoTechHomePage");
import greytHRHomePage from "../../page-objects/homePage/greytHRHomePage";


let url;
const homepage = new greytHRHomePage();

describe("GreytHR Checkin and Checkout", function () {
    beforeEach(() => {
        cy.fixture('credentials').then(function (data) {
            url = data.url;

        });
    });

    before(() => {
        // Clear cookies before each test
        cy.clearCookies();
    });

    it("Navigate to home page", function () {
        homepage.navigateURLHome(url);
    });

    it("Enter Login ID and Password", function () {
        homepage.enterLoginDetails();
    });

    it("Login to GreytHR", function () {
        homepage.login();
    });
    
});