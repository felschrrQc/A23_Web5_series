///<reference types="cypress"/>

describe('Connexion', () => {
    beforeEach(() => {
        cy.fixture('login').then((userData) => {
            cy.login(userData.username, userData.password);
        });
    });

    it("L'utilisateur peut se connecter avec succès", () => {
        cy.url().should('eq', 'http://127.0.0.1:5173/');
    });  

    it("L'utilisateur peut se déconnecter avec succès", () => {
        cy.get('#logout').click(); 
        cy.url().should('eq', 'http://127.0.0.1:5173/');
    }); 

    it("L'utilisateur reste connecté après le rafraîchissement de la page", () => {
        cy.reload();
        cy.visit('/profil');
        cy.url().should('eq', 'http://127.0.0.1:5173/profil');
    });
});