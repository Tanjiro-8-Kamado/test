import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Register from '../../../lib/ui/pageObjects/auth/registrationPage';
import * as domain from '../../fixtures/domains.json';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import {Backendlogin} from '../../../ui/locators/objectsRepository';


const helper = new Helper();
const register = new Register();


When(/^I try to create a new account by keeping blank mandatory fields$/, () => {
  register.signUpWithBlankfields();
});

When(/^I create a new account with Exist mail id$/, () => {
  register.signUpWithExitEmail();
});

When(/^I create a new account$/, () => {
  register.signUp();
});

Given(/^I launch YOPmail website$/, () => {
  helper.openWebPage(domain.yopmail.url);
});

Then(/^I fetch the verification link from YOPmail$/, () => {
  register.getVarificationLinkFromMailinator();
});

Given(/^I open the verification link$/, () => {
  register.verifyEmail();
});

When(/^I input newly created username and password$/, () => {
  register.loginWithNewlyRegisteredUser();
});

Then(/^I launch mailinator website for resetpassword$/,()=>{
  helper.openWebPage(domain.mailinator.url);
})

Then(/^I fetch the verification Code from mailinator$/, () => {
  register.getVarificationCodeFromMailinator();
});

Then(/^I open the verification code$/,()=>{
  register.verifyCode();
})

Then(/^I launch YOPmail website for subscribe$/,()=>{
  helper.openWebPage(domain.yopmail.url);
})

Then(/^I fetch the subscriptiontoken from YOPmail$/, () => {
  register.getsubscriptionemailverificationtoken();
})

Then(/^I verify register user is display in backend$/,()=>{
  register.verifyregisteruserfrombackend()
})

Then(/^I give bidder access to the user and save the changes$/,()=>{
  helper.clickOnButton(Backendlogin.searchUsername);
  helper.clickOnButton(Backendlogin.accessUserGroup);
  helper.clickOnButton(Backendlogin.selectBidder);
  helper.clickOnButton(Backendlogin.save);
})

Then(/^I delete the register user$/,()=>{
  register.deleteregisteruserfrombackend()  
})
