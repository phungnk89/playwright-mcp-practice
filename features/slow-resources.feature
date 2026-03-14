Feature: Slow Resources
  As a user
  I want to visit the slow resources page
  So that I can verify the page loads despite slow resources

  Background:
    Given I am on the Heroku home page
    And I click on the "Slow Resources" example

  Scenario: Navigate to Slow Resources page
    Then the URL should match "/slow"
    And the Slow Resources heading should be visible
