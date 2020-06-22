describe('Feedback Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#feedback').click();
        // cy.contains('Feedback').click();
        // cy.get('#name').as('name');
    })

    it('should load feedback form', () => {
        cy.url().should('include', 'feedback.html');
        cy.get('#feedback-title').should('be.visible');
    });

    it('should fill in feedback form ', () => {
        cy.get('#name')
            .clear()
            .type('James Hughes');
        // cy.get('@name').clear().type('hugjimbo77@gmail.com');
        cy.get('#email')
            .clear()
            .type('hugjimbo77@gmail.com');
        cy.get('#subject')
            .clear()
            .type('English');
        cy.get('#comment')
            .clear()
            .type('This is an outrageous comment!')
    });

    it('should submit feedback form', () => {
        // cy.get('.btn-signin.btn.btn-primary').click();
        cy.get('[name="submit"]').click();
    });

    it('should display feedback message', () => {
        cy.get('#feedback-title').should('be.visible');
        cy.get('#feedback-title').contains('Feedback');
    })
});