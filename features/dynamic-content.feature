Feature: Dynamic Content
  As a user
  I want to see dynamic content on the page
  So that I can verify content changes on page refresh

  Background:
    Given I am on the Heroku home page
    And I click on the "Dynamic Content" example

  Scenario: Navigate to Dynamic Content page
    Then the URL should match "/dynamic_content"
    And the Dynamic Content heading should be visible
    And there should be 3 content images
