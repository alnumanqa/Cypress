/// <reference types="cypress" />


describe("Dropdown", ()=>{
    //Url with select tag: https://www.zoho.com/commerce/free-demo.html
    it("Dropdown with select tag", ()=>{
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_address_country").select("Turkey").should('have.value', 'Turkey');

    })

    //Url without select tag: https://www.dummyticket.com/dummy-ticket-for-visa-application/
    it("Dropdown without select tag", function(){
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click();
        cy.get(".select2-search__field").type("Ukraine").type('{enter}');
        cy.get("#select2-billing_country-container").should('have.text', 'Ukraine');

    })

    //Url auto suggestion dropdown: https://www.wikipedia.org/
    it.only('Auto suggestion dropdown', ()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.xpath("//input[@id='searchInput']").type("New York");
        cy.xpath("//h3[@class='suggestion-title']").contains('New York');
    })


})