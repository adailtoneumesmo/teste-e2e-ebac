class compraPage {
 
    loginConta(){
        cy.visit('minha-conta')
        cy.get('#username').type('adailton.vini.silva@gmail.com')
        cy.get('#password').type('Eumesmo@11060')
        cy.get('.woocommerce-form > .button').click()
    }

    addProduto1(){
        cy.get('.product-block ').eq(0).click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
    }

    addProduto2(){
        cy.get('.product-block ').eq(2).click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
    }

    addProduto3(){
        cy.get('.product-block ').eq(4).click()
        cy.get('.button-variable-item-36').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
    }

    addProduto4(){
        cy.get('.product-block ').eq(4).click()
        cy.get('.button-variable-item-36').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
                
    }
}

export default new compraPage()