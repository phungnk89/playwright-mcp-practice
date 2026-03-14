Feature: JavaScript Alerts
  As a user
  I want to interact with JavaScript alerts
  So that I can verify alert handling

  Background:
    Given I am on the Heroku home page
    And I click on the "JavaScript Alerts" example

  Scenario: Navigate to JavaScript Alerts page
    Then the URL should match "/javascript_alerts"
    And the JavaScript Alerts heading should be visible

  Scenario: Handle JS Alert
    When I click the JS Alert button and accept
    Then the result should show "You successfully clicked an alert"

  Scenario: Handle JS Confirm - Accept
    When I click the JS Confirm button and accept
    Then the result should show "You clicked: Ok"

  Scenario: Handle JS Confirm - Dismiss
    When I click the JS Confirm button and dismiss
    Then the result should show "You clicked: Cancel"

  Scenario: Handle JS Prompt
    When I click the JS Prompt button and enter "Hello"
    Then the result should show "You entered: Hello"
