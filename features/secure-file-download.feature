@secure-download
Feature: Secure File Download
  As a user
  I want to access secure file downloads
  So that I can verify authenticated downloads

  Scenario: Navigate to Secure File Download page with valid credentials
    Given I am on the Heroku home page
    When I click on the "Secure File Download" example
    Then the URL should match "/download_secure"
    And the Secure File Download heading should be visible
