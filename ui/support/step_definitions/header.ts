import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import { Menu } from '../../locators/objectsRepository';
import Message from '../../fixtures/message.json'

const helper = new Helper();

Then(/^I verify (Departments) text is displayed on the header$/, async (message: string) => {
    helper.support(Menu.departments).then(text=>{
      const mytext = helper.getText(text)
       expect(mytext).to.contains(message) 
    })  
});

When(/^I click on 'Departments' menu on the header$/, async (button: string) => {
  helper.clickOnButton(Menu.departments, button);
})

When(/^I click on '([^"]*)' submenu from departments header$/, async (text: string) => {
helper.clickOnButton(Menu.depitem1.replace('{submenu}',text));
});

Then(/^I verify '([^"]*)' text is present in the breadcrum of the page$/, async (message: string) => {
  helper.containsText(Menu.departmentsbreadcrum.trim().replace('{submenubreadcrum}',message),message);
});

Then(/^I verify (Editorial) text is available in the header menus$/, async (message: string) => {
  helper.verifyText(Menu.editorial, Message.header.edit);
});

When(/^I click on '([^"]*)' menu in the header$/, async (message: string) => {
  helper.clickOnButton(Menu.editorial, message);
});

Then(/^I verify user redirects in correct page$/, async (message: string) => {
helper.containsText(Menu.editpage, Message.header.editdetail);
});

Then(/^I verify (Auctions) text is displayed on the header$/, async (message: string) => {
  helper.support(Menu.auction).then(message=>{
  expect(message.text().trim()).to.equals(Message.header.auc.trim())
     });
} );

When(/^I click on '([^"]*)' menu on the header$/, async (message: string) => {
  helper.clickOnButton(Menu.auction, message);
});

When(/^I click on '([^"]*)' submenu from Auctions header$/, async (text: string) => {
  helper.clickOnButton(Menu.auctionmenu.replace('{auctionsubmenu}',text));
});

Then(/^I verify "([^"]*)" text is present as header of the page$/, async (message: string) => {
  helper.containsText(Menu.allauction.trim().replace('{allauctionsubmenu}',message),message);
});

Then(/^I verify (More) text is displayed on the header$/, async (message: string) => {
  helper.support(Menu.moremenu).then(message=>{
  expect(message.text().trim()).to.equals(Message.header.more.trim())
  });
});

When(/^I click on '([^"]*)' menus on the header$/, async (button: string) => {
  helper.clickOnButton(Menu.moremenu, button);
});

When(/^I click on '([^"]*)' submenu from more menu$/, async (button: string) => {
  helper.clickOnButton(Menu.moresubmenu.replace('{submenu}', button));
});

Then(/^I verify on '([^"]*)' submenu from more menu$/, async (text: string) => {
  helper.containsText(Menu.about.trim().replace('{aboutcontact}',text),text);
});
