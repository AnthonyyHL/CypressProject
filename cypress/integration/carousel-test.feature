Feature: Main Carousel Functionality
  As a website user
  I want to navigate through the main image carousel
  In order to view different featured products and promotions

  Background:
    And the carousel is visible

  Scenario: Navigate carousel to the right
    When there is an active carousel image
    And I click on the carousel's right arrow
    Then the new displayed image should be different from the previous one
    And the previous image should not be visible

  Scenario: Complete cyclic navigation of carousel
    When I click on the carousel's right arrow multiple times
    And I have navigated through all images
    Then it should display the first carousel image again
    And the order of images should remain consistent
    And all carousel images should have been displayed

  Scenario: Carousel auto-play functionality
    Given I don't interact with the carousel
    When I wait for the established transition time
    Then images should change automatically
    And each image should be displayed for the same time interval
    And the transition between images should be smooth