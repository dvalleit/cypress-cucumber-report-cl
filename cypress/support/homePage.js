Cypress.Commands.add('homePageClickOn', (option)=>{
    cy.fixture('homeLocators').then((locator) =>{

        switch (option) {
            case "linckContact":
                cy.contains(locator.linkContact).click('center');
              break;

            case "buttonSignIn":
                cy.xpath(locator.buttonSignIn).click('center');
              break;

              case "buttonGetStarted":
                cy.contains(locator.buttonGetStarted).click({force:true});
              break;

            default:
              console.log("There is no such option");
              break;
          }
    });
 });


