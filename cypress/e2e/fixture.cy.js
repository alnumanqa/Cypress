/// <reference types="cypress" />

describe("Get Data From Fixture", ()=>{
    
    it("Hardcoded Data", function(){
        cy.visit("https://enthrallit.com/");
        cy.xpath("//a[text()='Login']").click();
        cy.xpath("//input[@name='username']").type("alnumanqa@gmail.com");
        cy.xpath("//input[@name='password']").type("6466396008Ii");
        cy.xpath("//input[@value='Log In']").click();
        cy.xpath("//h1[text()='Dashboard']").should('have.text', 'Dashboard');

    })

    it.only("Get Data from Fixture file", ()=>{
        cy.visit("https://enthrallit.com/");
        cy.xpath("//a[text()='Login']").click();

        cy.fixture('loginData.json').then((data)=>{
            cy.wait(2000);
            cy.xpath("//input[@name='username']").type(data.username);
            cy.wait(2000);
            cy.xpath("//input[@name='password']").type(data.password);
            cy.xpath("//input[@value='Log In']").click();
            cy.xpath("//h1[text()='Dashboard']").should('have.text', data.expected);

        })
    })
})