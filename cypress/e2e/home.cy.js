/// <reference types="cypress" />

const URL_HOME = 'http://localhost:3000/home';
const HEADER = 'header';
const SECTION = 'section';
const MAIN_HOME = 'main.main-home';
const BUTTON = 'button';

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

  it('4 - testa se na <section /> há um <h3 />', () => {
    cy.get(`${SECTION}.data-user-container h3`).should('exist');
  });

  it('5 - testa se na <section /> há um <button /> com o texto: SAIR', () => {
    cy.get(`${SECTION}.data-user-container button`).should('exist');
    cy.get(`${SECTION}.data-user-container button`).should('have.text', 'SAIR');
  });

  it('6 - testa se há um <main /> com a classe .main-home', () => {
    cy.get(MAIN_HOME).should('exist');
  });

  it('7 - testa se no <main /> há um <h2 /> com o texto: ARTIGOS', () => {
    cy.get(`${MAIN_HOME} h2`).should('exist');
    cy.get(`${MAIN_HOME} h2`).should('have.text', 'ARTIGOS');
  });

  it('8 - testa se no <main /> há uma <section /> com a classe .btn-article-container', () => {
    cy.get(`${MAIN_HOME} ${SECTION}.btn-article-container`).should('exist');
  });

  it('9 - testa se há botão de paginação para avançar e se é funcional', () => {
    cy.get(`${BUTTON}#next`).should('exist');
    cy.get(`${BUTTON}#next`).click();
  });

  it('10 - testa se há botão de paginação para voltar e se é funcional', () => {
    cy.get(`${BUTTON}#previous`).should('exist');
    cy.get(`${BUTTON}#previous`).click();
  });

  it('11 - testa o botão "SAIR"', () => {
    cy.get(`${SECTION}.data-user-container button`).click();
    cy.url('http://localhost:3000/login');
  });
});
