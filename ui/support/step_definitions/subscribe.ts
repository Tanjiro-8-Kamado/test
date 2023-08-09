import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import Register from '../../../lib/ui/pageObjects/auth/registrationPage';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import { Subscriber , GeneralLocators ,LoginPage} from '../../locators/objectsRepository';
import user from '../../fixtures/accounts.json';
import Message from '../../fixtures/message.json'

const helper = new Helper();
const register = new Register();

const random = new Date().toISOString().replace(/[-,:.]/g, '');
const email=user.new_registeration.email+random+ '@yopmail.com'

Given(/^I am on the subscriber page$/, () => {
    helper.openWebPage('/subscriber', { failOnStatusCode: false }); 
});

And(/^I click on accept cookie button$/, async (button: string) => {
    helper.clickOnButton(Subscriber.cookiebutton, button);
})

When(/^I type email-address in subscribe field textbox$/, () => {
   helper.enterText(Subscriber.subscriptionform, email);
   helper.writeFile(`${GeneralLocators.path}/email`, email);
});

Then(/^I click on subscribe button$/, async (button: string) => {
    helper.clickOnButton(Subscriber.submit, button);
});

Then(/^I verify successfull email verified notification$/, async (text: string) => {
    cy.log('reach')
    helper.verifyText(Subscriber.displayveri, Message.subscribeverify);
})

Then(/^I verify You have subscribe notification$/,async(text: string)=>{
    helper.verifyText(Subscriber.notificationverified, Message.subscribenotification)
})

Then(/^I verify user email exist in backend$/,()=>{
    register.verifyuserfrombackend()
})

Then(/^I delete the subscribe user$/,()=>{
    register.deletesubscribeuserfrombackend();
})