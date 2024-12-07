class ContactsPage extends BasePage {
    contactsPageElements = {
        contactsLabel: '#exampleModalLabel',
        closeButton1: '#exampleModal > .close',
        closeButton2: '#exampleModal > .btn-secondary',
    };

    contactsLabel() {
        return cy.get(this.contactsPageElements.contactsLabel);
    }

    closeButton1() {
        return cy.get(this.contactsPageElements.closeButton1);
    }

    closeButton2() {
        return cy.get(this.contactsPageElements.closeButton2);
    }

    clickCloseButton1() {
        this.closeButton1().click();
    }

    clickCloseButton2() {
        this.closeButton2().click();
    }

    isContactsPageVisible(labelText) {
        super.isElementVisible(this.contactsLabel());
        this.contactsLabel().contains(labelText);
    }
}

module.exports = new ContactsPage();
