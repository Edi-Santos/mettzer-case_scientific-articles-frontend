/// <reference types="cypress" />

const URL_HOME = 'http://localhost:3000/home';
const HEADER = 'header';
const SECTION = 'section';

describe('Testando Tela Home', () => {
  before(() => {
    cy.visit(URL_HOME);
  });

  it('1 - testa se há um <header />', () => {
    cy.get(HEADER).should('exist');
  });

  it('2 - testa se no <header /> há um <img />', () => {
    cy.get(`${HEADER} img`).should('exist');
  });

  it('3 - testa se no <header /> há uma <section /> com a classe .data-user-container', () => {
    cy.get(`${HEADER} ${SECTION}.data-user-container`).should('exist');
  });
});
