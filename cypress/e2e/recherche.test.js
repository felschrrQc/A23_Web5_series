///<reference types="cypress"/>

describe("Recherche", () => {
    beforeEach(() => {
        cy.fixture('login').then((userData) => {
            cy.login(userData.username, userData.password);
        });
    });

    it("L'utilisateur peut rechercher une série", () => {
        cy.fixture('ahsoka').then((searchData) => {
            cy.get('#searchInput').type(searchData.serie.title);
            cy.get('#searchBtn').click();
            cy.url().should('include', '/search');
            cy.get(`#${searchData.serie.title}`).should('exist');
        });
    });
});