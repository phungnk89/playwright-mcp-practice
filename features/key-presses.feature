Feature: Key Presses
  As a user
  I want to press keys and see the result
  So that I can verify key press detection

  Background:
    Given I am on the Heroku home page
    And I click on the "Key Presses" example

  Scenario: Navigate to Key Presses page
    Then the URL should match "/key_presses"
    And the Key Presses heading should be visible

  Scenario: Press Enter key
    When I press the "Enter" key
    Then the key press result should show "You entered: ENTER"

  Scenario: Press Tab key
    When I press the "Tab" key
    Then the key press result should show "You entered: TAB"
