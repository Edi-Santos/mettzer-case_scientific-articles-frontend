/// <reference types="cypress" />

const URL_HOME = 'http://localhost:3000/home';
const HEADER = 'header';

describe('Testando Tela Home', () => {
  before(() => {
    cy.visit(URL_HOME);
  });

  it('1 - testa se há um <header />', () => {
    cy.get(HEADER).should('exist');
  });
});
