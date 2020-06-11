describe('SearchBox Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    
    it('should type into searchbox and submit with pressing enterr', () => {
        cy.get('#searchTerm').type('Random Search {enter}');
    });

    it('should show search results page', () => {
        cy.get('h2').contains('Search Results:');
    });
});