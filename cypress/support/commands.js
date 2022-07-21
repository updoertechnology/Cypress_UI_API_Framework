// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload'
import 'cypress-localstorage-commands'
import { utils } from "../../cypress/support/utils/utils"

Cypress.Commands.add('postAuthToken', () => {
  //cy.clearLocalStorage()
 // cy.clearCookies()
  cy.request({
    method: 'POST',
            url: Cypress.env('BASE_URL') + 'oauth/token',
            failOnStatusCode: false,
            headers: { 'Content-Type': 'application/json' },
            body: {
                client_id: Cypress.env('M2M_CLIENT_ID'),
                client_secret: Cypress.env('M2M_CLIENT_SECRET'),
                grant_type: Cypress.env('M2M_GRANT_TYPE'),
                audience: Cypress.env('BASE_URL') + 'api/v2/',
            },
  }).then((response) => {
   console.log("Response is", response); 
   let authorization_token = response.body.access_token
   console.log("Auth Token is ", authorization_token)
    cy.setLocalStorage("auth_token", authorization_token)
    cy.saveLocalStorage()
  });
});

Cypress.Commands.add('navigateToRegistrationURL', () => {
  cy.visit(Cypress.env('BASE_URL') + 'bett/landing_page/2', { failOnStatusCode: false })
}),

  Cypress.Commands.add('navigateToSRegistrationURL', (persona) => {
    let SpringFairRegistrationURL = Cypress.env('REGISTRATION_BASE_URL') + persona
    cy.visit(SpringFairRegistrationURL, { failOnStatusCode: false })
  }),

  Cypress.Commands.add('clickOutside', () => {
    cy.get('body').click(0, 0); //0,0 here are the x and y coordinates
  }),

  Cypress.Commands.add('confirmCaptcha', function () {
    cy.wait(500)
    cy.get('iframe')
      .first()
      .then((recaptchaIframe) => {
        const body = recaptchaIframe.contents()
        cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
      })
  })

Cypress.Commands.add('switchToIframe', (iframe) => {
  return cy
    .get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})

Cypress.Commands.add('forceVisit', url => {
  cy.window().then(win => {
    return win.open(url, '_self');
  })
})

Cypress.Commands.add('logout', (EVENT_BASE_URL, redirectEndPoint) => {
  Cypress.log({
    name: 'logoutAuth0',
  });

  const options = {
    method: 'GET',
    url: Cypress.env('BASE_URL') + 'v2/logout'
      + '?returnTo=' + Cypress.env(EVENT_BASE_URL) + redirectEndPoint
      + '&client_id=' + Cypress.env('WEBAPP_CLIENT_ID'),
    failOnStatusCode: false,
  };
  cy.request(options);
});

Cypress.Commands.add('navigateToConnectEdURL', (endPoint) => {
  cy.visit(Cypress.env('CONNECTED_BASE_URL') + endPoint, { failOnStatusCode: false })
})

Cypress.Commands.add('navigateToOracleURL', (endPoint) => {
  cy.visit(Cypress.env('ORACLE_BASE_URL') + endPoint, { failOnStatusCode: false })
})

Cypress.Commands.add('navigateToURL', (endPoint) => {
  cy.visit(Cypress.env('testdata_BASE_URL') + endPoint, { failOnStatusCode: false })
})

Cypress.Commands.add('login', (userName) => {
  Cypress.log({
    name: 'loginViaAuth0',
  });

  const options = {
    method: 'POST',
    url: Cypress.env('BASE_URL') + 'oauth/token',
    body: {
      grant_type: 'password',
      username: userName,
      password: Cypress.env('PASSWORD'),
      audience: Cypress.env('BASE_URL') + 'api/v2/',
      scope: 'openid profile email',
      client_id: Cypress.env('WEBAPP_CLIENT_ID'),
      client_secret: Cypress.env('WEBAPP_CLIENT_SECRET'),
    },
  };
  cy.request(options);
})