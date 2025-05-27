describe('API Routes', () => {
  it('GET users 1', () => {
    cy.request('/api/users/1').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({
        id: '1',
        name: 'Mia Svensson'
      });
    });
  });


  it('POST users', () => {
    cy.request('POST', '/api/users', { name: 'Alice' })
      .then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
      });
  });
})