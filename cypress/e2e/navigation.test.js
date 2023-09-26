///<reference types="cypress"/>
describe('Navigation', () => {
    describe('Déconnecté', () => {
        it("L'utilisateur non connecté n'a pas accès à /trending", () => {
            cy.visit('/trending');
            cy.url().should('eq', 'http://127.0.0.1:5173/');
        });   
    
        it("L'utilisateur non connecté n'a pas accès à /favorites", () => {
            cy.visit('/favorites');
            cy.url().should('eq', 'http://127.0.0.1:5173/');
        });   
    
        it("L'utilisateur non connecté n'a pas accès à /profil", () => {
            cy.visit('/profil');
            cy.url().should('eq', 'http://127.0.0.1:5173/');
        });   
    })

    describe('Connecté', () => {
        it("L'utilisateur peut se connecter avec succès", () => {
            cy.visit('/login');
            cy.get('#username').type('username');
            cy.get('#password').type('password');
            cy.get('#loginBtn').click();
            cy.url().should('eq', 'http://127.0.0.1:5173/');
        }); 

        it("L'utilisateur connecté a accès à /trending", () => {
            cy.visit('/login');
            cy.get('#username').type('username');
            cy.get('#password').type('password');
            cy.get('#loginBtn').click();
            cy.get('#trending').click();
            cy.url().should('eq', 'http://127.0.0.1:5173/trending');
        });   
    
        it("L'utilisateur connecté a accès à /favorites", () => {
            cy.visit('/login');
            cy.get('#username').type('username');
            cy.get('#password').type('password');
            cy.get('#loginBtn').click();
            cy.get('#favorites').click();
            cy.url().should('eq', 'http://127.0.0.1:5173/favorites');
        });   
    
        it("L'utilisateur connecté a accès à /profil", () => {
            cy.visit('/login');
            cy.get('#username').type('username');
            cy.get('#password').type('password');
            cy.get('#loginBtn').click();
            cy.get('#profil').click();
            cy.url().should('eq', 'http://127.0.0.1:5173/profil');
        });  

        it("Le bon nom d'utilisateur est affiché", () => {
            cy.visit('/login');
            cy.get('#username').type('username');
            cy.get('#password').type('password');
            cy.get('#loginBtn').click();
            cy.get('#profil').click();
            cy.get('#username').should('have.text', 'username');
        });  

        // Résultat correct mais erreur à cause des states je pense
        it("L'utilisateur peut se déconnecter", () => {
            cy.visit('/login');
            cy.get('#username').type('username');
            cy.get('#password').type('password');
            cy.get('#loginBtn').click();
            cy.get('#logout').click(); 
            cy.url().should('eq', 'http://127.0.0.1:5173/');
        }); 
    })
    
    describe("Ajout d'une série", () => {
        it("L'utilisateur peut ajouter une série dans ses favoris", () => {
            cy.visit('/login');
            cy.get('#username').type('username');
            cy.get('#password').type('password');
            cy.get('#loginBtn').click();
            cy.get('#trending').click();
            cy.get('#AhsokaLink').click();
            cy.get('#favoriteBtn').click();
            cy.get('#favorites').click();
            cy.get('#Ahsoka').should('have.text', 'Ahsoka');
        }); 

        it("Le bon nombre de séries favorites est affiché dans /profil", () => {
            cy.visit('/login');
            cy.get('#username').type('username');
            cy.get('#password').type('password');
            cy.get('#loginBtn').click();
            cy.get('#trending').click();
            cy.get('#AhsokaLink').click();
            cy.get('#favoriteBtn').click();
            cy.get('#favorites').click();
            cy.get('#Ahsoka')
            cy.get('#profil').click();
            cy.get('#nbSeriesFav').should('have.text', 'Nombre de séries favorites : 1');
        }); 
    });
});    
         
