Feature: Broken Images
  As a user
  I want to verify broken images on the page
  So that I can detect issues with image loading

  Background:
    Given I am on the Heroku home page
    And I click on the "Broken Images" example

  Scenario: Navigate to Broken Images page
    Then the URL should match "/broken_images"
    And the Broken Images heading should be visible
    And there should be 3 images on the page

  Scenario: Detect broken images
    Then image 0 should be broken
    And image 1 should be broken

  Scenario: Detect valid image
    Then image 2 should not be broken
