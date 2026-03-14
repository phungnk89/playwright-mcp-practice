Feature: Forgot Password
  As a user
  I want to use the forgot password form
  So that I can request a password reset

  Background:
    Given I am on the Heroku home page
    And I click on the "Forgot Password" example

  Scenario: Navigate to Forgot Password page
    Then the URL should match "/forgot_password"
    And the Forgot Password heading should be visible
    And the email input should be visible
    And the retrieve password button should be visible

  Scenario: Submit forgot password form
    When I enter email "test@example.com"
    And I click the retrieve password button
    Then the forgot password page should respond
