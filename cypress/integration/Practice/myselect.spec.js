
/// <reference types="Cypress" />
describe('MyFirst suite',function()
{
    it('Test Case',function()
    {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //static Drop down
    //Select by value or Select by text
    cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
    //Dynamic drop down or Auto suggession
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($ele,index,$list)=> {
      if($ele.text().includes('India'))
      {
        $ele.click()
      }
    })
    cy.get('#autocomplete').should('have.value','India')
    // check visible
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    //check invisible
    cy.get('#displayed-text').should('not.be.visible')
       })

})