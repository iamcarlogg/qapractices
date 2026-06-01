//command to login
Cypress.Commands.add(
    'login', (user,password)=>{
        cy.visit('/')
        cy.get('[data-test="username"]').clear().type(user)
        cy.get('[data-test="password"]').clear().type(password)
        cy.get('[data-test="login-button"]').click()
    }
)