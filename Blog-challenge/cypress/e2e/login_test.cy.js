describe('Login Page', () => {
  it('should login successfully with correct data', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('#login-userName ').type('admin');
    cy.get('#login-password ').type('admin');
    cy.get('button[type="submit"]').click();  
    cy.get('p').should('contain.text', 'Gongrats! you are logged in.');
  });

  it('should show an error message with incorrect data', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('#login-userName ').type('test');
    cy.get('#login-password ').type('test');
    cy.get('button[type="submit"]').click();
    cy.get('p').should('contain.text', 'Wrong email or password');
  });
});
