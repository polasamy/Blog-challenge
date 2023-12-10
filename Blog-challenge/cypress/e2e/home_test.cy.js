
describe('Home Page', () => {
  it('should display blogs', () => {
    cy.visit('http://localhost:5173');
    cy.intercept('/posts', { fixture: 'blogDetails.json' }).as('getBlogs');
    cy.get('.loading-spinner').should('not.exist');
    cy.get('.blog').should('have.length.greaterThan', 0);
  });
  it('should display error message on failed API call', () => {
    cy.visit('http://localhost:5173');
    cy.intercept('/posts', { statusCode: 500 }).as('getBlogs');
  });
});
