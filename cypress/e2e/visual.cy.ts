describe('Visuell Regression', () => {
  it('startsida diff', () => {
    cy.visit('/')
    cy.compareSnapshot('homepage')
  })
})