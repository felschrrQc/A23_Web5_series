describe("Requêtes à l'API", () => {
    it("Requête à l'API pour la série Ahsoka", () => {
        cy.fixture('Ahsoka').then((fixtureData) => {
            cy.request('GET', 'http://localhost:3000/api/series/Ahsoka')
            .its('body') 
            .should('deep.equal', fixtureData);
        });
    });
});
