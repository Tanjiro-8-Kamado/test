import { Then } from 'cypress-cucumber-preprocessor/steps';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import { MyLots, Viewallauctions } from '../../locators/objectsRepository';
import message from '../../fixtures/message.json';

const helper = new Helper();

Then(/^I select My Lots option from homepage$/, () =>{
    helper.clickOnButton(MyLots.mylots)
})

Then(/^I select auction name on select auction dropdown and click on go to auction from mylots page$/, () =>{
    helper.support(Viewallauctions.selectauctionviewall).select('345',{force:true}).invoke("val").should('eq','345')
    cy.get(MyLots.gotoauction1).click();
})

Then(/^I click on View Details for lot number then lot description get open on auction page$/, () =>{
    helper.clickOnButton(MyLots.viewdetails)
    
})

Then(/^I click on list view for lots then lots should be display in list view on mylots page$/, () =>{
    helper.clickOnButton(MyLots.listviewlot)
    helper.support(MyLots.mylottitle).then(lottitle=>{
        expect(lottitle.text().trim()).to.equals(message.auctionHeader.title);
        })
})

Then(/^I see all lots in grid view which is already selected on mylots page$/, ()=>{
    cy.get(MyLots.lotlistview1).click();
    helper.support(MyLots.mylottitle).then(lottitle=>{
        expect(lottitle.text().trim()).to.equals(message.auctionHeader.title);
        })
    cy.get(MyLots.lotlistview1).click();
});