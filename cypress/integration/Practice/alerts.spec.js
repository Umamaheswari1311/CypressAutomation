

/// <reference types="Cypress" />
describe('MyFirst suite',function()
{
    it('Test Case',function()
    {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //Alert Automatically handle by cypress
    cy.get('#alertbtn').click();
    cy.get('#confirmbtn').click();

    // Firing the event through cypress to get access to the alert  
    cy.on('window:alert',(str)=>
    {
       expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm',(str)=>
    {
       expect(str).to.equal('Hello , Are you sure you want to confirm')
    })
})

})
