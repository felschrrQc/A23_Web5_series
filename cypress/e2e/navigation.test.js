///<reference types="cypress"/>

describe('Navigation', () => {
    it("L'utilisateur non connecté a accès à /login", () => {
        cy.visit('/login');
        cy.url().should('eq', 'http://127.0.0.1:5173/login');
    });   
    
    describe('Déconnecté', () => {
        afterEach(() => {
            cy.url().should('eq', 'http://127.0.0.1:5173/');
        });

        it("L'utilisateur non connecté n'a pas accès à /trending", () => {
            cy.visit('/trending');
        });    
    
        it("L'utilisateur non connecté n'a pas accès à /profil", () => {
            cy.visit('/profil');
        });   

        it("L'utilisateur non connecté n'a pas accès à /search", () => {
            cy.visit('/profil');
        });   

        it("L'utilisateur non connecté n'a pas accès à /serie/:slugSerie", () => {
            cy.visit('/serie/Ahsoka');
        });   
    });

    describe("Connecté", () => {
        let userData;
    
        beforeEach(() => {
            cy.fixture('login').then((data) => {
                userData = data;
                cy.login(userData.username, userData.password);
            });
        });
    
        it("L'utilisateur connecté a accès à /trending", () => {
            cy.get('#trending').click();
            cy.url().should('eq', 'http://127.0.0.1:5173/trending');
        });   
    
        it("L'utilisateur connecté a accès à /profil", () => {
            cy.get('#profil').click();
            cy.url().should('eq', 'http://127.0.0.1:5173/profil');
        });  
    
        it("Le bon nom d'utilisateur est affiché dans le profil", () => {
            cy.get('#profil').click();
            cy.get('#username').should('have.text', userData.username);
        });

    });
});
