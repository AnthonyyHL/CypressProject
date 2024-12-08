class BasePage {
    wait = {
        timeout: 10000,
    };

    getTimeout() {
        return this.wait.timeout;
    }

    isElementVisible(item) {
        return item.should('be.visible');
    }

    isElementClickable(item) {
        return item.should('exist').and('be.clickable');
    }

    verifyElementHasClass(item, className) {
        return item.should('have.class', className);
    }
}

export default BasePage;
