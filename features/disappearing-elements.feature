Feature: Disappearing Elements
  As a user
  I want to see navigation elements on the page
  So that I can verify elements appear and disappear

  Background:
    Given I am on the Heroku home page
    And I click on the "Disappearing Elements" example

  Scenario: Navigate to Disappearing Elements page
    Then the URL should match "/disappearing_elements"
    And the Disappearing Elements heading should be visible

  Scenario: Verify core navigation links are present
    Then the navigation should contain at least 4 links
    And the navigation should include "Home"
    And the navigation should include "About"
    And the navigation should include "Contact Us"
    And the navigation should include "Portfolio"
