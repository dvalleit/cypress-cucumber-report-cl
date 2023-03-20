Cypress.Commands.add('enterEmailAndPassword', (email,password)=>{
    cy.fixture('loginLocators').then((locator) =>{
        cy.xpath(locator.inputEmail).type(email);
        cy.xpath(locator.inputPassword).type(password);
    });
});

 Cypress.Commands.add('loginPageClickOn', (option)=>{
    cy.fixture('loginLocators').then((locator) =>{

        switch (option) {
            case "buttonEnter":
                cy.xpath(locator.buttonEnter).click('center');
              break;

            case "comboBoxLanguages":
                cy.xpath(locator.comboBoxLanguages).click('center');
              break;

            case "optionLanguageEnglish":
                cy.contains(locator.optionLanguageEnglish).click('center');
              break;

            default:
              console.log("There is no such option");
              break;
          }
    });
 });