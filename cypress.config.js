const {defineConfig} = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  projectId: 'y2bk5o',
  e2e: {
    watchForFileChanges: false,
    experimentalSessionAndOrigin: true,
    baseUrl: 'https://demo.guru99.com/V4/',
    supportFile: "cypress/support/commands.js",
    specPattern: "**/*.feature",
    setupNodeEvents,
    env: {
      userId: 'mngr47659',
      password: '1@1',
    },
  },
});
