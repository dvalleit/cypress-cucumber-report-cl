Cypress.Commands.add('clickOnButtonCreateAccount', ()=>{
    cy.fixture('organizationLocators').then((locator) =>{
        cy.xpath(locator.buttonCreateAccount).click('center');
    });
 });