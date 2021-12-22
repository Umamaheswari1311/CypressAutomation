/// <reference types="Cypress" />

import HomePage from '../../../support/PageObjectPattern/HomePage'
import ProductPage from '../../../support/PageObjectPattern/ProductPage'
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
        const home=new HomePage()
        const product=new ProductPage()
        

        cy.visit(Cypress.env("url")+"/angularpractice/")
        home.getName().type(this.data.name)
          home.getGender().select(this.data.sex)
          home.getTwoWayBinding().should('have.value',this.data.name)
          home.getName().should('have.attr','minlength',2)
          home.getEntrepreneur().should('be.disabled')
          Cypress.config('defaultCommandTimeout',8000)
          home.getShop().click()
          this.data.product.forEach(element => {
            cy.selectProduct(element) 
        })
        product.getCheckout().click()
              
            product.getAddedItem().each(($el,index,$list) =>{
            product.getAddedItem().eq(index).should('have.text',this.data.product[index])

            })
        var sum=0
            product.getTotalOfIndivudal().each(($productPrice,index,$list)=>{
                var result=$productPrice.text().split(" ")
               result= result[1].trim()
              sum=Number(sum )+ Number(result)
            
        }).then(function()
        {
            cy.log(sum)
        })
        product.getTotal().then(function(total)
        {
          const check=total.text().split(" ")
         expect( Number(check[1].trim())).to.equal(sum)
        })
  
            product.getFinalCheckout().click()
            product.getCountry().type('India')
            Cypress.config("defaultCommandTimeout",10000)
            product.getSuggestion().click()
            product.getTerms().click()
            product.getPurchase().click()
       // product.getSucessMsg().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
       product.getSucessMsg().then(function(ele)
       {
        expect(ele.text().includes('Success')).to.be.true

       })
    })
})