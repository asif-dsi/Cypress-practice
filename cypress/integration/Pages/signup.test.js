describe("Sign up to Miro", () => {
    let info;
    beforeEach("Visit site", () => {
        cy.fixture('informations').then((i) => {
            info = i
        })        
    })

    it("sign up", ()=> {
        cy.visit('https://miro.com/signup/')
        Cypress.on('uncaught:exception', function (err, runnable) {
            return false
        })
        cy.get('#name',{ timeout: 10000 }).should('be.visible').type(info.name)
        cy.get('#email',{ timeout: 10000 }).should('be.visible').type(info.email)
        cy.get('#password',{ timeout: 10000 }).should('be.visible').type(info.password)
        cy.get('#signup-terms',{ timeout: 10000 }).should('be.visible').click({ force: true })
        cy.get('.signup__submit').click()
        Cypress.on('uncaught:exception', function (err, runnable) {
            return false
        })
        cy.get('#code',{ timeout: 10000 }).should('be.visible').type('1234')
        cy.contains('Check your email')
    })

    it("sign up with invalid email", ()=> {
        cy.visit('https://miro.com/signup/')
        Cypress.on('uncaught:exception', function (err, runnable) {
            return false
        })
        cy.get('#name',{ timeout: 10000 }).should('be.visible').type(info.name)
        cy.get('#email',{ timeout: 10000 }).should('be.visible').type(info.invalid_email)
        cy.get('#password',{ timeout: 10000 }).should('be.visible').click()
        cy.contains('Enter a valid email address.')
    })

    it("sign up with empty email", ()=> {
        cy.visit('https://miro.com/signup/')
        Cypress.on('uncaught:exception', function (err, runnable) {
            return false
        })
        cy.get('#name',{ timeout: 10000 }).should('be.visible').type(info.name)
        cy.get('#password',{ timeout: 10000 }).should('be.visible').type(info.password)
        cy.get('#signup-terms',{ timeout: 10000 }).should('be.visible').click({ force: true })
        cy.get('.signup__submit').click()
        cy.contains('Enter your email address.')
    })

    it("sign up with empty name", ()=> {
        cy.visit('https://miro.com/signup/')
        Cypress.on('uncaught:exception', function (err, runnable) {
            return false
        })
        cy.get('#email',{ timeout: 10000 }).should('be.visible').type(info.email)
        cy.get('#password',{ timeout: 10000 }).should('be.visible').type(info.password)
        cy.get('#signup-terms',{ timeout: 10000 }).should('be.visible').click({ force: true })
        cy.get('.signup__submit').click()
        Cypress.on('uncaught:exception', function (err, runnable) {
            return false
        })
        cy.contains('Please enter your name.')
    })

    it("sign up with empty password", ()=> {
        cy.visit('https://miro.com/signup/')
        Cypress.on('uncaught:exception', function (err, runnable) {
            return false
        })
        cy.get('#name',{ timeout: 10000 }).should('be.visible').type(info.name)
        cy.get('#email',{ timeout: 10000 }).should('be.visible').type(info.email)
        cy.get('#signup-terms',{ timeout: 10000 }).should('be.visible').click({ force: true })
        cy.get('.signup__submit').click()
        Cypress.on('uncaught:exception', function (err, runnable) {
            return false
        })
        cy.contains('Enter your password.')
    })

    it("sign up without accepting terms and condition", ()=> {
        cy.visit('https://miro.com/signup/')
        Cypress.on('uncaught:exception', function (err, runnable) {
            return false
        })
        cy.get('#name',{ timeout: 10000 }).should('be.visible').type(info.name)
        cy.get('#email',{ timeout: 10000 }).should('be.visible').type(info.email)
        cy.get('#password',{ timeout: 10000 }).should('be.visible').type(info.password)
        cy.get('.signup__submit').click()
        Cypress.on('uncaught:exception', function (err, runnable) {
            return false
        })
        cy.contains('Please agree with the Terms to sign up.')
    })
})