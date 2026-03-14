Feature: Entry Ad
  As a user
  I want to see the entry ad modal
  So that I can verify the modal appears and can be closed

  Scenario: Navigate to Entry Ad page and see modal
    Given I am on the Heroku home page
    When I click on the "Entry Ad" example
    Then the URL should match "/entry_ad"
    And the Entry Ad modal title should be visible
    And the Entry Ad modal should contain "This is a modal window"

  Scenario: Close the entry ad modal
    Given I am on the Heroku home page
    When I click on the "Entry Ad" example
    And I close the Entry Ad modal
    Then the Entry Ad page heading should be visible
