/// <reference types="cypress" />

context("Sign in with an existing account", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/login")
    })

    it("Fill the form and submit it", () => {

        cy.get('#email')
            .type('roger@gmail.com')

        cy.get('#password')
            .type('password')

        cy.get('button.button').click()
    })

})
