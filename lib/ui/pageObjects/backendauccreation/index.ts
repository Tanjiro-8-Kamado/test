import Helper from '../common/helper';
import { BackendAuctionCreation } from '../../../../ui/locators/objectsRepository';
import * as user from '../../../../ui/fixtures/backendauctiondetails.json';
import message from '../../../../ui/fixtures/message.json';

const helper=new Helper();

const filePath = 'file.json';
let data = {  };

class backendcreateauction {
    
    enterRequiredFieldWithCurrentDate(){   
      
        const { startDateTime, endDateTime } = helper.systemCurrentDateTime();
        data['startDateTime'] = startDateTime;
        data['endDateTime'] = endDateTime;
        cy.writeFile(filePath, data);  
        cy.log(filePath+'filepath fo auction');
        // Reading date and time from a JSON file
        cy.readFile(filePath).then((data) => {
        const newStartDateTime = new Date(data.startDateTime);
        const newEndDateTimeTime = new Date(data.endDateTime);
        });

        helper.enterText(BackendAuctionCreation.aucformtitle,user.dryrun.auctionName);
        helper.enterText(BackendAuctionCreation.aucformname,user.dryrun.auctionName);
        helper.enterText(BackendAuctionCreation.aucformstartdate,startDateTime);
        helper.enterText(BackendAuctionCreation.aucformenddate,endDateTime);
        helper.enterText(BackendAuctionCreation.aucformimg,user.backendauccreation.auctionimg);
        helper.enterText(BackendAuctionCreation.aucformnumber,user.backendauccreation.auctionnum);
        helper.support(BackendAuctionCreation.aucstatus).select('1',{force:true}).invoke("val").should('eq','1');
        helper.enterText(BackendAuctionCreation.aucdatetimeinfo,user.backendauccreation.datetimeinfo);
        helper.support(BackendAuctionCreation.aucresultinfo).select('both');
        helper.clickOnButton(BackendAuctionCreation.aucwinnername);
        helper.clickOnButton(BackendAuctionCreation.aucclosingschedule);
        helper.clickOnButton(BackendAuctionCreation.aucnotificationtab);
        helper.clickOnButton(BackendAuctionCreation.aucsndaucstartnotification);
        helper.clickOnButton(BackendAuctionCreation.aucnotifywinner);
        helper.clickOnButton(BackendAuctionCreation.aucnotifylooser);
        helper.clickOnButton(BackendAuctionCreation.aucnotifyabsenteebidopen);
        helper.clickOnButton(BackendAuctionCreation.auchighlightpreviewtab);
        helper.clickOnButton(BackendAuctionCreation.auchighlightcarouselselect);
        helper.containsText(BackendAuctionCreation.assertpath,message.backendauctioncreation.path);
        helper.support(BackendAuctionCreation.modalpop).eq(0).type(user.backendauccreation.highlightcarousel);
        helper.enterText(BackendAuctionCreation.modalpop,user.backendauccreation.highlightcarousel)
        helper.clickOnButton(BackendAuctionCreation.addhighlightimage);
        helper.support(BackendAuctionCreation.modalpop).eq(1).type(user.backendauccreation.addimagehighlight);
        helper.clickOnButton(BackendAuctionCreation.savemodalpopup);
        helper.clickOnButton(BackendAuctionCreation.auchighlighttopselect);
        helper.containsText(BackendAuctionCreation.asserthighlighttoppath,message.backendauctioncreation.path);
        helper.support(BackendAuctionCreation.modalpopuphighlighttop).eq(0).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.addhighlighttopimage);
        helper.support(BackendAuctionCreation.modalpopuphighlighttop).eq(1).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.savemodalpopuphighlighttop);
        helper.clickOnButton(BackendAuctionCreation.aucpreviewcarouselselect);
        helper.containsText(BackendAuctionCreation.assertpreviewpath,message.backendauctioncreation.path);
        helper.support(BackendAuctionCreation.modalpopuppreview).eq(0).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.addpreviewimage);
        helper.support(BackendAuctionCreation.modalpopuppreview).eq(1).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.savemodalpopuppreview);
        helper.clickOnButton(BackendAuctionCreation.aucpreviewtopselect);
        helper.containsText(BackendAuctionCreation.assertpreviewtoppath,message.backendauctioncreation.path);
        helper.support(BackendAuctionCreation.modalpopuppreviewtop).eq(0).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.addpreviewtopimage);
        helper.support(BackendAuctionCreation.modalpopuppreviewtop).eq(1).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.savemodalpopuppreviewtop);
        helper.clickOnButton(BackendAuctionCreation.aucpreviewbottomselect);
        helper.containsText(BackendAuctionCreation.assertpreviewbottompath,message.backendauctioncreation.path);
        helper.support(BackendAuctionCreation.modalpopuppreviewbottom).eq(0).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.addpreviewbottomimage);
        helper.support(BackendAuctionCreation.modalpopuppreviewbottom).eq(1).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.savemodalpopuppreviewbottom);
        helper.clickOnButton(BackendAuctionCreation.aucparamtab);
        helper.enterText(BackendAuctionCreation.auccurrencyrateinr,user.backendauccreation.currencyrateinr);
        helper.enterText(BackendAuctionCreation.auccurrencyrategbp,user.backendauccreation.currencyrategbp);
        helper.clickOnButton(BackendAuctionCreation.aucfinancialinfotab);
        helper.support(BackendAuctionCreation.aucincrement).type(JSON.stringify(user.backendauccreation.incrementtable),{parseSpecialCharSequences: false})
        helper.enterText(BackendAuctionCreation.aucbuyerspremium,user.backendauccreation.buyerpremium);
        helper.clickOnButton(BackendAuctionCreation.savebutton);
        helper.containsText(BackendAuctionCreation.aucalertmsg,message.backendauctioncreation.savedauction)
    }

    enterrequiredfield(){

        helper.enterText(BackendAuctionCreation.aucformtitle,user.backendauccreation.title);
        helper.enterText(BackendAuctionCreation.aucformname,user.backendauccreation.auctionname);
        helper.enterText(BackendAuctionCreation.aucformstartdate,user.backendauccreation.startdate);
        helper.enterText(BackendAuctionCreation.aucformenddate,user.backendauccreation.enddate);
        helper.enterText(BackendAuctionCreation.aucformimg,user.backendauccreation.auctionimg);
        helper.enterText(BackendAuctionCreation.aucformnumber,user.backendauccreation.auctionnum);
        helper.support(BackendAuctionCreation.aucstatus).select('1',{force:true}).invoke("val").should('eq','1');
        helper.enterText(BackendAuctionCreation.aucdatetimeinfo,user.backendauccreation.datetimeinfo);
        helper.support(BackendAuctionCreation.aucresultinfo).select('both');
        helper.clickOnButton(BackendAuctionCreation.aucwinnername);
        helper.clickOnButton(BackendAuctionCreation.aucclosingschedule);
        helper.clickOnButton(BackendAuctionCreation.aucnotificationtab);
        helper.clickOnButton(BackendAuctionCreation.aucsndaucstartnotification);
        helper.clickOnButton(BackendAuctionCreation.aucnotifywinner);
        helper.clickOnButton(BackendAuctionCreation.aucnotifylooser);
        helper.clickOnButton(BackendAuctionCreation.aucnotifyabsenteebidopen);
        helper.clickOnButton(BackendAuctionCreation.auchighlightpreviewtab);
        helper.clickOnButton(BackendAuctionCreation.auchighlightcarouselselect);
        helper.containsText(BackendAuctionCreation.assertpath,message.backendauctioncreation.path);
        helper.support(BackendAuctionCreation.modalpop).eq(0).type(user.backendauccreation.highlightcarousel);
        helper.enterText(BackendAuctionCreation.modalpop,user.backendauccreation.highlightcarousel)
        helper.clickOnButton(BackendAuctionCreation.addhighlightimage);
        helper.support(BackendAuctionCreation.modalpop).eq(1).type(user.backendauccreation.addimagehighlight);
        helper.clickOnButton(BackendAuctionCreation.savemodalpopup);
        helper.clickOnButton(BackendAuctionCreation.auchighlighttopselect);
        helper.containsText(BackendAuctionCreation.asserthighlighttoppath,message.backendauctioncreation.path);
        helper.support(BackendAuctionCreation.modalpopuphighlighttop).eq(0).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.addhighlighttopimage);
        helper.support(BackendAuctionCreation.modalpopuphighlighttop).eq(1).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.savemodalpopuphighlighttop);
        helper.clickOnButton(BackendAuctionCreation.aucpreviewcarouselselect);
        helper.containsText(BackendAuctionCreation.assertpreviewpath,message.backendauctioncreation.path);
        helper.support(BackendAuctionCreation.modalpopuppreview).eq(0).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.addpreviewimage);
        helper.support(BackendAuctionCreation.modalpopuppreview).eq(1).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.savemodalpopuppreview);
        helper.clickOnButton(BackendAuctionCreation.aucpreviewtopselect);
        helper.containsText(BackendAuctionCreation.assertpreviewtoppath,message.backendauctioncreation.path);
        helper.support(BackendAuctionCreation.modalpopuppreviewtop).eq(0).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.addpreviewtopimage);
        helper.support(BackendAuctionCreation.modalpopuppreviewtop).eq(1).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.savemodalpopuppreviewtop);
        helper.clickOnButton(BackendAuctionCreation.aucpreviewbottomselect);
        helper.containsText(BackendAuctionCreation.assertpreviewbottompath,message.backendauctioncreation.path);
        helper.support(BackendAuctionCreation.modalpopuppreviewbottom).eq(0).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.addpreviewbottomimage);
        helper.support(BackendAuctionCreation.modalpopuppreviewbottom).eq(1).type(user.backendauccreation.highlightcarousel);
        helper.clickOnButton(BackendAuctionCreation.savemodalpopuppreviewbottom);
        helper.clickOnButton(BackendAuctionCreation.aucparamtab);
        helper.enterText(BackendAuctionCreation.auccurrencyrateinr,user.backendauccreation.currencyrateinr);
        helper.enterText(BackendAuctionCreation.auccurrencyrategbp,user.backendauccreation.currencyrategbp);
        helper.clickOnButton(BackendAuctionCreation.aucfinancialinfotab);
        helper.support(BackendAuctionCreation.aucincrement).type(JSON.stringify(user.backendauccreation.incrementtable),{parseSpecialCharSequences: false})
        helper.enterText(BackendAuctionCreation.aucbuyerspremium,user.backendauccreation.buyerpremium);
        helper.clickOnButton(BackendAuctionCreation.savebutton);
        helper.containsText(BackendAuctionCreation.aucalertmsg,message.backendauctioncreation.savedauction)
    }

    
    verifycategory(cat:string){
        let catlocatoar:string;
        helper.clickOnButton(BackendAuctionCreation.selectcategorydropdwn);

        switch(cat){
            case 'Modern Indian Fine Arts':
                catlocatoar=BackendAuctionCreation.aucmodernindianartcat;
                break;

            case 'Contemporary Indian Fine Arts':
                catlocatoar=BackendAuctionCreation.aucconindianfineartcat;
                break;
            
            case 'Vintage & Classic Automobiles and Travel Heritage':
                catlocatoar=BackendAuctionCreation.aucvinclasscat;
                break;

            case 'Indian & Asian Antiquities':
                catlocatoar=BackendAuctionCreation.aucindianasincat;
                break;

            case 'Antiquarian Books & Prints':
                catlocatoar=BackendAuctionCreation.aucantibookcat;
                break;

            case 'Photography':
                catlocatoar=BackendAuctionCreation.aucphotocat;
                break;
            
            case 'Indian Film Memorabilia':
                catlocatoar=BackendAuctionCreation.aucindianfilmcat;
                break;

            case 'Hollywood & World Film Memorabilia':
                catlocatoar=BackendAuctionCreation.auchollywoodcat;
                break;

            case 'Football, Cricket & Other Sporting Memorabilia':
                catlocatoar=BackendAuctionCreation.aucfootballcat;
                break;
            
            default:
                throw Error('no case')
        }
        cy.get(catlocatoar).scrollIntoView().click();
        helper.support(BackendAuctionCreation.selectcategorydropdwn).then(cattext=>{
            expect(cattext.text()).to.contains(cat);
        })
    }
    
    verifystate(state: string){
        let locator: string;
        helper.clickOnButton(BackendAuctionCreation.statedropdwn)
        
        switch(state){
            case 'Published':
                locator=BackendAuctionCreation.aucpublishstate;
                break;
            
            case 'Unpublished':
                locator=BackendAuctionCreation.aucunpublishstate;  
                  break;
                  
            case 'Draft':
                locator=BackendAuctionCreation.aucdraftstate;
                break;

            case 'Trashed':  
                locator=BackendAuctionCreation.auctrashstate;
                break;

            default:
            throw Error('no case')
                
        }
        helper.clickOnButton(locator);
        helper.support(BackendAuctionCreation.statedropdwn).then(text=>{
        expect(text.text()).to.contains(state)   
    })
    }

    verifystage(stage:string){
        let stagelocator:string;
        helper.clickOnButton(BackendAuctionCreation.stagedropdwn);

        switch(stage){
            case 'Open For Consignments':
                stagelocator=BackendAuctionCreation.aucopenconsignstage;
                break;
            
            case 'Closing For Consignment':
                stagelocator=BackendAuctionCreation.auccloseconsignstage;
                break;
            
            case 'Auction Highlights':
                stagelocator=BackendAuctionCreation.auchighlightstage;
                break;
            
            case 'Catalogue Uploaded':
                stagelocator=BackendAuctionCreation.auccatuploadstage;
                break;
            
            case 'Private Preview':
                stagelocator=BackendAuctionCreation.aucpripreviewstage;
                break;

            case 'Absentee Bidding Open':
                stagelocator=BackendAuctionCreation.aucabostage;
                break;

            case 'Absentee Bidding Closed':
                stagelocator=BackendAuctionCreation.aucabcstage;
                break;

            case 'Auction Live':
                stagelocator=BackendAuctionCreation.auclivestage;
                break;

            case 'Auction Results & Analysis':
                stagelocator=BackendAuctionCreation.aucresultstage;
                break;

            case 'Post Auction Sale':
                stagelocator=BackendAuctionCreation.aucpostauctionstage;
                break;

            case 'Auction is Archived':
                stagelocator=BackendAuctionCreation.aucarchivedstage;
                break;

            default:
                throw Error('no case')
            
        }
        cy.get(stagelocator).scrollIntoView().click();
        helper.support(BackendAuctionCreation.stagedropdwn).then(stagetext=>{
            expect(stagetext.text()).to.contains(stage);
        })
    }  
    
}

export default backendcreateauction;