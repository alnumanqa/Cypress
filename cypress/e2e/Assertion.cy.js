/*
Cypress Assertion: 
1) Implicit Assertion---
    - Should('eq', 'contain', 'include', 'exist', 'have.length', 'have.value')
    - and

2) Explicit Assertion----
    - Expect-->BDD Test
    - Assert-->TDD Test

*/

/// <reference types="cypress" />

describe("Assertion Demo", function(){
    it.skip("Implicit Assertion with should keyword", ()=>{
        cy.visit("https://enthrallit.com/");
        cy.url().should('include', 'enthrall').should('eq', 'https://enthrallit.com/')
        .should('contain', 'com');
        
    })

    it.skip("Implicit Assertion with and keyword", ()=>{
        cy.visit("https://enthrallit.com/");
        cy.url().should('include', 'enthrallit').and('equal', 'https://enthrallit.com/')
        .and('not.contain', 'Numan').and('have.length', '23');
    })

    it.skip('Implicit assertion with logo', ()=>{
        cy.visit("https://enthrallit.com/");
        cy.get('.navbar > :nth-child(1) > img').should('exist').and('be.visible');
    })

    it("Explicit Assertion Demo", function(){
        cy.visit("https://enthrallit.com/");
        //click() is used to click on webelement;
        cy.xpath("//a[text()='Login']").click();
        cy.wait(3000);
        //type() is used to insert text in the input field
        cy.xpath("//input[@name='username']").type("alnumanqa@gmail.com");
        cy.xpath("//input[@name='password']").type("6466396008Ii");
        cy.xpath("//input[@value='Log In']").click();

        let expText = "Dashboard";
        cy.get('.main-title').then((x)=>{
            let actualText = x.text();
            expect(actualText).to.equal(expText);
        })  

    })
})