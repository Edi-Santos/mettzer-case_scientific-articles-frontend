/// <reference types="cypress" />

const URL_HOME = 'http://localhost:3000/home';

describe('Testando Tela Home', () => {
  before(() => {
    cy.visit(URL_HOME);
  });
});
