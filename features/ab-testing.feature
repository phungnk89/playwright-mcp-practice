Feature: A/B Testing
  As a user
  I want to visit the A/B Test page
  So that I can see the experiment variation

  Background:
    Given I am on the Heroku home page

  Scenario: Navigate to A/B Test page from homepage
    Given the homepage heading is visible
    When I click on the "A/B Testing" example
    Then the URL should match "/abtest"
    And the A/B Test heading should be visible
    And the A/B Test heading should match "A/B Test Control" or "A/B Test Variation 1"

  Scenario: Display description on A/B Test page
    When I click on the "A/B Testing" example
    Then the A/B Test description should be visible
    And the A/B Test description should contain "split testing"
