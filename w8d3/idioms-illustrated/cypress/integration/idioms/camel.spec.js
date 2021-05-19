/// <reference types="cypress" />

describe("Greener idiom user stories", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.get('a').contains("camel").click()
  })


  it("should show the camel idiom directly when visiting /camel", () => {
    cy.visit("/camel")
    cy.get('h1').should('have.text', "The straw that broke the camel's back")
  })

  it("should add branches on the camel, and when over ten, it should break the camel", () => {
    const camel = cy.get(".CamelBack")

    camel.click()

    cy.get('.straw').should('have.length', 1)

    for (let i = 0; i < 10; i++) {
      cy.get(".CamelBack").click()
    }

    cy.get('.straw').should('have.length', 11)
    cy.get('.straw').should('have.class', 'straw')
    cy.get('.CamelBack').should('have.class', 'broken')

  })

  it("should merge back the camel when we click when it is broken apart", () => {
    cy.get(".CamelBack").should('not.have.class', 'broken')

    for (let i = 0; i < 11; i++) {
      cy.get(".CamelBack").click()
    }

    cy.get(".CamelBack").should('have.class', 'broken')

    cy.get(".CamelBack").click()

    cy.get(".CamelBack").should('not.have.class', 'broken')
    cy.get(".straw").should('have.length', 0)


  })

})