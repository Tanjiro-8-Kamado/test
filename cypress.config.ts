import { defineConfig } from 'cypress';
const {registerReportPortalPlugin} = require('@reportportal/agent-js-cypress/lib/plugin');


export default defineConfig({
  fixturesFolder: 'ui/fixtures',
  screenshotsFolder: 'reports/ui/screenshots',
  // video: false,
  videosFolder: 'reports/ui/videos',
  watchForFileChanges: false,
  numTestsKeptInMemory: 3,
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 45000,
  requestTimeout: 45000,
  responseTimeout: 45000,
  chromeWebSecurity: false,
  includeShadowDom: true,
  projectId: 'acjqdj',
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: 'http://43.205.233.168:8080/api/v1',
    token: 'f34efa59-641c-483b-bfb0-a1d2938b26c4',
    launch: 'Derivaz-ives UI Automation',
    project: 'superadmin_personal',
    description: 'This is a Report Portal for Derivaz-ives UI Automation',
    reportDir: 'reports/ui',
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    overwrite: true,
    html: true,
    json: true,
    attachScreenshots : true,
    attributes: [
      {
        key: 'Regression',
        value: 'Test',
      }
    
    ],
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
      
          return null
        },
        rp_Log({ level, message }) {
          console.log(`[${level}] ${message}`);
          return null;
        }
      })
      return require('./ui/plugins/index.js')(on, config);
    },
    // experimentalSessionAndOrigin: true,
    specPattern: 'ui/tests/**/*.{feature,features}',
    supportFile: 'ui/support/index.js',
        
  },
});

