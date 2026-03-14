Feature: Shifting Content
  As a user
  I want to view shifting content examples
  So that I can verify the page links

  Background:
    Given I am on the Heroku home page
    And I click on the "Shifting Content" example

  Scenario: Navigate to Shifting Content page
    Then the URL should match "/shifting_content"
    And the Shifting Content heading should be visible
    And the menu example link should be visible
    And the image example link should be visible
    And the list example link should be visible
