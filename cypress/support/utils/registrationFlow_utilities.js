export class RegistrationFlow_Utilities {
    selectMutilevelMultiselectDropDown(mainOptionLocator, value, subOptionLocator) {
        this.selectMultilevelMultiSelectPrimaryOption(mainOptionLocator, value)
        this.selectmultilevelMultiselectSubOption(subOptionLocator)
    }

    selectMultilevelMultiSelectPrimaryOption(mainOptionLocator, value) {
        cy.get(mainOptionLocator).then(mainOptionLocator => {
            cy.get('[data-auto="multiLevel-multiSelect-dropdown"]')
                .find(mainOptionLocator)
                .find('li')
                .find('div')
                .contains(value)
                .click({ force: true })
        })
    }

    selectmultilevelMultiselectSubOption(subOptionLocator) {
        cy.get(subOptionLocator).then(subOptionLocator => {
            cy.get('[data-auto="multiLevel-multiSelect-dropdown-subOption"]')
                .find(subOptionLocator)
                .find('label')
                .find('.MuiIconButton-label')
                .find('[type="checkbox"]')
                .check({ force: true })
        })
    }

    verifyMultiLevelMultiSelctSelectedValue(locator, expectedValue) {
        cy.get(locator).then(locator => {
            cy.wrap(locator)
                .find('div')
                .find('div')
                .find('div')
                .should('contain', expectedValue)
        })
    }

    selectMultiSelectCheckBox(locator) {
        cy.get('[data-auto="multiSelect-checkBox"]')
            .find(locator)
            .find('label')
            .find('.MuiIconButton-label')
            .find('[type="checkbox"]')
            .check({ force: true })
    }

    checkCheckbox(locator) {
        cy.get(locator).then(locator => {
            cy.wrap(locator)
                .find('span')
                .find('.MuiIconButton-label')
                .find('[type="checkbox"]')
                .check({ force: true })
        })
    }

    checkboxWithSameAttribute(locator,index){
        cy.get(locator).then(locator =>{
            cy.wrap(locator)
            .eq(index)
            .find('span')
            .find('.MuiIconButton-label')
            .find('[type="checkbox"]')
            .check({ force: true })
            .should('be.checked')
        })
    }

    checkRadioButton(locator) {
        cy.get(locator).then(locator => {
            cy.wrap(locator)
                .find('.MuiIconButton-label')
                .find('[type="radio"]')
                .check({ force: true })
                .should('be.checked')
        })
    }

    selectTitle(mainOptionLocator, subOptionLocator) {
        cy.get(mainOptionLocator)
            .click()
        cy.get(subOptionLocator)
            .click()
    }

    checkAndVerifyOracleRdioButton(locator) {
        cy.get(locator).then(locator => {
            cy.wrap(locator)
                .check({ force: true })
                .should('be.checked')
        })
    }

    companyAddressDropdown() {
        cy.get('[class="InputAddressLookup_list_container__2LDf2"]').then(locator => {
            cy.wrap(locator).
                find('li').
                first().
                click({ force: true })
        })
    }
}
export const registrationFlowUtilities = new RegistrationFlow_Utilities()