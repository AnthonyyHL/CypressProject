# Demoblaze Testing Framework with Cypress and Cucumber

## Description

This testing framework is designed to automate the testing of functionalities on the [Demoblaze](https://demoblaze.com/) e-commerce platform using **Cypress** and **Cucumber**. The goal is to validate key user flows, ensure consistent user experience, and identify any issues or inconsistencies across the platform. The framework leverages **Behavior-Driven Development (BDD)** principles with Cucumber to write test scenarios in a human-readable format.

## Features

1. **Cypress Integration**

    - Fast, reliable, and modern JavaScript testing framework.
    - Headless and headed browser execution support.

2. **Cucumber BDD**

    - Tests are written in Gherkin syntax (`Given`, `When`, `Then`) for clarity and collaboration.
    - Cucumber reports provide structured and readable results.

3. **Reusable Steps**

    - Step definitions are modular to maximize code reusability and reduce duplication.

4. **Explicit Waits**

    - Ensures that elements are ready for interaction before proceeding.
    - Uses Cypress’s `should` and `as` commands for waiting and aliasing.

5. **Execution Flow**

    - Tests are organized into feature files representing real user scenarios:
        - **Carousel Tests**: Validate the functionality of the homepage image carousel.
        - **Header Links Tests**: Ensure all header navigation links work correctly.
        - **Shopping Flow Tests**: Validate the ability to add products to the cart and complete the purchase process.

6. **Environment Configuration**
    - Uses Cypress environment variables to manage different test environments.
    - Ability to configure base URLs and credentials

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AnthonyyHL/DemoblazeCypressFramework.git
    ```
2. **Install dependencies:** Make sure you have Node.js installed. Run the following command to install all required dependencies:
   `npm install`
3. **Install Cypress and Cucumber preprocessor:** If not already
