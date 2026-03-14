@digest-auth
Feature: Digest Authentication
  As a user
  I want to log in with digest authentication
  So that I can access the authenticated page

  Scenario: Navigate to Digest Auth page with valid credentials
    Given I am on the Heroku home page
    When I click on the "Digest Authentication" example
    Then the URL should match "/digest_auth"
    And the Digest Auth heading should be visible
    And the Digest Auth message should contain "Congratulations"
