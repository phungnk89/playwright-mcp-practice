Feature: Status Codes
  As a user
  I want to see HTTP status code pages
  So that I can verify status code responses

  Background:
    Given I am on the Heroku home page
    And I click on the "Status Codes" example

  Scenario: Navigate to Status Codes page
    Then the URL should match "/status_codes"
    And the Status Codes heading should be visible

  Scenario: Navigate to 200 status code
    When I click the "200" status code link
    Then the URL should match "/status_codes/200"

  Scenario: Navigate to 404 status code
    When I click the "404" status code link
    Then the URL should match "/status_codes/404"
