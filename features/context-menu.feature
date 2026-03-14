Feature: Context Menu
  As a user
  I want to right-click in the context menu area
  So that I can trigger a JavaScript alert

  Background:
    Given I am on the Heroku home page
    And I click on the "Context Menu" example

  Scenario: Navigate to Context Menu page
    Then the URL should match "/context_menu"
    And the Context Menu heading should be visible
    And the hot spot area should be visible

  Scenario: Right-click triggers a JavaScript alert
    When I right-click the hot spot area
    Then a JavaScript alert should appear with text "You selected a context menu"
