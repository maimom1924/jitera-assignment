export class Login {

    constructor(userId, password) {
        this.userId = userId
        this.password = password
    }

    navigate() {
        cy.visit(Cypress.config('baseUrl'))
    }

    login() {
        cy.get('input[name=uid]').type(this.userId)
        cy.get('input[name=password]').type(`${this.password}{enter}`)
    }

    validateLogin() {
        cy.url().should('include', '/manager/Managerhomepage.php')
        cy.get('tr.heading3 > td').should('contain', 'Manger Id : ' + this.userId)
    }

}
