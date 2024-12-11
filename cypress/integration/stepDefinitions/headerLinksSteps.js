import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const navBar = require('../../support/pages/NavBar');
const homePage = require('../../support/pages/HomePage');
const loginPage = require('../../support/pages/LogInPage');

beforeEach({ tags: '@main-page' }, () => {
    cy.visit('https://www.demoblaze.com/');
});

Given('the header navigation menu is visible', () => {
    navBar.isNavBarVisible();
    cy.log('Every option of the nav bar is visible and clickable');
});

When('I click on {string}', (option) => {
    navBar.clickNavOption(option);
    cy.log(`The navbar option '${option}' was clicked`);
});

Then('I should be able to see the carousel', () => {
    homePage.isCarouselVisible();
    cy.log("The current page is now 'Home' and carousel is visible");
});

When('I click on {string}', (option) => {
    navBar.clickNavOption(option);
    cy.log(`The navbar option '${option}' was clicked`);
});

Then('a {string} modal should appear', (labelText) => {
    loginPage.isLogInPageVisible(labelText);
    cy.log("The current page is now 'Home' and 'Log In' label is visible");
});

Then('the modal should contain login form fields', () => {
    loginPage.isLoginFormVisible();
    cy.log('Login form fields are visible and clickable');
});
