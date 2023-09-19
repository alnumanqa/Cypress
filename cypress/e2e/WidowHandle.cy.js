/// <reference types="cypress" />
//https://the-internet.herokuapp.com/windows

describe("Handle Window", ()=>{
    it("Window Handle - 1", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");// parent window
        cy.get(".example>a").invoke('removeAttr', 'target').click();
        cy.url().should('include', "https://the-internet.herokuapp.com/windows/new");//child window
    })

    it.only("Window Handle - 2", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");// parent window
        cy.get(".example>a").then((e)=>{
            let url =e.prop("href")
            cy.visit(url);
        })
        cy.url().should('include', "https://the-internet.herokuapp.com/windows/new");//child window
    })

})