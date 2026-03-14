Feature: Dynamic Loading
  As a user
  I want to see dynamically loaded elements
  So that I can verify hidden and rendered elements

  Background:
    Given I am on the Heroku home page
    And I click on the "Dynamic Loading" example

  Scenario: Navigate to Dynamic Loading page
    Then the URL should match "/dynamic_loading"
    And the Dynamic Loading heading should be visible

  Scenario: Load hidden element (Example 1)
    When I click on the Example 1 link
    And I click the Start button
    Then the finish text "Hello World!" should appear
