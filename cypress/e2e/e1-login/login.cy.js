describe('Login', ()=>{
    beforeEach(()=>{
        cy.fixture('user').as('users')
    })
    //valid login -> redirects to /inventory
    it('sucessfull login redirects to inventory',function(){
    cy.login(this.users.valid.user, this.users.valid.password)
    cy.url().should('include','/inventory')
    cy.get('[data-test="title"]').should('have.text', "Products")
})
    //wrong login -> don't redirect -> get error message
    it('wrong login shows invalid credentials', function(){
        cy.login(this.users.invalid.user, this.users.invalid.password)
        cy.get('.error-message-container').should('be.visible').and('contain', 'Username and password do not match')
        cy.url().should('not.include', ' inventory')
    })
    //locked-out user -> dont redirect -> get locked-out message
    it('locked out user tries to login', function(){
        cy.login(this.users.blocked.user,this.users.blocked.password)
        cy.get('.error-message-container').should('be.visible').and('contain','Sorry, this user has been locked out.')
        cy.url().should('not.include','inventory')
        //or cy.url('eq','/')
    }
    )
    //logout -> login -> redirects to /inventory -> then search logout menu -> redirects to base url
    it('logout from an current session', function(){
        cy.login(this.users.valid.user, this.users.valid.password)
        cy.url().should('include','/inventory')
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click(
        )
        cy.url().should('eq',Cypress.config('baseUrl') + '/')
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')

    })
})

