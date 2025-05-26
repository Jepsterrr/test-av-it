describe('Inloggning', () => {
  beforeEach(() => cy.visit('/login'))

  it('loggar in med giltiga uppgifter', () => {
    cy.login()
    cy.url().should('include', '/dashboard')
    cy.contains('Välkommen test!').should('be.visible')
  })
})