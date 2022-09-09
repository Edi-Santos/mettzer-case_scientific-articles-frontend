/// <reference types="cypress" />

const URL_LOGIN = 'http://localhost:3000/login';
const MAIN = 'main';
const FORM = 'form';
const TITLE_H1 = 'h1';
const SECTION = 'section';
const LABEL = 'label';
const INPUT = `${SECTION}.input-container label input`;
const BUTTON = `${SECTION}.button-container button`;

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

  it('6 - testa se no <form /> há uma <section /> com a classe: .button-container', () => {
    cy.get(`${SECTION}.button-container`).should('exist');
  });

  it('7 - testa se a <section.buuton-container /> possui um button com o texto "Entrar" e outro com o texto "Cadastrar"', () => {
    cy.get(`${BUTTON}#login-button`).should('have.text', 'Entrar');
    cy.get(`${BUTTON}#register-button`).should('have.text', 'Cadastrar');
  });

  it('8 - testa a validação de email', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get(`${INPUT}#email`).clear();
    cy.get(`${INPUT}#password`).clear();

    cy.get(`${INPUT}#email`).type('erenemail.com');
    cy.get(`${BUTTON}#login-button`).click()
      .then(() => expect(stub.getCall(0)).to.be.calledWith('O Email deve ser um Email válido!!!'));
  });

  it('9 - testa a validação de senha', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get(`${INPUT}#email`).clear();
    cy.get(`${INPUT}#password`).clear();

    cy.get(`${INPUT}#email`).type('eren@email.com');
    cy.get(`${INPUT}#password`).type('12345');
    cy.get(`${BUTTON}#login-button`).click()
      .then(() => expect(stub.getCall(0)).to.be.calledWith('A senha deve conter, no mínimo, 6 dígitos!!!'));
  });
});
