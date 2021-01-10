/// <reference types="cypress" />
import { Random } from '../fixtures/random'

const username = Random(18)
const email = `${Random(12)}@test.com`
const password = Random(24)

context("New User Workflow 🍌", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("Normal behavior", () => {
        // Sign Up Page
        cy.get('#username')
            .type(username)

        cy.get('#email')
            .type(email)

        cy.get('#password')
            .type(password)

        cy.get('button.button').click()

        // Sign In Page

        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/login')
        })

        cy.get('h1').contains('Welcome Back')

        cy.get('#email')
            .type(email)

        cy.get('#password')
            .type(password)

        cy.get('button.button').click()


        // Threads Page

        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/threads')
        })

        cy.get('.card').contains('Anime')
    })

})
