
/// <reference types="Cypress" />
describe('MyFirst suite',function()
{
    it('Test Case',function()
    {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //select one checkbox
    //Assert Behaviour-is checked
    //Assert properties -selected value
    cy.get('#checkBoxOption1').check().should('be.checked').should('have.value','option1')
      //unselect checkbox
    //Assert Behaviour-is unchecked
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    //Select multiple checkboxes
    cy.get('input[type="checkbox"]').check()
    //unselect multiple checkboxes
    cy.get('input[type="checkbox"]').uncheck()
    //Select multiple checkboxes with values
    cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')

    //Radio button
    cy.get('[value="radio2"]').check().should('be.checked')
    cy.get('[value="radio3"]').check().should('be.checked')
    cy.get('[value="radio2"]').should('not.be.checked')
    })

})