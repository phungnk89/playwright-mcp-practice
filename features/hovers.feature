Feature: Hovers
  As a user
  I want to hover over images
  So that I can see additional information

  Background:
    Given I am on the Heroku home page
    And I click on the "Hovers" example

  Scenario: Navigate to Hovers page
    Then the URL should match "/hovers"
    And the Hovers heading should be visible
    And there should be 3 figure images

  Scenario: Hover over first image shows caption
    When I hover over figure 0
    Then the caption for figure 0 should be visible
    And the caption for figure 0 should contain "user1"

  Scenario: Hover over second image shows caption
    When I hover over figure 1
    Then the caption for figure 1 should be visible
    And the caption for figure 1 should contain "user2"
