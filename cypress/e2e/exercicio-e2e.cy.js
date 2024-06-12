/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import compraPage from "../support/page_objects/compra.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        compraPage.loginConta()
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
        
        cy.get('#primary-menu > .menu-item-629 > a').click()
        compraPage.addProduto1()
        compraPage.addProduto2()
        compraPage.addProduto3()
        compraPage.addProduto4()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_address_1').clear().type(faker.location.streetAddress())
        cy.get('#billing_city').clear().type(faker.location.city())
        cy.get('#billing_postcode').clear().type(faker.location.zipCode('04965070'))
        cy.get('#billing_phone').clear().type('11965843429')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.page-title').should('exist')
     
    });

})