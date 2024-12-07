import HomePage from './HomePage';

class HomePage extends HomePage {
    homePageElements = {
        carouselItem: '.carousel-item',
        prevItemButton: '.carousel-control-prev-icon',
        nextItemButton: '.carousel-control-next-icon',
    };

    carouselItem() {
        return cy.get(this.homePageElements.carouselItem, {
            timeout: super.wait.timeout,
        });
    }
    prevItemButton() {
        return cy.get(this.homePageElements.prevItemButton, {
            timeout: super.wait.timeout,
        });
    }
    nextItemButton() {
        return cy.get(this.homePageElements.nextItemButton, {
            timeout: super.wait.timeout,
        });
    }

    goToPrevItem() {
        this.prevItemButton().should('be.clickable');
        return this.prevItemButton().click();
    }

    goToNextItem() {
        this.nextItemButton().should('be.clickable');
        return this.nextItemButton().click();
    }
}

module.exports = new HomePage();
