describe('API Routes', () => {
  it('GET /api/users/1', () => {
    cy.request('/api/users/1')
      .its('status').should('eq', 200)
      .its('body').should('deep.equal', { id: '1', name: 'John Doe' })
  })

  it('POST /api/users', () => {
    cy.request('POST', '/api/users', { name: 'Alice' })
      .its('status').should('eq', 201)
      .its('body').should('have.property', 'id')
  })
})