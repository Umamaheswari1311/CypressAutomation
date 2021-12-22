/// <reference types="Cypress" />
describe('MyFirst suite',function()
{
    it('Test Case',function()
    {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //cypress won't support new window but we can achive using jquery
    
    cy.get('#opentab').then(function(mov)
    {
     const url= mov.prop('href')
     cy.log(url)
     cy.visit(url)
    })

})

})
