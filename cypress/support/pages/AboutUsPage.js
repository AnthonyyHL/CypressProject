class AboutUsPage extends BasePage {
    aboutUsElements = {
        aboutUsLabel: '#videoModalLabel',
        closeButton1: '#videoModal > .close',
        closeButton2: '#videoModal > .btn-secondary',
    };

    aboutUsLabel() {
        return cy.get(this.aboutUsElements.aboutUsLabel, {
            timeout: super.wait.timeout,
        });
    }

    closeButton1() {
        return cy.get(this.aboutUsElements.closeButton1, {
            timeout: super.wait.timeout,
        });
    }

    closeButton2() {
        return cy.get(this.aboutUsElements.closeButton2, {
            timeout: super.wait.timeout,
        });
    }

    clickCloseButton1() {
        this.closeButton1().click();
    }

    clickCloseButton2() {
        this.closeButton2().click();
    }

    isAboutUsPageVisible(labelText) {
        super.isElementVisible(this.aboutUsLabel());
        this.aboutUsLabel().contains(labelText);
    }
}

module.exports = new AboutUsPage();
