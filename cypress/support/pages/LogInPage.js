class LogInPage extends BasePage {
    logInPageElements = {
        logInLabel: '#logInModalLabel',
        closeButton1: '#logInModal > .close',
        closeButton2: '#logInModal > .btn-secondary',
    };

    logInLabel() {
        return cy.get(this.logInPageElements.logInLabel);
    }

    closeButton1() {
        return cy.get(this.logInPageElements.closeButton1);
    }

    closeButton2() {
        return cy.get(this.logInPageElements.closeButton2);
    }

    clickCloseButton1() {
        this.closeButton1().click();
    }

    clickCloseButton2() {
        this.closeButton2().click();
    }

    isLogInPageVisible(labelText) {
        super.isElementVisible(this.logInLabel());
        this.logInLabel().contains(labelText);
    }
}

module.exports = new LogInPage();
