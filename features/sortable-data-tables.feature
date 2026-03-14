Feature: Sortable Data Tables
  As a user
  I want to interact with sortable data tables
  So that I can verify table content and sorting

  Background:
    Given I am on the Heroku home page
    And I click on the "Sortable Data Tables" example

  Scenario: Navigate to Sortable Data Tables page
    Then the URL should match "/tables"
    And the Sortable Data Tables heading should be visible
    And table 1 should be visible
    And table 2 should be visible

  Scenario: Verify table 1 has 4 data rows
    Then table 1 should have 4 rows

  Scenario: Sort table 1 by Last Name
    When I click the "Last Name" header in table 1
    Then the first column of table 1 should be sorted alphabetically
