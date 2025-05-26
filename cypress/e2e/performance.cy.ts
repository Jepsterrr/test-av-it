describe('Lighthouse Audit', () => {
  it('prestanda på startsidan', () => {
    cy.visit('/')
    cy.lighthouse({ performance: 80, accessibility: 90 })
  })
})