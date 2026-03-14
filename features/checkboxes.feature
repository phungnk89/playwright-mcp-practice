Feature: Checkboxes
  As a user
  I want to interact with checkboxes
  So that I can verify checkbox toggling behavior

  Background:
    Given I am on the Heroku home page
    And I click on the "Checkboxes" example

  Scenario: Navigate to Checkboxes page
    Then the URL should match "/checkboxes"
    And the Checkboxes heading should be visible
    And there should be 2 checkboxes

  Scenario: Toggle checkbox 1
    When I toggle checkbox 0
    Then checkbox 0 should be checked

  Scenario: Untoggle checkbox 2
    When I toggle checkbox 1
    Then checkbox 1 should not be checked
