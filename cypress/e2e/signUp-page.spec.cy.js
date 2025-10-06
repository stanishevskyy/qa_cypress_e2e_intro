/// <reference types="cypress" />

import { generateUser } from '../support/generateUser';

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/user/register');
  });

  it('Should display correct title and input fields on Sign Up page', () => {
    cy.url().should('contain', '/register');

    cy.get('h1').should('contain.text', 'Sign up');

    cy.get('input[type="text"]').should('be.visible');

    cy.get('input[type="email"]').should('be.visible');

    cy.get('input[type="password"]').should('be.visible');

    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Should register a new user successfully', () => {
    const testUser = generateUser();

    cy.get('input[type="text"]').type(testUser.userName);
    cy.get('input[type="email"]').type(testUser.userEmail);
    cy.get('input[type="password"]').type(testUser.userPassword);

    cy.get('button[type="submit"]').click();

    cy.contains('.nav-link', testUser.userName.toLowerCase()).should('exist');

    cy.writeFile('cypress/fixtures/testUser.json', testUser).then(() =>
      cy.fixture('testUser.json').should('deep.equal', testUser)
    );
  });
});
