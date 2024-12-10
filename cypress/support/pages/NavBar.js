import BasePage from '../basePage/BasePage';

class NavBar extends BasePage {
    navBarOption = {
        home: "#navbarExample > .navbar-nav li:contains('Home')",
        contact: "#navbarExample > .navbar-nav li:contains('Contact')",
        aboutUs: "#navbarExample > .navbar-nav li:contains('About Us')",
        cart: "#navbarExample > .navbar-nav li:contains('Cart')",
        logIn: "#navbarExample > .navbar-nav li:contains('Log In')",
        signUp: "#navbarExample > .navbar-nav li:contains('Sign Up')",
    };

    clickNavOption(optionName) {
        const option = cy.get(this.navBarOption[optionName.toLowerCase()]);
        super.isElementVisible(option);
        super.isElementClickable(option);
        return option.click();
    }
}

module.exports = new NavBar();
