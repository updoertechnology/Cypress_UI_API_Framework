// <reference types="cypress" />

import { utils } from "../support/utils/utils"
import { testdata } from "../fixtures/testdata.js"
import { firstpage } from "../support/pages/testfile"

describe('Describe block', () => {
    beforeEach(() => {
        cy.intercept('POST', '**/{extenion url}').as('registration')
        cy.log('******* FLOW START *******')
    })

 let eventName
    testdata.forEach(testdata => {
        it(`Test ${testdata.name}`, () => {  
            cy.clearCookies()
            // eventName = testdata.eventName
            // let email = testdata.Signup.emailAddress
            // let passwordForSignUp = testdata.Signup.password

            firstpage.methodname(); // method calling

            cy.navigateToURL('{}')

            cy.log('******* FLOW END *******') 

        })
        
    })
    afterEach(() => {
        if (eventName == '{event name}') {
            utils.logOut(eventName)
        }
    })

})
