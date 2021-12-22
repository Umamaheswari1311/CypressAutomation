/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('MyFirst suite',function()
{
    it('Test Case',function()
    {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find("a[href*='mentor']").eq(0).click()
    

})

})
