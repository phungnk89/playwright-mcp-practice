Feature: JavaScript Error
  As a user
  I want to detect JavaScript errors on the page
  So that I can verify error detection

  Scenario: Navigate to JavaScript Error page and detect error
    Given I am on the Heroku home page
    When I listen for JavaScript errors
    And I click on the "JavaScript onload event error" example
    Then a JavaScript error should have been detected
