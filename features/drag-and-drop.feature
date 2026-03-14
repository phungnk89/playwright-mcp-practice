Feature: Drag and Drop
  As a user
  I want to drag and drop elements
  So that I can verify drag and drop functionality

  Background:
    Given I am on the Heroku home page
    And I click on the "Drag and Drop" example

  Scenario: Navigate to Drag and Drop page
    Then the URL should match "/drag_and_drop"
    And the Drag and Drop heading should be visible
    And column A should be visible
    And column B should be visible

  Scenario: Verify initial column headers
    Then column A header should show "A"
    And column B header should show "B"
