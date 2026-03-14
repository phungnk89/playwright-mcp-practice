@basic-auth
Feature: Basic Auth
  As a user
  I want to log in with valid credentials
  So that I can access the authenticated page

  Scenario: Log in with valid credentials and verify success
    Given I am on the Heroku home page
    When I click on the "Basic Auth" example
    Then the URL should match "/basic_auth"
    And the Basic Auth heading should be visible
    And the Basic Auth heading should show "Basic Auth"
    And the Basic Auth message should contain "Congratulations! You must have the proper credentials."
