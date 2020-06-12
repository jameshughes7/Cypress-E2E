describe('Feedback Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#feedback').click();
        // cy.contains('Feedback').click();
    })

    it('should load feedback form', () => {
        cy.url().should('include', 'feedback.html');
        cy.get('#feedback-title').should('be.visible');
    });

    it('should fill in feedback form ', () => {
        cy.get('#name').clear();
        cy.get('#name').type('James Hughes');
        cy.get('#email').clear();
        cy.get('#email').type('hugjimbo77@gmail.com');
        cy.get('#subject').clear();
        cy.get('#subject').type('English');
        cy.get('#comment').clear();
        cy.get('#comment').type('This is an outrageous comment!')
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