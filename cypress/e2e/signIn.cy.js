/// <reference types="cypress" />

const testUser = {
  userName: 'ta',
  userEmail: 'ta@gmail.com',
  userPassword: '123',
};

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page and display the expected heading', () => {
    cy.get('h1').should('contain.text', 'conduit');
  });

  it('should navigate to the Sign In page ', () => {
    cy.contains('.nav-link', 'Sign in').click();
    cy.get('h1').should('contain.text', 'Sign in');
    cy.url().should('include', '/login');
  });

  it('should login a user successfully', () => {
    cy.contains('.nav-link', 'Sign in').click();

    cy.get('[type=email]').type(testUser.userEmail);
    cy.get('[type=password]').type(testUser.userPassword);
    cy.get('button[type=submit]').click();

    cy.contains('.nav-link', testUser.userName.toLowerCase()).should('exist');
    cy.url().should('not.include', '/login');
  });
});
