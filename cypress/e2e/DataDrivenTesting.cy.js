/// <reference types="cypress" />

describe("Data Driven Testing", ()=>{
    it("Data Driven Testing", ()=>{
        cy.fixture("dataDrivenTest").then((data)=>{
            cy.visit("https://enthrallit.com/");
            cy.xpath("//a[text()='Login']").click();

            data.forEach((userData)=>{

                cy.xpath("//input[@name='username']").type(userData.username);
                cy.xpath("//input[@name='password']").type(userData.password);
                cy.xpath("//input[@value='Log In']").click();

                if(userData.username == "alnumanqa@gmail.com" && userData.password == "6466396008Ii"){
                    cy.xpath("//h1[text()='Dashboard']").should('have.text', userData.expected);
                    cy.wait(4000);
                    cy.get(".avatar-rounded").click();
                    cy.get(".fas.fa-power-off").click();
                }else{
                    cy.wait(4000);
                    cy.xpath("//div[contains(text(),'You have entered an')]")
                    .should('have.text', userData.expected);
                }
            })
        })
    })
})