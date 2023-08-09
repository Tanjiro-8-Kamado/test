import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import LogIn from '../../../lib/ui/pageObjects/auth/loginPage';
import { Backendlogin,LoginPage } from '../../locators/objectsRepository';
import * as domain from '../../fixtures/domains.json';
import message from '../../fixtures/message.json'
import user from '../../fixtures/accounts.json';

const helper = new Helper();
const logIn = new LogIn();


Given(/^I am on the derivaz and Ives backend$/, async () => {
    helper.openWebPage(domain.qaBackend.url);
  });

Given(/^I am on the derivaz and Ives Preview backend$/, async () => {
  helper.openWebPage(domain.Previewbackend.url);
});

  When(/^I input admin username and password$/, () => {
    logIn.logInWithbackendUsername();
  });

  When(/^I input register user username and password$/, () => {
    logIn.logInbackendWithRegisterUsername();
  });
  
  When(/^I input bidder user username and password to login in backend$/, () => {
    logIn.logInbackendWithBidderUsername();
  });

  When(/^I input admin username and click at login$/, () => {
    logIn.logIWithbackendUsernameOnly();
    helper.clickOnButton(Backendlogin.login);
  });

  When(/^I input admin password and click at login$/, () => {
    logIn.logIWithbackendPasswordOnly();
    helper.clickOnButton(Backendlogin.login);

  });

  Then(/^I verify '([^"]*)' error message is displayed in the pop up on the login page$/, (message: string) => {
  helper.containsText(Backendlogin.errormsg, message);
});

Then(/^I verify Control Panel is displaying in dashboard$/,()=>{
  helper.support(Backendlogin.admindashboard).then(dashboard=>{
   expect(dashboard.text().trim()).to.equals(message.backend.contactpanel)
  })
})

When(/^I input invalid username and password and click at login$/, () => {
  logIn.enterInvalidBackendCredintial();
  helper.clickOnButton(Backendlogin.login);
});

  When(/^I click on the '([^"]*)' button on login page$/,async (button: string) => {
    helper.clickOnButton(Backendlogin.login);
  });

  Then(/^I input admin username and password for preview$/,()=>{
      helper.enterText(LoginPage.usernameAdmin,user.qaAdmin.username);
      helper.enterText(LoginPage.passwordAdmin,user.qaAdmin.password);
  })
  
  Then(/^I type valid email and password on the preview login page$/,()=>{
    helper.enterText(LoginPage.username, user.preview.email);
    helper.enterText(LoginPage.password, user.preview.password);
  })