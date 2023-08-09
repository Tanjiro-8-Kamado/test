import { Then } from "cypress-cucumber-preprocessor/steps";
import Helper from "../../../lib/ui/pageObjects/common/helper";
import { backendUserReport, BackendAuctionCreation, BackendLotReport } from "../../locators/objectsRepository";
import message from "../../fixtures/message.json";
import * as user from '../../fixtures/backendauctiondetails.json';
import userreport from '../../../lib/ui/pageObjects/backendlotreport/index';

const helper=new Helper();
const group=new userreport();

Then(/^I click on User Report menu$/,()=>{
    helper.clickOnButton(backendUserReport.userreport)
})

Then(/^I verify user report header$/,()=>{
    helper.containsText(backendUserReport.namereport,message.backenduserreport.namereport);
    helper.containsText(backendUserReport.usernamereport,message.backenduserreport.usernamereport);
    helper.containsText(backendUserReport.userwhatsappreport,message.backenduserreport.whatsappreport);
    helper.containsText(backendUserReport.userbillnamereport,message.backenduserreport.billingnamereport);
    helper.containsText(backendUserReport.userbidcountreport,message.backenduserreport.bidcountreport);
    helper.containsText(backendUserReport.userabsenteebidcountreport,message.backenduserreport.absenteebidcountreport);
})

Then(/^I enter name in search box$/,()=>{
    helper.enterText(BackendAuctionCreation.searchbox,user.backenduserreport.username);
})

Then(/^I verfiy with Name to check correct name related info open$/,()=>{
    helper.containsText(backendUserReport.namereport,message.backenduserreport.namereport);
})

Then(/^I enter username in search box$/,()=>{
    helper.enterText(BackendAuctionCreation.searchbox,user.backenduserreport.username);
})

Then(/^I verfiy with User Name to check correct user name related info open$/,()=>{
    helper.containsText(backendUserReport.usernamereport,message.backenduserreport.usernamereport);
})

Then(/^I verfiy search tool on User Report$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.searchtool);
    helper.containsText(backendUserReport.userselectgrpreport,message.backenduserreport.selectgroup);
})

Then(/^I click on '([^"]*)' menu on the Select Group dropdown on User report and check it open the correct page$/,async(redirectgrp:string)=>{
     group.verifyselectgrponuserrepo(redirectgrp);
})

Then(/^I clear search user result when click on Clear button$/,()=>{
    helper.containsText(BackendLotReport.lotclearbutton,message.backendauctioncreation.clearbutton);
    helper.clickOnButton(BackendAuctionCreation.clearbutton);
})

Then(/^I click on Bid Count then new pop up get open$/,()=>{
    helper.forceclick(backendUserReport.userbidcount);
})

Then(/^I verfiy Bid Count modalpopup header$/,()=>{
    helper.containsText(backendUserReport.modalpopbidid,message.backenduserreport.modalbidid);
    helper.containsText(backendUserReport.modalpopbidamt,message.backenduserreport.modalbidamt);
    helper.containsText(backendUserReport.modalpopbiddate,message.backenduserreport.modalbiddate);
    helper.containsText(backendUserReport.modalpoplottitle,message.backenduserreport.modallottitle);
    helper.containsText(backendUserReport.modalpopauctiontitle,message.backenduserreport.modalauctiontitle);
})

Then(/^I verfiy highest bid amount message on modalpopup$/,()=>{
    helper.support(backendUserReport.modalpophighestbidmsg).then(bidamtmsg=>{
        globalThis.highestbidmsg=bidamtmsg.text()
        cy.log(globalThis.highestbidmsg)
    })
})

Then(/^I closed the Bid Count modalpopup$/,()=>{
    helper.containsText(backendUserReport.modalpopclose,message.backenduserreport.modalpopbidcountclose);
    helper.forceclick(backendUserReport.modalpopclose);
})

Then(/^I click on Absentee bid count then new popup get open$/,()=>{
    helper.forceclick(backendUserReport.modalpopabsenteebidcount);
})

Then(/^I verfiy Absentee Bid Count modalpopup header$/,()=>{
    helper.containsText(backendUserReport.modalabsenteebidid,message.backenduserreport.modalabsenteebid);
    helper.containsText(backendUserReport.modalabsenteebiamount,message.backenduserreport.modalabsenteebidamt);
    helper.containsText(backendUserReport.modalabsenteebidate,message.backenduserreport.modalabsenteebiddte);
    helper.containsText(backendUserReport.modalabsenteebilottitle,message.backenduserreport.modalabsenteelottle);
    helper.containsText(backendUserReport.modalabsenteeauctiontitle,message.backenduserreport.modalabsenteeauctitle);
})

Then(/^I verfiy highest bid amount message on Absentee Bid Count modalpopup$/,()=>{
    helper.support(backendUserReport.modalpophighestabsenteebidmsg).then(absenteehigmsg=>{
        globalThis.highestabsenteebidmsg=absenteehigmsg.text()
        cy.log(globalThis.highestabsenteebidmsg)
    })
})


Then(/^I closed the Absentee Bid Count modalpopup$/,()=>{
    helper.containsText(backendUserReport.modalpopabsenteebidsecond,message.backenduserreport.modalpopbidcountclose)
    helper.clickOnButton(backendUserReport.modalpopabsenteebid);
})