export class AddCustomer {

    constructor({name, gender, dob, address, city, state, pin, mobile_number, email, password}) {
        this.name = name
        this.gender = gender
        this.dob = dob
        this.address = address
        this.city = city
        this.state = state
        this.pin = pin
        this.mobile_number = mobile_number
        this.email = email
        this.password = password
    }

    navigate() {
        cy.get('a[href="addcustomerpage.php"]').click()
        cy.url().should('include', '/manager/addcustomerpage.php')
    }

    add() {
        cy.get('input[name=name]').type(this.name)
        cy.get('input[name=rad1]').check(this.gender.toLowerCase())
        cy.get('input[name=dob]').type(this.dob)
        cy.get('textarea[name=addr]').type(this.address)
        cy.get('input[name=city]').type(this.city)
        cy.get('input[name=state]').type(this.state)
        cy.get('input[name=pinno]').type(this.pin)
        cy.get('input[name=telephoneno]').type(this.mobile_number)
        cy.get('input[name=emailid]').type(this.email)
        cy.get('input[name=password]').type(`${this.password}{enter}`)
        cy.get('input[name=sub]').click()
    }

    validateAdding() {
        for (let key in this) {
            if (key === 'password') continue
            let element = this[key];
            if (key === 'gender') element = element === 'm' ? "male" : 'female'
            cy.get('#customer > tbody > tr').should('contain', element)
        }
    }

}
