
/// <reference types="Cypress" />
describe('MyFirst suite',function()
{
    it('Test Case',function()
    {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    //cy.get('.product-image').should('have.length',4)
//storing WebElement using Alias 
cy.get('.products').as('ProductLocator')
cy.get('@ProductLocator').find('.product').should('have.length',4)
cy.get('@ProductLocator').find('.product').eq(2).contains('ADD').click();
    //parent child chasing
    // cy.get('.products').find('.product').should('have.length',4)
    //second index nd contains
   // cy.get('.products').find('.product').eq(2).contains('ADD').click();
    //Handling Elements to click specific element
    cy.get('.product').each(($el,index,$list) =>{
   if($el.find('h4').text().includes('Cashews'))
   {
       $el.find('button').click()
   }   
    })
    cy.get('.brand').should('have.text','GREENKART')
    cy.get('.brand').then(function(logo){
       cy.log( logo.text())
       console.log('Hai')
    })
    
    cy.get('.cart-icon > img').click()
    cy.get('.active').contains('PROCEED').click()
    cy.contains('Place').click()
})

})