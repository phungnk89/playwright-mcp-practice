Feature: Challenging DOM
  As a user
  I want to interact with a challenging DOM page
  So that I can verify dynamic page elements

  Background:
    Given I am on the Heroku home page
    And I click on the "Challenging DOM" example

  Scenario: Navigate to Challenging DOM page and verify elements
    Then the URL should match "/challenging_dom"
    And the Challenging DOM heading should be visible
    And there should be 3 buttons on the page
    And the table should be visible
    And there should be 10 table rows
    And the canvas should be visible

  Scenario: Click each button and verify page updates
    When I click each button and verify the button texts change

  Scenario: Table and canvas remain after clicking all buttons
    When I click all 3 buttons
    Then the table should be visible
    And there should be 10 table rows
    And the canvas should be visible
