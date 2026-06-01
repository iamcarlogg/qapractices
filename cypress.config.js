const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 6000,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
