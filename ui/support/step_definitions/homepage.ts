import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import { Homepage } from '../../locators/objectsRepository';
import * as domain from '../../fixtures/domains.json';

const helper = new Helper();

Given(/^I am on the derivaz and Ives homepage$/, async () => {
helper.openWebPage('');
});

Given(/^I am on the derivaz and Ives homepage of Preview$/, async () => {
    helper.openWebPage(domain.preview.url);
    });

When(/^I click on the '([^"]*)' link from homepage$/, (link: string) => {
helper.clickWithContains(link);
});

When(/^I verify username is diplayed on homepage$/, () => {
  helper.containsText(Homepage.username, globalThis.username);
});

When(/^I go to profile page from homepage$/, () => {
  helper.clickOnButton(Homepage.username);
  helper.support(Homepage.profile).realHover().click();
});

When(/^I go to logout from profile page$/, () => {
  helper.clickOnButton(Homepage.username);
  helper.support(Homepage.logout).realHover().click();
});
