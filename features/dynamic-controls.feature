Feature: Dynamic Controls
  As a user
  I want to interact with dynamic controls
  So that I can verify async element changes

  Background:
    Given I am on the Heroku home page
    And I click on the "Dynamic Controls" example

  Scenario: Navigate to Dynamic Controls page
    Then the URL should match "/dynamic_controls"
    And the Dynamic Controls heading should be visible

  Scenario: Remove and add checkbox
    Given the checkbox should be visible
    When I click the Remove button
    Then the message "It's gone!" should appear
    When I click the Add button
    Then the checkbox should be visible
    And the message "It's back!" should appear

  Scenario: Enable and disable input
    Given the input field should be disabled
    When I click the Enable button
    Then the input field should be enabled
    And the message "It's enabled!" should appear
    When I click the Disable button
    Then the input field should be disabled
    And the message "It's disabled!" should appear
