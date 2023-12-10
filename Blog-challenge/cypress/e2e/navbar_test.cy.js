describe('Navbar', () => {
  it('should navigate to Home and Login pages', () => {
    cy.visit('http://localhost:5173');
    cy.get('nav').contains('Login').click();
    cy.url().should('include', '/login');
    cy.get('nav').contains('Home').click();
    cy.url().should('include', '/');
    cy.visit('http://localhost:5173/login');
    cy.get('nav').contains('My Blog').click();

  });

});
