Feature: JQuery UI Menus
  As a user
  I want to see the JQuery UI Menu
  So that I can verify the menu structure

  Background:
    Given I am on the Heroku home page
    And I click on the "JQuery UI Menus" example

  Scenario: Navigate to JQuery UI Menu page
    Then the URL should match "/jqueryui/menu"
    And the JQuery UI Menu heading should be visible
    And the menu should be visible
