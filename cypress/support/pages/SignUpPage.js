class SignUpPage extends BasePage {
    signUpPageElements = {
        signUpLabel: '#signInModalLabel',
        closeButton1: '#signInModal > .close',
        closeButton2: '#signInModal > .btn-secondary',
    };

    signUpLabel() {
        return cy.get(this.signUpPageElements.signUpLabel);
    }

    closeButton1() {
        return cy.get(this.signUpPageElements.closeButton1);
    }

    closeButton2() {
        return cy.get(this.signUpPageElements.closeButton2);
    }

    clickCloseButton1() {
        this.closeButton1().click();
    }

    clickCloseButton2() {
        this.closeButton2().click();
    }

    isSignUpPageVisible(labelText) {
        super.isElementVisible(this.signUpLabel());
        this.signUpLabel().contains(labelText);
    }
}

module.exports = new SignUpPage();
