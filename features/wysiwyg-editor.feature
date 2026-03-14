Feature: WYSIWYG Editor
  As a user
  I want to see the WYSIWYG editor
  So that I can verify the editor loads

  Background:
    Given I am on the Heroku home page
    And I click on the "WYSIWYG Editor" example

  Scenario: Navigate to WYSIWYG Editor page
    Then the URL should match "/tinymce"
    And the WYSIWYG Editor heading should be visible
