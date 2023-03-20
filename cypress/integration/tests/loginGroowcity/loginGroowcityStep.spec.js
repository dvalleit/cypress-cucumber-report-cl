import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigates to the growcity website", () => {
    cy.navigateWeb();
});

And("The user clicks the register button", () => {
    cy.homePageClickOn('buttonSignIn');
});

And("The user enters incorrect data {string} and {string}", (email,password) => {
    cy.enterEmailAndPassword(email,password);
});

When("The user clicks the enter button", () => {
    cy.loginPageClickOn('buttonEnter');
});

Then("The user should see the message Username or password are incorrect", () => {
    cy.xpath("//p[@class='w-full mt-4 text-right text-red-500']").should('have.text','Usuario o password son incorrectos.');
});

