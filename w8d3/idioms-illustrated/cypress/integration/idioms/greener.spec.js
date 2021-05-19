/// <reference types="cypress" />

describe("Greener idiom user stories", () => {

  it("goes to the greener component", () => {
    cy.visit("/")

    cy.get('[href="/greener"]').click()

    cy.get('h1 span').should('have.text', "It's always greener on the other side")
  })

  it("shows the greener idiom when navigating directly to the /greener path", () => {
    cy.visit("/greener")
    cy.get('h1 span').should('have.text', "It's always greener on the other side")
  })

  it("should have the darker green color when the person is present", () => {
    cy.visit("/")

    cy.get('[href="/greener"]').click()

    cy.get('h1 span').should('have.text', "It's always greener on the other side")

    cy.get('.Side:first-of-type').should('not.have.class', 'other')
    cy.get('.Side:last-of-type').should('have.class', 'other')

    cy.get('.Side:first-of-type').click()

    cy.get('.Side:first-of-type').should('have.class', 'other')
    cy.get('.Side:last-of-type').should('not.have.class', 'other')
  })
})