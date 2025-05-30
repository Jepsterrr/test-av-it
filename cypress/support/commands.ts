declare namespace Cypress {
  interface Chainable {
    login(user?: string, pass?: string): Chainable<void>
  }
}