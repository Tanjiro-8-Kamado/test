import { Given,When,Then} from 'cypress-cucumber-preprocessor/steps';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import { CommonChecks, liveauction, Viewallauctions,AuctionHighlights } from '../../locators/objectsRepository';
import message from '../../fixtures/message.json';


const helper = new Helper();

Given(/^I am on the derivaz and Ives homepage$/, () => {
    helper.openWebPage('/');
});

Then(/^I see All Auctions section available on homepage$/,() =>{
    helper.support(Viewallauctions.allauctions).then(allauction=>{
        expect(allauction.text().trim()).to.equals(message.auctionHeader.auction.trim());
    })
});

When(/^I click on View All link on homepage and All Auction page get open$/, () => {
    helper.clickOnButton(liveauction.newviewalllink1);
});

Then(/^I click on lot number '([^"]*)' and Save to Lots then it navigate to homepage$/, (lotNumber) =>  {
     helper.support(Viewallauctions.lotTitle.replace('{lotnumber}',lotNumber)).then(sayali=>{
        helper.clickOnButton(Viewallauctions.savelot1)
     });   
});

Then(/^I click on Save to my auction for auction number '([^"]*)' then it navigate to homepage$/, (auctionNumber:string) => {
    auctionNumber=AuctionHighlights.saveauctionhighlight.replace('{auctionNumber}',`D&I.${auctionNumber}`);
    helper.xpath(auctionNumber).should(CommonChecks.beVisible).eq(0).click()
});



