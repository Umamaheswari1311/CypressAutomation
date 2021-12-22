

/// <reference types="Cypress" />
describe('MyFirst suite',function()
{
    it('Test Case',function()
    {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('tr td:nth-child(2)').each(($ele,index,$list)=>{
      if($ele.text().includes('Python'))
      {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(getPrice)
        {
           cy.log(getPrice.text())
           expect(getPrice.text()).to.equals('25')
        })
      }
    })

   })



})
