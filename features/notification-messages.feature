Feature: Notification Messages
  As a user
  I want to see notification messages
  So that I can verify message display

  Background:
    Given I am on the Heroku home page
    And I click on the "Notification Messages" example

  Scenario: Navigate to Notification Messages page
    Then the URL should match "/notification_message"
    And the Notification Messages heading should be visible
    And the notification flash message should be visible

  Scenario: Load a new notification message
    When I click the notification click here link
    Then the notification flash message should be visible
