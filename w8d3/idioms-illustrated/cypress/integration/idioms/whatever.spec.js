/// <reference types="cypress" />


//  Einstein-Rosen Bridges -> Wormholes

describe("Some random online testing", () => {
  it("finds a serach result that talks about wormholes when searching for einstein-rosen bridges", () => {
    cy.visit("https://google.com")

    cy.get('.gLFyf').type("Einstein-Rosen Bridges")
    cy.get('.gLFyf').type("{enter}")
    cy.get('.tF2Cxc > .yuRUbf > a > .LC20lb').contains('Wormhole')
  })


})