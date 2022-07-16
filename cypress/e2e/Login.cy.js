describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('[data-test="username"]').should("be.visible")
    cy.get('[data-test="password"]').should("be.visible")
  })
})