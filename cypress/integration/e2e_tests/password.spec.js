describe('Password Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    
    it('should click on the signin button', () => {
        cy.get('#signin_button').click();
    });

    it('should click on the forgotten password link', () => {
        cy.get('.offset3 > a').click();
    });

    it('should fill email form in', () => {
        cy.get('#user_email').type('randomemail@gmail.com');
    });

    it('should submit the email with form', () => {
        cy.get('[value="Send Password"]').click();
        // cy.contains("Send Password").click();
    });
});