/// <reference types="cypress" />
describe("Alerts", ()=>{

    beforeEach('Alert', ()=>{
    //url: https://the-internet.herokuapp.com/javascript_alerts
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    })

    //Cypress automatically handle alert. By default cypress will click ok.
    it("JS Alerts", ()=>{
    cy.get("button[onclick='jsAlert()']").click();
    cy.wait(3000)
    cy.get('#result').should('have.text', "You successfully clicked an alert")

    })

    it('Confirmation Alerts - click ok', ()=>{
        cy.get(':nth-child(2) > button').click();
        cy.on('window:confirm', (a)=>{
            expect(a).to.contains("I am a JS Confirm");

        })

        cy.get('#result').should('have.text', 'You clicked: Ok');


    })

    it('Confirmation Alerts - click cancel', ()=>{
        cy.get(':nth-child(2) > button').click();
        cy.on('window:confirm', (a)=>{
            expect(a).to.contains("I am a JS Confirm");

        })

        cy.on('window:confirm', ()=>false)

        cy.get('#result').should('have.text', 'You clicked: Cancel');
    })

    it.only('Prompt Alert', ()=>{
        cy.window().then((win) =>{
            cy.stub(win, 'prompt').returns('Welcome')
        });
        cy.get(':nth-child(3) > button').click();
        cy.get('#result').should('have.text', 'You entered: Welcome');
    })

    
   
})