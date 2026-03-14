Feature: Nested Frames
  As a user
  I want to verify content in nested frames
  So that I can test frame interaction

  Scenario: Navigate to Nested Frames and verify frame content
    Given I am on the Heroku home page
    When I click on the "Nested Frames" example
    Then the bottom frame should contain "BOTTOM"
