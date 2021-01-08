/// <reference types="cypress" />

context("Create a new account", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("Fill the form and submit it", () => {
        cy.get('#username')
        .type('Roger')

        cy.get('#email')
        .type('roger@gmail.com')

        cy.get('#password')
        .type('password')

        cy.get('button.button').click()
    })

})
