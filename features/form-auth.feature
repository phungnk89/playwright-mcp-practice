Feature: Form Authentication
  As a user
  I want to log in via form authentication
  So that I can access the secure area

  Background:
    Given I am on the Heroku home page
    And I click on the "Form Authentication" example

  Scenario: Navigate to Login page
    Then the URL should match "/login"
    And the Form Auth heading should be visible

  Scenario: Login with valid credentials
    When I login with username "tomsmith" and password "SuperSecretPassword!"
    Then the URL should match "/secure"
    And the flash message should contain "You logged into a secure area!"

  Scenario: Login with invalid credentials
    When I login with username "invalid" and password "invalid"
    Then the flash message should contain "Your username is invalid!"
