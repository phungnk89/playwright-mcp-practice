Feature: Geolocation
  As a user
  I want to get my geolocation
  So that I can verify the geolocation feature works

  Background:
    Given I am on the Heroku home page
    And I click on the "Geolocation" example

  Scenario: Navigate to Geolocation page
    Then the URL should match "/geolocation"
    And the Geolocation heading should be visible
    And the Where am I button should be visible

  Scenario: Get geolocation coordinates
    When I click the Where am I button
    Then the latitude should be displayed
    And the longitude should be displayed
