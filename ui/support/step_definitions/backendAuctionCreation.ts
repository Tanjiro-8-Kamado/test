import { When,Then } from "cypress-cucumber-preprocessor/steps";
import Helper from "../../../lib/ui/pageObjects/common/helper";
import { BackendAuctionCreation, Backendlogin,Backendlots } from "../../locators/objectsRepository";
import message from "../../fixtures/message.json";
import * as user from '../../fixtures/backendauctiondetails.json';
import backendauction from '../../../lib/ui/pageObjects/backendauccreation/index';


const helper=new Helper();
const backendauc=new backendauction();

When(/^I click at Components Menu from backend dropdown open$/,async (button:string)=>{
helper.clickOnButton(BackendAuctionCreation.componentsmenu)
helper.support(BackendAuctionCreation.componentsmenu).then(component=>{
    expect(component.text().trim()).to.equals(message.backendauctioncreation.componentsmenu)
})
})

When(/^I click at Auction Menu from Components menu$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.auctionmenu)
})

When(/^I verify system redirect in Auction page$/,()=>{
    helper.support(Backendlogin.admindashboard).then(auction=>{
        expect(auction.text().trim()).to.equals(message.backendauctioncreation.auction)
    })
})

Then(/^I search the created auction$/,()=>{
    helper.enterText(BackendAuctionCreation.searchbox,user.dryrun.auctionName);
    helper.clickOnButton(BackendAuctionCreation.searchsymbol);
    helper.clickIfVisible(BackendAuctionCreation.serachauctionname);
})

Then(/^I change click at selected auction and click at trash button$/,()=>{
    helper.enterText(BackendAuctionCreation.searchbox,user.dryrun.auctionName);
    helper.clickOnButton(BackendAuctionCreation.searchsymbol);
    cy.get(BackendAuctionCreation.checkboaForAll).check();
    helper.clickOnButton(BackendAuctionCreation.auctrashbtn);
    helper.clickOnButton(BackendAuctionCreation.clickStatus);
    helper.clickOnButton(BackendAuctionCreation.auctrashstate);
    cy.get(BackendAuctionCreation.checkboaForAll).check();
    helper.clickOnButton(BackendAuctionCreation.emptyTrash);

})

Then(/^I change the status to cateloge uploaded stage and save the auction$/,()=>{ 
    helper.support(Backendlots.selectDryrunAuction).select('4',{force:true}).invoke("val").should('eq','4');
    helper.clickOnButton(BackendAuctionCreation.savebutton);    
})

Then(/^I change the status to absentee bid open stage and save the auction$/,()=>{ 
    helper.support(Backendlots.selectDryrunAuction).select('6',{force:true}).invoke("val").should('eq','6');
    helper.clickOnButton(BackendAuctionCreation.savebutton);    
})

Then(/^I change the status to absentee bid close stage and save the auction$/,()=>{ 
    helper.support(Backendlots.selectDryrunAuction).select('7',{force:true}).invoke("val").should('eq','7');
    helper.clickOnButton(BackendAuctionCreation.savebutton);    
})

Then(/^I change the status to result stage and save the auction$/,()=>{ 
    helper.support(Backendlots.selectDryrunAuction).select('9',{force:true}).invoke("val").should('eq','9');
    helper.clickOnButton(BackendAuctionCreation.savebutton);    
})
When(/^I click at New button on auction list page$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.auctionNewbutton)
})

When(/^I verify system redirect to new form auction$/,()=>{
    helper.support(Backendlogin.admindashboard).then(form=>{
        expect(form.text().trim()).to.equals(message.backendauctioncreation.newform)
    })
})

When(/^I verify 5 tabs are displaying in the auction form$/,()=>{
    helper.support(BackendAuctionCreation.basicdetails).then(tabs=>{
        expect(tabs.text().trim()).to.equals(message.backendauctioncreation.basicdetail)
    })
    helper.support(BackendAuctionCreation.notification).then(tabs=>{
        expect(tabs.text().trim()).to.equals(message.backendauctioncreation.noti)
    })
    helper.support(BackendAuctionCreation.highlightpreview).then(tabs=>{
        expect(tabs.text().trim()).to.equals(message.backendauctioncreation.highlightpreview)
    })
    helper.support(BackendAuctionCreation.param).then(tabs=>{
        expect(tabs.text().trim()).to.equals(message.backendauctioncreation.param)
    })
    helper.support(BackendAuctionCreation.financialinfo).then(tabs=>{
        expect(tabs.text().trim()).to.equals(message.backendauctioncreation.financialinformation)
    })
})

When(/^I click at Save button without entering any value to the form$/,()=>{
     helper.clickOnButton(BackendAuctionCreation.saveauction)
})

Then(/^I verify all error messages are display to the user on auction creation$/,()=>{
    helper.containsText(BackendAuctionCreation.titleerror.replace('\n\t',' '),message.backendauctioncreation.titleerrormsg)
    helper.containsText(BackendAuctionCreation.auctionnameerror.replace('\n\t',''),message.backendauctioncreation.auctionnameerrormsg)
    helper.containsText(BackendAuctionCreation.startdateerror.replace('\n\t',''),message.backendauctioncreation.startdateerrormsg)
    helper.containsText(BackendAuctionCreation.enddateerror.replace('\n\t',''),message.backendauctioncreation.enddateerrormsg)
    helper.containsText(BackendAuctionCreation.auctionimgerror.replace('\n\t',''),message.backendauctioncreation.auctionimgerrormsg)
    helper.containsText(BackendAuctionCreation.auctionnumerror.replace('\n\t',''),message.backendauctioncreation.auctionnumerrormsg)
    helper.containsText(BackendAuctionCreation.inrerror.replace('\n\t',''),message.backendauctioncreation.inrerrormsg)  
})

