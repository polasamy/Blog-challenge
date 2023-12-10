
describe('BlogDetails Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  it('loads and displays first blog details', () => {

    cy.get('#blogNumber-1').click()
    cy.url().should('include', '/details')
    cy.contains('Next').should('exist')
    cy.contains('Previous').should('not.exist')
    cy.get(`h2`).should('exist')
    cy.get(`p`).should('exist')
    cy.get(`span`).should('exist')
  });
  it('loads and displays blog details', () => {

    for (let index = 2; index < 5; index++) {
      cy.visit('http://localhost:5173')
      cy.get(`#blogNumber-${index}`).click()
      cy.url().should('include', '/details')
      cy.contains('Next').should('exist')
      cy.contains('Previous').should('exist')
      cy.get(`h2`).should('exist')
      cy.get(`p`).should('exist')
      cy.get(`span`).should('exist')
    }
    // // Assuming the API response is stubbed using cy.intercept
    // cy.intercept('/postsDetails/*', { fixture: 'blogDetails.json' });

    // // Check if the Loading component is not visible initially
    // cy.get('.loading').should('not.exist');

    // // Wait for the component to load (assuming some loading indicator is present)
    // cy.get('.loading').should('not.exist');

    // // Assert on the loaded blog details
    // cy.get('.container').should('exist');
    // cy.get(' h2').should('exist');
    // cy.get(' p').should('exist');

    // // Check for the Previous and Next buttons
    // cy.get('button:contains("Previous")').should('exist');
    // cy.get('button:contains("Next")').should('exist');

    // // Simulate clicking the Previous button
    // cy.get('button:contains("Previous")').click();
    // // Assert on the expected behavior after clicking Previous

    // // Simulate clicking the Next button
    // cy.get('button:contains("Next")').click();
    // // Assert on the expected behavior after clicking Next
  });
  it('loads and displays the last blog details', () => {
  
    cy.get('#blogNumber-5').click()
    cy.url().should('include', '/details')
    cy.contains('Next').should('not.exist')
    cy.contains('Previous').should('exist')
    cy.get(`h2`).should('exist')
    cy.get(`p`).should('exist')
    cy.get(`span`).should('exist')
  });
  it('fetching the data correctly', () => {
    for (let index = 1; index < 6; index++) {
      cy.intercept('GET', `/postsDetails/${index}`, { fixture: 'blogDetails.json' }).as('getBlogDetails');
    }
      });
});
