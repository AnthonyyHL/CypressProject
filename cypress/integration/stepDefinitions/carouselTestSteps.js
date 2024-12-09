import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const homePage = require('../../support/pages/HomePage');

beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
});

Given('the carousel is visible', () => {
    homePage.isCarouselVisible();
    cy.log('Carousel is visible');
});

When('there is an active carousel image', () => {
    homePage.getActiveImage();
    cy.log('There is an active imagen in carousel');
});

When("I click on the carousel's right arrow", () => {
    homePage.goToNextItem();
    cy.log('he carousel has moved forward');
});

Then(
    'the new displayed image should be different from the previous one',
    () => {
        homePage.checkActiveImageChange();
        cy.log('The image has changed succesfully');
    }
);

Then('the previous image should not be visible', () => {
    homePage.isOldActiveImageNotVisible();
    cy.log('The old active image is not visible');
});
