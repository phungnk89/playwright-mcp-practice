Feature: Frames
  As a user
  I want to navigate to different frame examples
  So that I can verify frame-related pages

  Background:
    Given I am on the Heroku home page
    And I click on the "Frames" example

  Scenario: Navigate to Frames page
    Then the URL should match "/frames"
    And the Frames heading should be visible
    And the Nested Frames link should be visible
    And the iFrame link should be visible
