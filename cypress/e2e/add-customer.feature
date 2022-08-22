Feature: add new customer
  Scenario: add new customer by using manager account
    Given User am on the login screen
    When User login with a manger account
    Then User should see my id on the home page
    Then User click the New Customer option on the left menu
    And User submit valid customer data
    Then User should see all my inputs on the displaying screen
