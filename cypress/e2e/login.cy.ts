describe('Inloggning', () => {
  beforeEach(() => {
    cy.visit('/login') // Besök inloggningssidan
  })

  it('loggar in med giltiga uppgifter', () => {
    cy.get('[data-cy=input-username]').type('test')
    cy.get('[data-cy=input-password]').type('password')
    cy.get('[data-cy=btn-submit]').click()
    cy.url().should('include', '/dashboard') // Verifierar omredigering till dashboard
    cy.contains('Välkommen test!').should('be.visible') // Verifierar att välkomstmeddelandet visas
  })

  it('ogiltiga uppgifter ger felmeddelande', () => {
    cy.get('[data-cy=input-username]').type('wrong')
    cy.get('[data-cy=input-password]').type('nope')
    cy.get('[data-cy=btn-submit]').click()
    cy.url().should('include', '/login') // Verifierar att vi är kvar på inloggningssidan
    cy.contains('Fel användarnamn eller lösen').should('be.visible') // Verifierar att felmeddelandet visas
  })

  it('a11y check på login-formulär', () => {
    cy.injectAxe() // Injektera axe för a11y-kontroller
    cy.checkA11y(); // Kör audit
  })
})