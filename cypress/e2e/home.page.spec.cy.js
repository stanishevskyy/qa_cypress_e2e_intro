/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page and display the expected heading', () => {
    cy.url().should('include', '/');
    cy.get('h1').should('contain.text', 'conduit');
  });

  it('should navigate to the Sign In page ', () => {
    cy.contains('.nav-link', 'Sign up').click();
  });
});
