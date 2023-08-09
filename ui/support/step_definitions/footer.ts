import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import Foot from '../../../lib/ui/pageObjects/auth/footer';
import { Footer, Menu } from '../../locators/objectsRepository';
import Message from '../../fixtures/message.json'

const footer = new Foot();


const helper = new Helper();

Then(/^I verify (Departments) text is displayed on the footer$/, async (message: string) => {
    helper.support(Footer.departments).then(text=>{
      const mytext = helper.getText(text)
       expect(mytext).to.contains(message) 
    })  
});
  
Then(/^I verify (Auctions) text is displayed on the footer$/, async (message: string) => {
  helper.support(Footer.auction).then(text=>{
    const mytext = helper.getText(text)
     expect(mytext).to.contains(message) 
  })  
});

Then(/^I verify (Company) text is displayed on the footer$/, async (message: string) => {
  helper.support(Footer.company).then(text=>{
    const mytext = helper.getText(text)
     expect(mytext).to.contains(message) 
  })  
});

When(/^I click on '([^"]*)' menu on the footer and check it redirect to correct page$/, async (link: string) => {
  footer.verifyFooter(link);
})

Then(/^I verify (Legal) text is displayed on the footer$/,async (message: string)=>{
  helper.support(Footer.legal).then(legaltxt=>{
    globalThis.legaltext=legaltxt.text();
    cy.log(globalThis.legaltext)
  })
});

When(/^I click on '([^"]*)' menu on the footer and check it redirect to correct page$/, async (link: string) => {
  footer.verifyFooter(link);
})

Then(/^I verify Help text is displayed on the footer$/,()=>{
     helper.support(Footer.help).then(helptxt=>{
      globalThis.help=helptxt.text();
      cy.log(globalThis.help)
     })
})
