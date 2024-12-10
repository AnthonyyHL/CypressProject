import BasePage from '../basePage/BasePage';
import navBar from '../../support/pages/NavBar';

class CartPage extends BasePage {
    cartPageElements = {
        product: '#tbodyid > .success',
    };

    constructor() {
        super(navBar);
    }

    productList() {
        return cy.get(this.cartPageElements.product, {
            timeout: super.getTimeout(),
        });
    }

    checkLastProductAdded() {
        return cy.fixture('productAddedToCartDetails.json').then((details) => {
            this.productList()
                .eq(0)
                .then((product) => {
                    super.isElementVisible(cy.wrap(product));

                    cy.wrap(product)
                        .find('td:nth-child(2)')
                        .invoke('text')
                        .then((title) => {
                            expect(title.trim()).to.equal(details.title.trim());
                        });

                    cy.wrap(product)
                        .find('td:nth-child(3)')
                        .invoke('text')
                        .then((price) => {
                            expect(price.trim()).to.equal(details.price.trim());
                        });
                });
        });
    }
}

module.exports = new CartPage();
