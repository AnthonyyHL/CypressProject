class BasePage {
    wait = {
        timeout: 10000,
    };

    isElementVisible(item) {
        item.should('be.visible');
    }

    isElementClickable(item) {
        item.should('be.clickable');
    }

    verifyElementHasClass(item, className) {
        item.should('have.class', className);
    }
}
