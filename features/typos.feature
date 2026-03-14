Feature: Typos
  As a user
  I want to check for typos on the page
  So that I can verify content quality

  Background:
    Given I am on the Heroku home page
    And I click on the "Typos" example

  Scenario: Navigate to Typos page
    Then the URL should match "/typos"
    And the Typos heading should be visible

  Scenario: Verify page content is present
    Then the Typos content should contain "Sometimes you'll see a typo"
