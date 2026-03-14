Feature: Floating Menu
  As a user
  I want to see a floating menu on the page
  So that I can verify the menu remains visible while scrolling

  Background:
    Given I am on the Heroku home page
    And I click on the "Floating Menu" example

  Scenario: Navigate to Floating Menu page
    Then the URL should match "/floating_menu"
    And the Floating Menu heading should be visible
    And the floating menu should be visible

  Scenario: Verify menu items
    Then the floating menu should have 4 items
    And the floating menu should include "Home"
    And the floating menu should include "News"
    And the floating menu should include "Contact"
    And the floating menu should include "About"
