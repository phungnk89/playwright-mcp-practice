Feature: Large & Deep DOM
  As a user
  I want to verify elements in a large DOM
  So that I can test performance with large pages

  Background:
    Given I am on the Heroku home page
    And I click on the "Large & Deep DOM" example

  Scenario: Navigate to Large & Deep DOM page
    Then the URL should match "/large"
    And the Large Deep DOM heading should be visible
    And the large table should be visible
    And the large table should have 50 rows
