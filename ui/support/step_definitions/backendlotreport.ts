import { Then } from "cypress-cucumber-preprocessor/steps";
import Helper from "../../../lib/ui/pageObjects/common/helper";
import { BackendAuctionCreation, BackendLotReport } from "../../locators/objectsRepository";
import message from "../../fixtures/message.json";
import * as user from "../../fixtures/backendauctiondetails.json";
import lotreport from '../../../lib/ui/pageObjects/backendlotreport/index';


const helper=new Helper();
const statelot=new lotreport();

Then(/^I click on Lot Report menu$/,()=>{
    helper.clickOnButton(BackendLotReport.lotreport);
})

Then(/^I verfiy lot report header$/,()=>{
    helper.containsText(BackendLotReport.lottitlereport,message.backendlotreport.lottitreport);
    helper.containsText(BackendLotReport.lotauctiontitlereport,message.backendlotreport.auctiontitlelotreport);
    helper.containsText(BackendLotReport.lotstartpricereport,message.backendlotreport.lotstartprireport);
    helper.containsText(BackendLotReport.lotuserreport,message.backendlotreport.lotuserrepo);
    helper.containsText(BackendLotReport.lotbidamountreport,message.backendlotreport.lotbidamt);
    helper.containsText(BackendLotReport.lotbiddatereport,message.backendlotreport.lotbiddaterepo);
    helper.containsText(BackendLotReport.lotsoldreport,message.backendlotreport.lotsoldrepo);
    helper.containsText(BackendLotReport.lotestimatelowreport,message.backendlotreport.lotestilowreport);
    helper.containsText(BackendLotReport.lotestimatehighreport,message.backendlotreport.lotestihighreport);
    helper.containsText(BackendLotReport.lotstartdatereport,message.backendlotreport.lotstartdtereport);
})

Then(/^I enter lot name in search box$/,()=>{
    helper.enterText(BackendAuctionCreation.searchbox,user.backendauccreation.lotname);
})

Then(/^I click on search$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.searchsymbol);
})

Then(/^I verfiy with Lot Title to check correct lot search$/,()=>{
     helper.containsText(BackendLotReport.lottitlereport,message.backendlotreport.lottitreport);
})

Then(/^I Enter auction name in search box$/,()=>{
    helper.enterText(BackendAuctionCreation.searchbox,user.backendauccreation.searchauction);
})

Then(/^I verify with Auction Title to check correct auction search$/,()=>{
    helper.containsText(BackendLotReport.lotauctiontitlereport,message.backendlotreport.auctiontitlelotreport);
})

Then(/^I verfiy search tool on Lot Report$/,()=>{
    helper.containsText(BackendAuctionCreation.searchtool,message.backendauctioncreation.searchtools);
    helper.clickOnButton(BackendAuctionCreation.searchtool);
    helper.containsText(BackendLotReport.lotselectuser,message.backendlotreport.selectuser);
    helper.containsText(BackendLotReport.lotselectauctiontitle,message.backendlotreport.selectauctiontitle);
    helper.containsText(BackendLotReport.lotstate,message.backendlotreport.state);
    helper.containsText(BackendLotReport.lotselectlotstatus,message.backendlotreport.selectlotstatus);
})

Then(/^I search lot by user$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.searchtool);
    helper.clickOnButton(BackendLotReport.lotselectuserdropdwn);
    helper.enterText(BackendLotReport.lotuserinput,user.backendauccreation.searchbyuser);
    helper.clickOnButton(BackendLotReport.lotsearchbyuser);
})

Then(/^I verfiy with User field to check correct user related lot open$/,()=>{
    helper.containsText(BackendLotReport.lotuserreport,message.backendlotreport.lotuserrepo);
})

Then(/^I search lot by auction name$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.searchtool);
    helper.clickOnButton(BackendLotReport.lotselectaucdropdwn);
    helper.enterText(BackendLotReport.lotselectauction,user.backendauccreation.searchauction);
    helper.clickOnButton(BackendAuctionCreation.searchresult);
})

Then(/^I verfiy with Auction Title field to check correct auction related lot open$/,()=>{
    helper.containsText(BackendLotReport.lotauctiontitlereport,message.backendlotreport.auctiontitlelotreport);
})

Then(/^I click on '([^"]*)' menu on the State dropdown on lot report and check it open the correct page$/,async(redirectlotstate:string)=>{
    statelot.verfiystateforlotreport(redirectlotstate);
})

Then(/^I click on '([^"]*)' menu on the Lot Status dropdown on lot report and check it open the correct page$/,async(redirectlotstatus:string)=>{
    statelot.verfiylotstatusforlotreport(redirectlotstatus);
})

Then(/^I clear search lot result when click on Clear button$/,()=>{
    helper.containsText(BackendLotReport.lotclearbutton,message.backendauctioncreation.clearbutton);
    helper.enterText(BackendAuctionCreation.searchbox,user.backendauccreation.searchauction);
    helper.clickOnButton(BackendLotReport.lotclearbutton);
})

Then(/^I check total lots in search auction$/,()=>{
    helper.support(BackendLotReport.lottotalrow).then(row=>{
        console.log(row.length);
    })

})