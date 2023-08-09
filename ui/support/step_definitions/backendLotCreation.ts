import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import { Backendlots} from '../../locators/objectsRepository';
import message from '../../fixtures/message.json';
import * as details from '../../fixtures/backendauctiondetails.json';
import backendlot from '../../../lib/ui/pageObjects/backendlotcreation/index'
import moment from 'moment';

const filePath = 'file.json';

const helper = new Helper();
const lotbackend=new backendlot();

When(/^I click at '([^"]*)' Menu from backend dropdown$/,async (button: string) => {
    helper.clickOnButton(Backendlots.componentsMenu);
  });

  When(/^I click at '([^"]*)' Menu after clicking at components$/,async (button: string) => {
    helper.clickOnButton(Backendlots.auctionMenu);
  });
  
  When(/^I click at '([^"]*)' Menu after clicking at components then click at lot side menu$/,async (button: string) => {
    helper.clickOnButton(Backendlots.lotMenu);
  })

  Then(/^I verify '([^"]*)' tabs are displaying in the lot form$/,async (button: string)=>{
  
   helper.clickOnButton(Backendlots.lotDescription);  
   helper.support(Backendlots.lotDetails).then(newlot=>{
    expect(newlot.text().trim()).to.equals(message.backend.lotDetail)
   })
   
   helper.clickOnButton(Backendlots.lotDetails);  
   helper.support(Backendlots.lotDescription).then(newlot=>{
    expect(newlot.text().trim()).to.equals(message.backend.lotDescription)
   }) 
   helper.support(Backendlots.lotFields).then(newlot=>{
    expect(newlot.text().trim()).to.equals(message.backend.lotField)
   }) 
   helper.support(Backendlots.filteredFields).then(newlot=>{
    expect(newlot.text().trim()).to.equals(message.backend.lotFiltered)
   }) 
  })

  Then(/^I verify all error messages are display on lot form$/,()=>{

    helper.containsText(Backendlots.nameErrormsgLot.replace('\n\t',''),message.backend.titleErrormsg)
    helper.containsText(Backendlots.startDateLot.replace('\n\t',''),message.backend.startDateErromsg)
    helper.containsText(Backendlots.endDateLot.replace('\n\t',''),message.backend.endDateErromsg)
    helper.containsText(Backendlots.extendedDateLot.replace('\n\t',''),message.backend.extendedDateerromsg)
  })

 
  Then (/^I enter title field and dates$/,()=>{
    helper.enterText(Backendlots.lotTitle,message.backend.lotTile);
    helper.enterText(Backendlots.startDate,message.backend.startDate);
    helper.enterText(Backendlots.endDate,message.backend.endDate);
    helper.enterText(Backendlots.extendedDate,message.backend.endDate);
    })

  Then(/^I verify date error msg$/,()=>{  
    helper.support(Backendlots.dateErromsg).then(newlot=>{
    expect(newlot.text().trim()).to.equals(message.backend.DateErroeMsg)
   })
  })

  Then (/^I enter diffrent extended and end dates$/,()=>{
      helper.enterText(Backendlots.lotTitle,message.backend.lotTile);
      helper.enterText(Backendlots.startDate,message.backend.startDate);
      helper.enterText(Backendlots.endDate,message.backend.endDate);
      helper.enterText(Backendlots.extendedDate,message.backend.extendedDate);
  })

  Then(/^I verify extended date should not be more then end date$/,()=>{  
        helper.support(Backendlots.extendedDateerror).then(extendedsamewithenddate=>{
         expect(extendedsamewithenddate.text().trim()).to.equals(message.backend.extendedDateMorethenendDate)
       })
  })
      
  Then (/^I enter data to check lower should not be more the higher estimate$/,()=>{
        helper.enterText(Backendlots.lotTitle,message.backend.lotTile);
        helper.enterText(Backendlots.startDate,message.backend.startDate);
        helper.enterText(Backendlots.endDate,message.backend.endDate);
        helper.enterText(Backendlots.extendedDate,message.backend.endDate);
        helper.enterText(Backendlots.lowerestimate,message.backend.lowerestimate);
        helper.enterText(Backendlots.higherestimate,message.backend.higestestimate);
  })
  
  Then(/^select the perticulate created auction$/, () => {
     helper.enterText(Backendlots.lotTitle,details.dryrun.lotname1);
     cy.get(Backendlots.selectAuction).click({force:true});
     helper.enterText(Backendlots.searchauctionlotform,details.dryrun.auctionName);
     helper.clickOnButton(Backendlots.searchauctionlot);
     })

  Then(/^I enter all mandotary field with auction related dates$/, () => {

     let startDateTime;
     let endDateTime;
     
     cy.readFile(filePath).then((data) => {
          cy.log(filePath+'filepath fo lot creation');
          startDateTime = moment(data.startDateTime).format("YYYY-MM-DD HH:mm");
          endDateTime = moment(data.endDateTime).format("YYYY-MM-DD HH:mm");
          cy.wrap(startDateTime).as('startDateTime');
          cy.wrap(endDateTime).as('endDateTime');
      
     });
     for (let i = 1; i < 7; i++) {
      
     let lotname = 'lotname'+i;
     let artistname='artist'+i;
     let lotImage ='lotImage'+i;
     let higestestimate ='higestestimate'+i;
     let lowerestimate ='lowerestimate'+i;
     let startPrice ='startPrice'+i;
     let reservePrice ='reservePrice'+i;
     let lotDescription ='lotDescription'+i;
     let DateofArtwork ='DateofArtwork'+i;
     let Signature ='Signature'+i;
     let Height='Height'+i;
     let Width='Width'+i;
     let YearofArtwork ='YearofArtwork'+i;
     let Medium ='Medium'+i;

     helper.enterText(Backendlots.lotTitle,details.dryrun[lotname]);
     cy.get(Backendlots.selectAuction).click({force:true});
     helper.enterText(Backendlots.searchauctionlotform,details.dryrun.auctionName);
     helper.clickOnButton(Backendlots.searchauctionlot);

     cy.get(Backendlots.selectartist).click({force:true});
     helper.enterText(Backendlots.searchartistlotform,details.dryrun[artistname]);
     cy.get(Backendlots.selectsearchartist).scrollIntoView().click();

     helper.clickOnButton(Backendlots.selectImage);
     helper.support(Backendlots.image).clear();
     helper.support(Backendlots.image).type(details.dryrun[lotImage]);
     helper.clickOnButton(Backendlots.savemodulePopup);

     helper.enterText(Backendlots.startPrice,details.dryrun[startPrice]);
     helper.enterText(Backendlots.reservePrice,details.dryrun[reservePrice]);
     helper.enterText(Backendlots.lowerestimate,details.dryrun[lowerestimate]);
     helper.enterText(Backendlots.higherestimate,details.dryrun[higestestimate]);  

     cy.get('@startDateTime').then((startDateTime) => {
          cy.log(startDateTime + ' Value of startDateTime');
          helper.enterText(Backendlots.startDate, startDateTime);         
        });
     cy.get('@endDateTime').then((endDateTime) => {
          cy.log(endDateTime + ' Value of startDateTime');
          helper.enterText(Backendlots.endDate, endDateTime); 
          helper.enterText(Backendlots.extendedDate,endDateTime);        
        });
     helper.enterText(Backendlots.lotnumtxtbox,i);
     helper.clickOnButton(Backendlots.ishighlight);
     helper.clickOnButton(Backendlots.descriptiontab);
     helper.clickOnButton(Backendlots.toggle);
     helper.enterText(Backendlots.lotDescriptionField,details.dryrun[lotDescription]);
     helper.clickOnButton(Backendlots.fieldstab);
     helper.enterText(Backendlots.DateofArtwork,details.dryrun[DateofArtwork]);
     helper.enterText(Backendlots.Signature,details.dryrun[Signature]);
     helper.enterText(Backendlots.setoflot,details.dryrun.setof);
          if (i===1){
          helper.clickOnButton(Backendlots.clickatplus);
          }
     cy.get(Backendlots.Height).clear();
     helper.enterText(Backendlots.Height,details.dryrun[Height]);
     cy.get(Backendlots.Width).clear();
     helper.enterText(Backendlots.Width,details.dryrun[Width]);
     helper.clickOnButton(Backendlots.filterstab);
     helper.enterText(Backendlots.YearofArtwork,details.dryrun[YearofArtwork]);
     helper.enterText(Backendlots.Medium,details.dryrun[Medium]);
     helper.clickOnButton(Backendlots.dryrunSaveNew);
     }
     });

      Then(/^I enter all mandotary field$/, () => {
      helper.enterText(Backendlots.lotTitle,details.backendlotcreation.title);
      cy.get(Backendlots.selectAuction).click({force:true});
      helper.enterText(Backendlots.searchauctionlotform,details.backendlotcreation.option);
      helper.clickOnButton(Backendlots.searchauctionlot);
      helper.clickOnButton(Backendlots.selectImage);
      helper.support(Backendlots.image).type(details.backendlotcreation.lotImage);
      helper.clickOnButton(Backendlots.savemodulePopup);
      helper.enterText(Backendlots.lowerestimate,message.backend.higestestimate);
      helper.enterText(Backendlots.higherestimate,message.backend.lowerestimate);
      helper.enterText(Backendlots.lowerestimateusd,message.backend.lowerestimateusd);
      helper.enterText(Backendlots.higestestimateusd,message.backend.higestestimateusd);
      helper.enterText(Backendlots.startDate,details.backendlotcreation.startdate);
      helper.enterText(Backendlots.endDate,details.backendlotcreation.enddate);
      helper.enterText(Backendlots.extendedDate,details.backendlotcreation.extenddate);
      helper.enterText(Backendlots.lotnumtxtbox,details.backendlotcreation.lotnum);
      helper.clickOnButton(Backendlots.ishighlight);
      helper.clickOnButton(Backendlots.fieldstab);
      helper.enterText(Backendlots.lotsubtitlelot,details.backendlotcreation.lotsubtitle);
      helper.enterText(Backendlots.setoflot,details.backendlotcreation.setof);
      });

  Then(/^I verify lower should not be more the higher estimate$/,()=>{  
        helper.support(Backendlots.lowershouldbesmall).then(lowershouldbesmall=>{
        expect(lowershouldbesmall.text().trim()).to.equals(message.backend.lowershouldbesmall)
       })
  })

  Then(/^I search auction by Search field on lot$/,()=>{
        helper.enterText(Backendlots.searchauctiononlot,details.backendauccreation.auctionnamesearch);
        helper.clickOnButton(Backendlots.searchsymbollot)
  })

  Then(/^I verify search tool options on lot$/,()=>{
        helper.containsText(Backendlots.searchtoollot,message.backend.searchtool);
        helper.clickOnButton(Backendlots.searchtoollot);
        helper.containsText(Backendlots.selectauctintitle,message.backend.selecttitle);
        helper.containsText(Backendlots.statelot,message.backend.state);
        helper.containsText(Backendlots.selectlotstatuslot,message.backend.selectlotstatus);
        helper.clickOnButton(Backendlots.searchtoollot);
  })

  Then(/^I select auction title from Select Auction Title dropdown on lot$/,()=>{
        cy.get(Backendlots.searchtoollot).click({force:true}).click();
        helper.clickOnButton(Backendlots.selectauctintitledropdwn);
        helper.enterText(Backendlots.searchauctiontitle,details.backendauccreation.auctionnamesearch)
        helper.clickOnButton(Backendlots.searchauctionlot);
        helper.containsText(Backendlots.searchauctionlotresults,message.backend.searchauction);  
  })

  Then(/^I click on Searchtool on lot$/,()=>{
      cy.get(Backendlots.searchtoollot).click({force:true}).click();
  })

  Then(/^I click on '([^"]*)' menu on the State dropdown on lot and check it open the correct page$/,async(redirectstate:string)=>{
      lotbackend.verifystate(redirectstate);
  })

  Then(/^I click on '([^"]*)' menu on the Lot Status dropdown on lot and check it open the correct page$/,async(redirectlotstatus:string)=>{
      lotbackend.verifylotstatus(redirectlotstatus)
  })

  Then(/^I clear search result when click on Clear button on lot$/,()=>{
      helper.enterText(Backendlots.searchauctiononlot,details.backendauccreation.auctionnamesearch);
      helper.clickOnButton(Backendlots.clearbtnlot);
  })

  Then(/^I Click at Save button on lot form$/,()=>{
       helper.clickOnButton(Backendlots.savebtnlot);
       helper.support(Backendlots.alertmsglot).then(lotsavemsg=>{
          expect(lotsavemsg.text().trim()).to.equals(message.backend.lotsavedmsg);
     })
  })

  Then(/^I search lot by Search field on lot$/,()=>{
       helper.enterText(Backendlots.searchauctiononlot,details.backendlotcreation.searchlot);
       helper.clickOnButton(Backendlots.searchsymbollot);     
  })

  Then(/^I click on search lot name$/,()=>{
       helper.clickIfVisible(Backendlots.searchlotclick);
  })

  Then(/^I click on Save and Close button on lot form$/,()=>{
     helper.xpath(Backendlots.saveclostlot).click();
  })

  Then(/^I verfiy success message display on the lot form$/,()=>{
       helper.containsText(Backendlots.alertmsglot,message.backend.lotsavedmsg);
  })

  Then(/^I click on Save and New button on lot form$/,()=>{
       helper.xpath(Backendlots.savenewlot).click();
  }) 

  Then(/^I verfiy success message display on the lot form$/,()=>{
       helper.containsText(Backendlots.alertmsglot,message.backend.lotsavedmsg);
  })

  Then(/^I click on Close button on lot form$/,()=>{
       helper.xpath(Backendlots.closelot).click();
  })

  Then(/^I click on Trash button for trash lot$/,()=>{
    helper.enterText(Backendlots.searchauctiononlot,details.backendlotcreation.searchlot);
    helper.clickOnButton(Backendlots.searchsymbollot);   
    cy.get(Backendlots.lotchkbox).check();
    helper.clickOnButton(Backendlots.trashbtnlot);
    helper.containsText(Backendlots.alertmsglot,message.backend.lottrash);
  })
