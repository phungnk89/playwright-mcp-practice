Feature: File Download
  As a user
  I want to see available files for download
  So that I can verify download links are present

  Background:
    Given I am on the Heroku home page
    And I click on the "File Download" example

  Scenario: Navigate to File Download page
    Then the URL should match "/download"
    And the File Download heading should be visible
    And there should be at least 1 download link
