import BasePage from '../basePage/BasePage';

class LogInPage extends BasePage {
    logInPageElements = {
        logInLabel: '#logInModalLabel',
        closeButton1: '#logInModal > .close',
        closeButton2: '#logInModal > .btn-secondary',
    };

    logInLabel() {
        return cy.get(this.logInPageElements.logInLabel, {
            timeout: super.getTimeout(),
        });
    }

    closeButton1() {
        return cy.get(this.logInPageElements.closeButton1, {
            timeout: super.getTimeout(),
        });
    }

    closeButton2() {
        return cy.get(this.logInPageElements.closeButton2, {
            timeout: super.getTimeout(),
        });
    }

    clickCloseButton1() {
        this.closeButton1().click();
    }

    clickCloseButton2() {
        this.closeButton2().click();
    }

    isLogInPageVisible(labelText) {
        super.isElementVisible(this.logInLabel());
        this.logInLabel().should('contain.text', labelText);
    }
}

module.exports = new LogInPage();
