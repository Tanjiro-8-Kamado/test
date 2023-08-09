import { When,Then} from 'cypress-cucumber-preprocessor/steps';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import { MyAuction } from '../../locators/objectsRepository';
import message from '../../fixtures/message.json';

const helper = new Helper();

Then(/^I see profile name available on homepage$/, () =>{
    helper.support(MyAuction.profilename).then(profile=>{
        expect(profile.text().trim()).to.equals(message.auctionHeader.profilename);
    })
})

When(/^I click on profile name from homepage$/, () =>{
    helper.clickOnButton(MyAuction.profilename);
})

Then(/^I select My Auctions option from homepage$/, () =>{
    helper.clickOnButton(MyAuction.myauction);
}); 

When(/^I click on auction number '([^"]*)' then related lots get open$/, (auctionNumber:string) =>{
    auctionNumber=MyAuction.lotopen.replace('{auctionNumber}',`D&I.${auctionNumber}`);
    helper.clickOnButton(auctionNumber);
});