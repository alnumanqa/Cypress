/// <reference types="cypress" />

//creating test cases inside the describe block
describe('MyFirstTest', ()=>{

    //skip will not execute the test case
    it.skip("TitleTest-1", function(){
        //open the web page: cy.visit()
        cy.visit("https://enthrallit.com/")
        cy.title().should('eq', 'Enthrall IT');

    })

    it("TitleTest-2", ()=>{
        cy.visit("https://enthrallit.com/")
        cy.title().should('contain', "Enthrall")

    })

    //only will execute the test case that define with only
    it.only("TitleTest-3", ()=>{
        cy.visit("https://enthrallit.com/")
        cy.title().should('contain', "Enthrall")

    })

})