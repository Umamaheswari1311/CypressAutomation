/// <reference types="Cypress" />
describe('MyFirst suite',function()
{
    it('Test Case',function()
    {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //invoke jquery method to show the mouse over text or menu items
    //cy.get('.mouse-hover-content').invoke('show')
   //cy.contains('Top').click()
   //cy.url().should('include','top') 
   cy.contains('Top').click({force:true})   

})

})
