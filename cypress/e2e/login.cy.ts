describe('Inloggning', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.injectAxe()
  })

  it('loggar in med giltiga uppgifter', () => {
    cy.get('#username').type('test')
    cy.get('#password').type('password')
    cy.get('button[type=submit]').click()
    cy.url().should('include', '/dashboard')
    cy.contains('Välkommen test!').should('be.visible')
  })

  it('ogiltiga uppgifter ger felmeddelande', () => {
    cy.get('#username').type('wrong')
    cy.get('#password').type('nope')
    cy.get('[type=submit]').click()
    cy.contains('Fel användarnamn eller lösen').should('be.visible')
  })

  it('a11y check på login-formulär', () => {
    cy.checkA11y('#login-form')
  })
})