import {Given, Then,When,And} from 'cypress-cucumber-preprocessor/steps';
import Helper from "../../../lib/ui/pageObjects/common/helper";
import {LoginPage,RegistrationPage, Visualtest} from "../../locators/objectsRepository";


const helper = new Helper();

Given(/^I am on the production environment of derivaz and Ives homepage$/, async () => {
    helper.openWebPage('https://www.derivaz-ives.com/home');
    helper.waitFor(2000)
    helper.clickIfVisible(LoginPage.refreshpopup)  
})

Then(/^I take the actual snapshots and expected snapshots of the editorial page$/,async () =>{
    const wait2k = 2000;
    helper.waitFor(wait2k);
cy.get(Visualtest.editorialsection).matchImageSnapshot('editorialpage')
cy.get(Visualtest.footer).matchImageSnapshot('editorialfooter')
cy.get(Visualtest.header).matchImageSnapshot('editorialheader')
});

Then(/^I take the actual snapshots and expected snapshots of the terms and condition page$/,async () =>{
    cy.get(Visualtest.termandcondition).matchImageSnapshot('termandconditionpage')
    cy.get(Visualtest.footer).matchImageSnapshot('termandconditionfooter')
    });

Then(/^I take the actual snapshots and expected snapshots of the Privacy Policy page$/,async () =>{
    cy.get(Visualtest.privacypolicy).matchImageSnapshot('privacypolicypage')
    cy.get(Visualtest.footer).matchImageSnapshot('privacypolicyfooter')
    cy.get(Visualtest.header).matchImageSnapshot('privacypolicyheader')
    });

Then(/^I take the actual snapshots and expected snapshots of the Terms of Use page$/,async () =>{
    cy.get(Visualtest.termsofUse).matchImageSnapshot('termsofUsepage')
    cy.get(Visualtest.footer).matchImageSnapshot('termsofUsefooter')
    cy.get(Visualtest.header).matchImageSnapshot('termsofUseheader')
    });
        

Then(/^I verify login form page does not have anything broken$/, async () => {
    cy.get(Visualtest.loginsection).matchImageSnapshot('login');
    cy.get(Visualtest.loginfullbodypage).matchImageSnapshot('fullbody2')
    cy.get(Visualtest.footer).matchImageSnapshot('loginfooter')
    cy.get(Visualtest.header).matchImageSnapshot('loginheader')
    
});

When(/^I click on 'Register to Bid' button to land on sign up page$/, async () => {
    helper.clickOnButton(RegistrationPage.registerButton)
});

Then(/^I take snapshot of signup page with blank data , i verify same visuals comes for all users$/, async () => {
    const wait2k = 2000;
    helper.waitFor(wait2k);
    cy.get(Visualtest.signupimage).matchImageSnapshot('signuppagemage')
    cy.get(Visualtest.signupfullpage).matchImageSnapshot('fullbody')
    cy.get(Visualtest.footer).matchImageSnapshot('signfooter')
    cy.get(Visualtest.header).matchImageSnapshot('signheader')
});

When(/^I click on More menu on homepage$/, async () => {
    helper.clickOnButton(Visualtest.moremenu)
});

And(/^I click on About us menu$/, async () => {
    helper.clickOnButton(Visualtest.aboutusmenu)
});

And(/^I click on Contact us menu$/, async () => {
    helper.clickOnButton(Visualtest.contactusmenu)
});

Then(/^I take the snapshots of the page and verify the contents,data and image are unchanged and not broken$/, async () => {
    cy.get(Visualtest.aboutuspage).matchImageSnapshot('aboutus')
    cy.get(Visualtest.footer).matchImageSnapshot('aboutusfooter')
    cy.get(Visualtest.header).matchImageSnapshot('aboutusheader')
});

Then(/^I take the snapshots of the Contact us page and verify the contents,data and image are unchanged and not broken$/, async () => {
    cy.get(Visualtest.contactuspage).matchImageSnapshot('contactus')
    cy.get(Visualtest.footer).matchImageSnapshot('contactusfooter')
    cy.get(Visualtest.header).matchImageSnapshot('contactusheader')
});
