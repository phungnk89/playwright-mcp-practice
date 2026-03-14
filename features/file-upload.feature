Feature: File Upload
  As a user
  I want to upload a file
  So that I can verify the upload functionality

  Background:
    Given I am on the Heroku home page
    And I click on the "File Upload" example

  Scenario: Navigate to File Upload page
    Then the URL should match "/upload"
    And the File Upload heading should be visible
    And the upload button should be visible

  Scenario: Upload a file successfully
    When I upload a test file
    Then the uploaded file name should be displayed
