Feature: Redirect Link
  As a user
  I want to click a redirect link
  So that I can verify redirection behavior

  Background:
    Given I am on the Heroku home page
    And I click on the "Redirect Link" example

  Scenario: Navigate to Redirect Link page
    Then the URL should match "/redirector"
    And the Redirect Link heading should be visible

  Scenario: Click redirect link
    When I click the redirect link
    Then the URL should match "/status_codes"
