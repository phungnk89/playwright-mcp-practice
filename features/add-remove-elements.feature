Feature: Add/Remove Elements
  As a user
  I want to add and remove elements on the page
  So that I can verify dynamic element manipulation

  Background:
    Given I am on the Heroku home page
    And I click on the "Add/Remove Elements" example

  Scenario: Navigate to Add/Remove Elements page
    Then the URL should match "/add_remove_elements"
    And the Add/Remove Elements heading should show "Add/Remove Elements"
    And the Add Element button should be visible

  Scenario: Add an element and verify it appears
    Then there should be 0 delete buttons
    When I click the Add Element button
    Then there should be 1 delete buttons
    And the first delete button should be visible

  Scenario: Delete an added element and verify it is removed
    When I click the Add Element button
    Then there should be 1 delete buttons
    When I click the Delete button
    Then there should be 0 delete buttons
