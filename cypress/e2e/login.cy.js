/// <reference types="cypress" />

const URL_LOGIN = 'http://localhost:3000/login';
const MAIN = 'main';
const FORM = 'form';
const TITLE_H1 = 'h1';
const SECTION = 'section';
const LABEL = 'label';
const INPUT = `${SECTION}.input-container label input`;

describe('Testando Tela de Login', () => {
  before(() => {
    cy.visit(URL_LOGIN);
  });

  it('1 - testa se há uma TAG <main /> e se esta possui um filho', () => {
    cy.get(MAIN).should('exist');
    cy.get(MAIN).should('have.length', 1);
  });

  it('2 - testa se o filho de <main /> é um formulário', () => {
    cy.get(`${MAIN} ${FORM}`).should('exist');
  });
  
  it('3 - testa se no <form /> há um título com o texto: Login', () => {
    cy.get(`${FORM} ${TITLE_H1}`).should('exist');
    cy.get(`${FORM} ${TITLE_H1}`).should('have.text', 'Login');
  });

  it('4 - testa se no <form /> há uma <section /> com a classe: .input-container', () => {
    cy.get(`${SECTION}.input-container`).should('exist');
  });

  it('5 - testa se a <section.input-container /> possui 1 input para email e um para senha', () => {
    cy.get(`${LABEL} p#email-label`).should('have.text', 'Email:');
    cy.get(`${INPUT}#email`).type('eren@email.com');

    cy.get(`${LABEL} p#password-label`).should('have.text', 'Senha:');
    cy.get(`${INPUT}#password`).type('PotatoChips');
  });
});
