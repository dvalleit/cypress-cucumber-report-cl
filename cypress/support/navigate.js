Cypress.Commands.add('navigateWeb', () => {
    cy.fixture('navigate').then((locator) =>{
        cy.visit(locator.navigateWebGroowcity);
    });
 });

