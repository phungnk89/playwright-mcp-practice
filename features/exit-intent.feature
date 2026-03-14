Feature: Exit Intent
  As a user
  I want to trigger the exit intent modal
  So that I can verify the modal appears on mouse out

  Background:
    Given I am on the Heroku home page
    And I click on the "Exit Intent" example

  Scenario: Navigate to Exit Intent page
    Then the URL should match "/exit_intent"
    And the Exit Intent heading should be visible
