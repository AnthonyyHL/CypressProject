import BasePage from '../basePage/BasePage';

class HomePage extends BasePage {
    homePageElements = {
        carousel: '#carouselExampleIndicators',
        carouselItem: '.carousel-item',
        prevItemButton: '.carousel-control-prev-icon',
        nextItemButton: '.carousel-control-next-icon',
    };

    carousel() {
        return cy.get(this.homePageElements.carousel, {
            timeout: super.getTimeout(),
        });
    }

    carouselItem() {
        return cy.get(this.homePageElements.carouselItem, {
            timeout: super.getTimeout(),
        });
    }
    prevItemButton() {
        return cy.get(this.homePageElements.prevItemButton, {
            timeout: super.getTimeout(),
        });
    }
    nextItemButton() {
        return cy.get(this.homePageElements.nextItemButton, {
            timeout: super.getTimeout(),
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

    isCarouselVisible() {
        return super.isElementVisible(this.carousel());
    }
}

module.exports = new HomePage();
