describe('The Saarch Page', () => {
    it('successfully loads with redirect', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('eq', 'http://localhost:3000/search')
    })

    it('search update url', () => {
        cy.visit('http://localhost:3000')
        cy.get('input[name=searchQuery]').type('test')
        cy.get('input[name=searchQuery]').type('{enter}')
        cy.url().should('eq', 'http://localhost:3000/search/test')
    })

    it('search update numer of movies', () => {
        cy.visit('http://localhost:3000')
        cy.get('input[name=searchQuery]').type('trans')
        cy.get('input[name=searchQuery]').type('{enter}')
        cy.get('.card').its('length').should('eq', 6)
    })

})
