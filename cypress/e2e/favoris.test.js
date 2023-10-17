///<reference types="cypress"/>

describe("Favoris", () => {
    beforeEach(() => {
        cy.fixture('login').then((userData) => {
            cy.login(userData.username, userData.password);
        });
    });
    
    it("L'utilisateur peut ajouter une série dans ses favoris", () => {
        cy.fixture('ahsoka').then((searchData) => {
            cy.get('#searchInput').type(searchData.serie.title);
            cy.get('#searchBtn').click();
            cy.url().should('include', '/search');
            cy.get(`#${searchData.serie.title}Link`).click();
            cy.get('#favoriteBtn').click();
            cy.get('#profil').click();
            cy.get(`#${searchData.serie.title}`).should('have.text',`${searchData.serie.title}`);
        });
    }); 


    
    it("Le bon nombre de séries favorites est affiché dans /profil", () => {
        cy.get('#trending').click();
        cy.get('#BillionsLink').click();
        cy.get('#favoriteBtn').click();
        cy.get('#profil').click();
        cy.get('#nbSeriesFav').should('have.text', 'Nombre de séries favorites : 1');
    }); 
});