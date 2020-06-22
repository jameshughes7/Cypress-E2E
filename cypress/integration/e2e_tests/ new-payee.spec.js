describe('New Payee Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#signin_button').click();
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.pwd;
        cy.login(username, password);
        })
    })

    it('Should add new payee to the list', () => {
        cy.get('#pay_bills_tab').click();
        cy.contains('Add New Payee').click();
        // cy.get('#ui-tabs-2').click();
        cy.get('#np_new_payee_name').type('Caryn Hughes');
        cy.fixture('user').then(user => {
            const line1 = user.address.addressLine1;
            const line2 = user.address.addressLine2;
            const city = user.address.city;
            const postcode = user.address.postcode;

            cy.get('#np_new_payee_address').click()
            .type(line1)
            .type(line2)
            .type(city)
            .type(postcode);
        })
        cy.get('#np_new_payee_account').type(12345678);
        cy.get('#np_new_payee_details').type("Mr Brown");
        cy.get('#add_new_payee').click();
        cy.get('#alert_container > #alert_content').should('contain.text', "Caryn Hughes")
    });

        //pay saved payee
        // cy.get('#sp_payee').click();
        // cy.get('#sp_payee > option')
        // .each(($el) => {
        //     cy.log($el);
        //     if ($el.text() === 'Bank of America'){
        //         cy.wrap($el).click();
        //     }
        // });

        // cy.get('#sp_account').click();
        // cy.get('#sp_account > option')
        //     .each(($el => {
        //         cy.log($el);
        //         if($el.text() === 'Credit Card'){
        //             cy.wrap($el).click();
        //         }
        //     }))

        // cy.get('#sp_amount')
        //     .clear()
        //     .type('1000');
        
        // cy.get('#sp_payee').should('contain.text', 'Bank of America');
        // cy.get('#sp_account').should('contain.text', 'Credit Card');
    

    it('should show success message', () => {
       // TODO
    })
});
