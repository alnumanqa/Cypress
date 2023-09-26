/// <reference types="cypress" />

describe("Validate WebTable Content", ()=>{
    beforeEach("Mouse operation", ()=>{
        cy.visit("https://enthrallit.com/")
        cy.xpath("//a[text()='Selenium']").click();
        cy.xpath("//h5[text()='DataTable Example']").scrollIntoView();
    })

    it("Check total number of rows and cols", ()=>{
        cy.get("table[id='dtHorizontalVerticalExample']>tbody>tr")
        .each(($row)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col)=>{
                    cy.log($col.text());
                })
            })

        })
    })

    it.only("Checking Specific Element", ()=>{
        cy.get('tbody > :nth-child(2) > :nth-child(2)')
        .should('have.text', 'Cox');
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text', 'Tokyo');
    })

})