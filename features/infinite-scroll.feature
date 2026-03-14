Feature: Infinite Scroll
  As a user
  I want to scroll down the page
  So that I can verify new content loads

  Background:
    Given I am on the Heroku home page
    And I click on the "Infinite Scroll" example

  Scenario: Navigate to Infinite Scroll page
    Then the URL should match "/infinite_scroll"
    And the Infinite Scroll heading should be visible
