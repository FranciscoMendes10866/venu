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


        // Threads Page and Click Thread

        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/threads')
        })

        cy.get('.box').contains('Anime')

        cy.get('.tag').contains('question')

        cy.get('.box').contains('Anime').click()

        // Questions Page and CLick Question

        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/questions/7c5d0784-fbff-4e80-aff8-4bf8002f25f1')
        })

        cy.get('.box').contains('Bleach')

        cy.get('.tag').contains('Anime')

        cy.get('.box').contains('Bleach').click()

        // Question Page and Goes Back to the Threads Page

        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/question/c11d04ef-51e0-4a46-b21b-4829db6fd5e3')
        })

        cy.get('span.is-size-4').contains('Bleach')

        cy.get('div.navbar-brand').click()

        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/threads')
        })

        cy.get('.box').contains('Anime')

        // Sign Out

        cy.get('button.is-danger').contains('Log Out').click()

        cy.location().should((location) => {
            expect(location.href).to.eq('http://localhost:3000/login')
        })

        cy.get('h1').contains('Welcome Back')
    })

})
