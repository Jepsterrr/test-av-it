describe('API Routes', () => {
  it('GET users 1', () => {
    cy.request('/api/users/1').then((response) => { // Skicka GET-förfrågan
      expect(response.status).to.equal(200); // Verifiera statuskoden
      expect(response.body).to.deep.equal({ // Verifiera responskroppen
        id: '1',
        name: 'Mia Svensson'
      });
    });
  });


  it('POST users', () => {
    cy.request('POST', '/api/users', { name: 'Alice' }).then((response) => { // Skicka POST-förfrågan
      expect(response.status).to.equal(201); // Verifiera statuskoden
      expect(response.body).to.have.property('id'); // Verifiera att id finns
      expect(response.body.name).to.equal('Alice'); // Verifiera att namnet är korrekt
    });
  });
})