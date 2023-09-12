/// <reference types="cypress" />
describe("RadioButtonAndCheckbox", ()=>{
    //beforeEach() will execute before it entering into the it() block.
    beforeEach('Enthrall RadioButtonAndCheckBox', ()=>{
        cy.visit("https://enthrallit.com/");
        cy.xpath("//a[text()='Selenium']").click();
    })

    it("Checking Radio button", ()=>{
        cy.xpath("(//input[@id='exampleRadios1'])[1]");
        //checking the visibility of the radio button
        cy.xpath("(//input[@id='exampleRadios1'])[1]").should('be.visible');
        //checking the the button
        cy.xpath("(//input[@id='exampleRadios1'])[1]").should('not.be.checked');
        cy.get(':nth-child(3) > #exampleRadios1').check().should('be.checked');
        cy.get(':nth-child(4) > #exampleRadios1').should('not.be.checked');

    })

    it('Checking single checkbox', ()=>{
        cy.get(':nth-child(2) > #flexCheckChecked');
        //checking the visibility of the element
        cy.get(':nth-child(2) > #flexCheckChecked').should('be.visible');
        //selecting a single checkbox
        cy.get(':nth-child(2) > #flexCheckChecked').check().should('be.checked');
        //unchecking the checkbox
        cy.get(':nth-child(2) > #flexCheckChecked').uncheck().should('not.be.checked');
    })

    it("selecting multiple checkbox at the same time", ()=>{
        //checking the visibility of the element and getting length
        cy.get("input.form-check-input[type='checkbox']").should('have.length', 9).and('be.visible');
        //selecting multiple checkbox
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');
        //unchecking multiple element 
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');
    })

    it.only("Selecting first and last checkbox", ()=>{
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');
    })


})