/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/user/login');
  });

  it('Should display correct title and input fields on Sign In page', () => {
    cy.url().should('contain', '/login');

    cy.get('h1').should('contain.text', 'Sign in');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Should login an existing user successfully', () => {
    cy.fixture('testUser.json').then(({ userEmail, userPassword, userName }) => {
      cy.get('input[type="email"]').type(userEmail);
      cy.get('input[type="password"]').type(userPassword);
      cy.get('button[type="submit"]').click();

      cy.contains('.nav-link', userName.toLowerCase()).should('exist');
      cy.url().should('not.include', '/login');
    });
  });
});
