const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   async setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/features/*.feature",
  },
  
});
