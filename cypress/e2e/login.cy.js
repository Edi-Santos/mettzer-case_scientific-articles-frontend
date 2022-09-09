/// <reference types="cypress" />

const URL_LOGIN = 'http://localhost:3000/login';
const MAIN = 'main';

describe('Testando Tela de Login', () => {
  before(() => {
    cy.visit(URL_LOGIN);
  });

  it('1 - testa se há uma TAG <main /> e se esta possui um filho', () => {
    cy.get(MAIN).should('exist');
    cy.get(MAIN).should('have.length', 1);
  });
});