Then(/^I fill all mandotarty fields in the form$/,()=>{
        backendauc.enterrequiredfield();   
})

Then(/^I fill fields in the form with auction current date$/,()=>{
            backendauc.enterRequiredFieldWithCurrentDate();   
    })

Then(/^Enter auction name in search box$/,()=>{
    helper.enterText(BackendAuctionCreation.searchbox,user.backendauccreation.auctionnamesearch);
    helper.clickOnButton(BackendAuctionCreation.searchsymbol);
})

Then(/^I click on auction name$/,()=>{
    helper.clickIfVisible(BackendAuctionCreation.serachauctionname);
})

Then(/^I click on Save and Close button$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.saveclosebutton);
})

Then(/^I verfiy success message display on the form$/,()=>{
    helper.containsText(BackendAuctionCreation.aucalertmsg,message.backendauctioncreation.savedauction);
})

Then(/^I click on Save and New button$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.savenewbutton);
})

Then(/^I click on Close button$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.cancelbutton);
})

Then(/^I search auction by Search field$/,()=>{
    helper.enterText(BackendAuctionCreation.searchbox,user.backendauccreation.searchauction);
    helper.clickOnButton(BackendAuctionCreation.searchsymbol)
})

Then(/^I verify search tool options$/,()=>{
    helper.containsText(BackendAuctionCreation.searchtool,message.backendauctioncreation.searchtools);
    helper.clickOnButton(BackendAuctionCreation.searchtool);
    helper.containsText(BackendAuctionCreation.aucname,message.backendauctioncreation.auctionname);
    helper.containsText(BackendAuctionCreation.aucnumber,message.backendauctioncreation.aucionnumber);
    helper.containsText(BackendAuctionCreation.aucselectcategory,message.backendauctioncreation.auctionselectcat);
    helper.containsText(BackendAuctionCreation.aucstate,message.backendauctioncreation.auctionstate);
    helper.containsText(BackendAuctionCreation.aucstage,message.backendauctioncreation.auctionstage);
})

Then(/^I select auction from Auction Name dropdown$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.searchtool);
    helper.clickOnButton(BackendAuctionCreation.auctionnamedropdwn);
    helper.enterText(BackendAuctionCreation.nameinput,user.backendauccreation.auctionnamefilter);
    helper.clickOnButton(BackendAuctionCreation.searchresult)
})

Then(/^I select auction number form Auction Number dropdown$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.searchtool);
    helper.clickOnButton(BackendAuctionCreation.aucnumberdropdwn);
    helper.enterText(BackendAuctionCreation.aucnumberinput,user.backendauccreation.auctionnumber);
    helper.clickOnButton(BackendAuctionCreation.searchresult);
})

When(/^I click on Searchtool$/,()=>{
    helper.clickOnButton(BackendAuctionCreation.searchtool)
})

Then(/^I click on '([^"]*)' menu on the Category dropdown and check it open the correct page$/,async(redirectcategory:string)=>{
    backendauc.verifycategory(redirectcategory);
})

Then(/^I click on '([^"]*)' menu on the State dropdown and check it open the correct page$/,async(redirectstate:string)=>{
    backendauc.verifystate(redirectstate);
})

Then(/^I click on '([^"]*)' menu on the Stage dropdown and check it open the correct page$/,async(redirectstage:string)=>{
     backendauc.verifystage(redirectstage);
})

Then(/^I clear search result when click on Clear button$/,()=>{
    helper.containsText(BackendAuctionCreation.clearbutton,message.backendauctioncreation.clearbutton);
    helper.enterText(BackendAuctionCreation.searchbox,user.backendauccreation.searchauction);
    helper.clickOnButton(BackendAuctionCreation.clearbutton);
})

Then(/^I click on Unpublish button for unpublish auction$/,()=>{
    helper.enterText(BackendAuctionCreation.searchbox,user.backendauccreation.auctionname);
    helper.clickOnButton(BackendAuctionCreation.searchsymbol);
    cy.get(BackendAuctionCreation.aucchkbox).check();
    helper.clickOnButton(BackendAuctionCreation.aucunpublishbtn);
    helper.containsText(BackendAuctionCreation.aucalertmsg,message.backendauctioncreation.unpublichauc);
})

Then(/^I click on Publish button for publish auction$/,()=>{
    helper.enterText(BackendAuctionCreation.searchbox,user.backendauccreation.auctionname);
    helper.clickOnButton(BackendAuctionCreation.searchsymbol);
    cy.get(BackendAuctionCreation.aucchkbox).check();
    helper.clickOnButton(BackendAuctionCreation.aucpublishbtn);
    helper.containsText(BackendAuctionCreation.aucalertmsg,message.backendauctioncreation.publishauc);   
})

Then(/^I click on Trash button for trash auction$/,()=>{
     helper.enterText(BackendAuctionCreation.searchbox,user.backendauccreation.trashauction);
     helper.clickOnButton(BackendAuctionCreation.searchsymbol);
     cy.get(BackendAuctionCreation.aucchkbox).check();
     helper.clickOnButton(BackendAuctionCreation.auctrashbtn);
     helper.containsText(BackendAuctionCreation.aucalertmsg,message.backendauctioncreation.trashauc)
})

