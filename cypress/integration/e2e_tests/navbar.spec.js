describe('Navbar Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
    })

    it('should show correct number of navBar links', () => {
        cy.get('#pages-nav li').should('have.length',3);
    }) 

    it('should display online banking content', () => {
        cy.contains('Online Banking').click();
        cy.url().should('include', 'online-banking.html');
        cy.get('#onlineBankingMenu').should('be.visible');
        cy.get('#onlineBankingMenu').should('contain.text', 'Online Banking');
        cy.get("#onlineBankingMenu[class='active']").should('be.visible');
    });

    it('should display feedback content', () => {
        cy.contains('Feedback').click();
        cy.url().should('include', 'feedback.html');
        cy.get('#feedback-title').should('be.visible');
        cy.get('#feedback-title').should('contain.text', 'Feedback');
    });

    it('should display homepage content', () => {
        cy.contains('Zero Bank').click();
        cy.url().should('include', 'index.html');
        cy.get("#homeMenu[class='active']").should('be.visible');
    });

    // List of elements to iterate over
    // it('should display online banking content', () => {
    //     cy.get('#pages-nav li')
    //     .each(($el) => {
    //         cy.log($el);
    //         if ($el.text() === 'Online Banking'){
    //             cy.wrap($el).click();
    //         }
    //     });
    //     cy.get('h1').should('contain.text', 'Online Banking')
    // });
});