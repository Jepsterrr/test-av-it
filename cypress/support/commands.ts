declare namespace Cypress {
  interface Chainable {
    login(user?: string, pass?: string): Chainable<void>
  }
}

Cypress.Commands.add('login', (user = 'test', pass = 'password') => {
  cy.visit('/login')
  cy.get('#username').type(user)
  cy.get('#password').type(pass)
  cy.get('button[type=submit]').click()
})