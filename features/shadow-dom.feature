Feature: Shadow DOM
  As a user
  I want to verify shadow DOM content
  So that I can test shadow DOM interaction

  Background:
    Given I am on the Heroku home page
    And I click on the "Shadow DOM" example

  Scenario: Navigate to Shadow DOM page
    Then the URL should match "/shadowdom"
    And the Shadow DOM heading should be visible

  Scenario: Verify shadow DOM content
    Then the shadow DOM should contain "Let's have some different text!"
