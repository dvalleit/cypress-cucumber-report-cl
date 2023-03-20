import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigates to the growcity website", () => {
    cy.navigateWeb();
});

And("The user clicks the Get Started Now", () => {
    cy.homePageClickOn('buttonGetStarted');
});

When("The user does not enter data and clicks the create account button", () => {
   cy.clickOnButtonCreateAccount();
});

Then("The user should see the validations in red", () => {
    cy.contains('Contraseñas no son iguales').should('be.visible')
});