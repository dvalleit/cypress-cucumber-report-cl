import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigates to the growcity website", () => {
    cy.navigateWeb();
});

When("The user clicks on the contact link", () => {
    cy.homePageClickOn('linckContact');
});

Then("The user should see the phone number to contact", () => {
     cy.xpath("//h6[@class='heading-info-contact']").should('have.text','contacto@groowcity.com+56 2 777 888Isidora Goyenechea 3365, Las Condes, RM, Chile');
});