Feature: Inputs
  As a user
  I want to interact with a number input
  So that I can verify input functionality

  Background:
    Given I am on the Heroku home page
    And I click on the "Inputs" example

  Scenario: Navigate to Inputs page
    Then the URL should match "/inputs"
    And the Inputs heading should be visible
    And the number input should be visible

  Scenario: Enter a number in the input
    When I enter the number "42" in the input
    Then the number input should have value "42"
