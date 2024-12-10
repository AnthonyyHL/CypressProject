import BasePage from '../basePage/BasePage';
import navBar from '../../support/pages/NavBar';

class CartPage extends BasePage {
    cartPageElements = {
        product: '#tbodyid > .success',
        totalPrice: '#totalp',
    };

    constructor() {
        super(navBar);
    }

    productList() {
        return cy.get(this.cartPageElements.product, {
            timeout: super.getTimeout(),
        });
    }
    totalPrice() {
        return cy.get(this.cartPageElements.totalPrice, {
            timeout: super.getTimeout(),
        });
    }

    isCartEmpty() {
        return cy.get('body').then(($body) => {
            if ($body.find(this.cartPageElements.product).length === 0) {
                return true;
            }
            return false;
        });
    }

    navigateToHomePage() {
        super.navigateToNavBarOption('Home');
    }

    checkLastProductAdded(isEqual) {
        return cy.fixture('productAddedToCartDetails.json').then((details) => {
            this.productList()
                .eq(0)
                .then((product) => {
                    super.isElementVisible(cy.wrap(product));

                    cy.wrap(product)
                        .find('td:nth-child(2)')
                        .invoke('text')
                        .then((title) => {
                            if (isEqual) {
                                expect(title.trim()).to.equal(
                                    details.title.trim()
                                );
                            } else {
                                expect(title.trim()).to.not.equal(
                                    details.title.trim()
                                );
                            }
                        });

                    cy.wrap(product)
                        .find('td:nth-child(3)')
                        .invoke('text')
                        .then((price) => {
                            if (isEqual) {
                                expect(price.trim()).to.equal(
                                    details.price.trim()
                                );
                            } else {
                                expect(price.trim()).to.not.equal(
                                    details.price.trim()
                                );
                            }
                        });
                });
        });
    }

    removeProductRecentlyAdded() {
        const totalPrice = this.totalPrice();
        super.isElementVisible(totalPrice);
        totalPrice.invoke('text').then((text) => {
            const trimmedText = text.trim();
            if (text !== '') {
                cy.wrap(trimmedText).as('totalPriceText');
            } else {
                cy.wrap('0').as('totalPriceText');
            }
        });

        const lastProduct = this.productList()
            .eq(0)
            .find('td:nth-child(4) > a');
        super.isElementVisible(lastProduct);
        super.isElementClickable(lastProduct);
        return lastProduct.click();
    }

    checkTotalPriceUpdated() {
        return cy.get('@totalPriceText').then((totalPriceText) => {
            const currentTotalPrice = this.totalPrice();
            super.isElementVisible(currentTotalPrice);
            currentTotalPrice.invoke('text').then((currentTotalPriceText) => {
                expect(totalPriceText).to.not.equal(currentTotalPriceText);
            });
        });
    }
}

module.exports = new CartPage();
