/// <reference types="Cypress" />
describe('MyFirst suite',function()
{
    before(function(){
        cy.fixture('example').then(function(data)
        {
        this.data=data
        })
    })
    it('Test Case',function()
    {
        cy.visit(Cypress.env("url")+"/angularpractice/")
        cy.get("a[href*='shop']").click()
      //  cy.pause()     
          this.data.product.forEach(element => {
            cy.selectProduct(element) 
        });
        cy.get("a[class*='btn']").click()
              
            cy.get('h4 a').each(($el,index,$list) =>{

                cy.get('h4 a').eq(index).should('have.text',this.data.product[index])

            })
})
})