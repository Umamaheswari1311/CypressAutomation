

/// <reference types="Cypress" />
describe('MyFirst suite',function()
{
    it('Test Case',function()
    {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //Cypress ability to manipulate DOM- Remove target attribute
    cy.get('#opentab').invoke('removeAttr','target').click();
    //check Get current url 
    cy.url().should('include','rahulshettyacademy')
    //navigate bck to original page
    cy.go('back')
    cy.go('forward')
})

})
