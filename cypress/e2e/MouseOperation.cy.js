/// <reference types="cypress" />

describe("Mouse Operation", ()=>{
    beforeEach("Mouse operation", ()=>{
        cy.visit("https://enthrallit.com/")
        cy.xpath("//a[text()='Selenium']").click();
    })

    it("Mouser hover Action", ()=>{
        cy.xpath("(//a[@class='nav-link white dropdown-toggle'])[1]").trigger('mouseover').click();
        cy.xpath("//a[text()='Windows']").should('be.visible');
        cy.xpath("//a[text()='Linux']").should('be.visible');
        cy.xpath("//a[text()='Mac']").should('be.visible');

    })

    it('Right click - 1', ()=>{
        cy.xpath("//h5[text()='Right Click Example']").scrollIntoView();
        cy.wait(3000);
        cy.xpath("//button[text()='Right Click One']").trigger('contextmenu');
        cy.xpath("//span[text()='Edit']").should('be.visible');
    })
    it('Right click - 2', ()=>{
        cy.xpath("//h5[text()='Right Click Example']").scrollIntoView();
        cy.wait(3000);
        cy.xpath("//button[text()='Right Click One']").rightclick();
        cy.xpath("//span[text()='Edit']").should('be.visible');
    })

    it("Double click", ()=>{
        cy.get('.doubleclick > .e-head').scrollIntoView();
        cy.wait(3000);
        cy.get('.doubleclick > .row > :nth-child(1) > .btn').dblclick();
    })
})