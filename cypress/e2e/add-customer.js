const {And, Then, When, Given} = require("@badeball/cypress-cucumber-preprocessor");
const {AddCustomer} = require("../pages/AddCustomer");
const {Login} = require("../pages/Login");
const randomEmail = require('random-email');
let login = undefined
let add_customer = undefined

before(function () {
    const userId = Cypress.env('userId')
    const password = Cypress.env('password')
    login = new Login(userId, password)
    cy.fixture('customer').then(function (data) {
        data = {...data, email:randomEmail()}
        add_customer = new AddCustomer(data)
    })
})

Given("User am on the login screen", function (){
    login.navigate()
})

When("User login with a manger account", function () {
    login.login()
});

Then("User should see my id on the home page", function () {
    login.validateLogin()
});

Then("User click the New Customer option on the left menu", function () {
    add_customer.navigate()
});

And("User submit valid customer data", function () {
    add_customer.add(this.data)
});

Then("User should see all my inputs on the displaying screen", function () {
    add_customer.validateAdding()
});

Cypress.on('uncaught:exception', () => {
    // returning false here prevents cypress from failing the test
    return false
})

