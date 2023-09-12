/// <reference types="cypress" />

describe("Logo validation", function(){
    it('logo validation-1', ()=>{
        cy.visit("https://enthrallit.com/")
        //get() is used for getting css selector
        cy.get('.navbar > :nth-child(1) > img').should("exist");
        
    })
})