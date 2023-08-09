import { Then } from "cypress-cucumber-preprocessor/steps";
import Helper from "../../../lib/ui/pageObjects/common/helper";
import { BackendAuctionReport } from "../../locators/objectsRepository";
import message from "../../fixtures/message.json";
import * as user from "../../fixtures/backendauctiondetails.json";

const helper=new Helper();

Then(/^I click on Auctions Report menu$/,()=>{
    helper.clickOnButton(BackendAuctionReport.auctionreport);
})

Then(/^I verify report header$/,()=>{
    helper.containsText(BackendAuctionReport.auctionnumberreport,message.backendauctionreport.aucnumreport);
    helper.containsText(BackendAuctionReport.auctionnamereport,message.backendauctionreport.aucnamereport);
    helper.containsText(BackendAuctionReport.auctionstartdatereport,message.backendauctionreport.aucstartdatereport);
    helper.containsText(BackendAuctionReport.auctionenddatereport,message.backendauctionreport.aucenddatereport);
    helper.containsText(BackendAuctionReport.auctioncategoryreport,message.backendauctionreport.auccategoryreport);
    helper.containsText(BackendAuctionReport.auctionbuyerspremiumreport,message.backendauctionreport.aucbuyerpremiumreport);
    helper.containsText(BackendAuctionReport.auctiontotallotsreport,message.backendauctionreport.auctotallotsreport);
    helper.containsText(BackendAuctionReport.auctionidreport,message.backendauctionreport.auctidreport);
})

Then(/^I click on search auction$/,()=>{
    helper.clickOnButton(BackendAuctionReport.auctionclick);
})

Then(/^I verify with the lot id to check the correct auction open$/,()=>{
    helper.containsText(BackendAuctionReport.auctionreportlotid,message.backendauctionreport.aucreportlotid);
})

Then(/^I verify with the auction name to check the correctly search auction$/,()=>{
    helper.containsText(BackendAuctionReport.searchaucnamereport,user.backendauccreation.searchauction);
})

Then(/^I click on Total lots on auction report$/,()=>{
    helper.clickOnButton(BackendAuctionReport.auciontotlotreport);
})