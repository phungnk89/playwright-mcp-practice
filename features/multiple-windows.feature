Feature: Multiple Windows
  As a user
  I want to open a new window
  So that I can verify new window functionality

  Background:
    Given I am on the Heroku home page
    And I click on the "Multiple Windows" example

  Scenario: Navigate to Multiple Windows page
    Then the URL should match "/windows"
    And the Multiple Windows heading should be visible
    And the Click Here link should be visible

  Scenario: Open a new window
    When I click the Click Here link
    Then a new window should open with text "New Window"
