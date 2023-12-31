// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import { Utility } from './utility';
import 'cypress-real-events/support';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

//Call getBaseUrl() to get environment specific url value
Cypress.config().baseUrl = new Utility().getBaseUrl();

// Alternatively you can use CommonJS syntax:
// require('./commands')

require('cypress-grep')();
require('cypress-cucumber-tagging/src/support')();
