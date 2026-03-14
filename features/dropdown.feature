Feature: Dropdown
  As a user
  I want to interact with a dropdown
  So that I can verify option selection

  Background:
    Given I am on the Heroku home page
    And I click on the "Dropdown" example

  Scenario: Navigate to Dropdown page
    Then the URL should match "/dropdown"
    And the Dropdown heading should be visible
    And the dropdown should be visible

  Scenario: Select Option 1
    When I select option "1" from the dropdown
    Then the dropdown should have value "1"

  Scenario: Select Option 2
    When I select option "2" from the dropdown
    Then the dropdown should have value "2"
