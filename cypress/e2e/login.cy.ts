describe('Inloggning', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.injectAxe()
  })

  it('loggar in med giltiga uppgifter', () => {
    cy.get('[data-cy=input-username]').type('test')
    cy.get('[data-cy=input-password]').type('password')
    cy.get('[data-cy=btn-submit]').click()
    cy.url().should('include', '/dashboard')
    cy.contains('Välkommen test!').should('be.visible')
  })

  it('ogiltiga uppgifter ger felmeddelande', () => {
    cy.get('[data.cy=input-username]').type('wrong')
    cy.get('[data-cy=input-password]').type('nope')
    cy.get('[data-cy=btn-submit]').click()
    cy.contains('Fel användarnamn eller lösen').should('be.visible')
  })

  it('a11y check på login-formulär', () => {
    cy.checkA11y('#login-form')
  })
})