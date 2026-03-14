Feature: Horizontal Slider
  As a user
  I want to interact with a horizontal slider
  So that I can verify slider value changes

  Background:
    Given I am on the Heroku home page
    And I click on the "Horizontal Slider" example

  Scenario: Navigate to Horizontal Slider page
    Then the URL should match "/horizontal_slider"
    And the Horizontal Slider heading should be visible
    And the slider should be visible

  Scenario: Set slider value
    When I set the slider value to "3"
    Then the slider display value should be "3"
