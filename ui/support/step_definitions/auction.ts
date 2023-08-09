import { When,Then} from 'cypress-cucumber-preprocessor/steps';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import { Viewallauctions,OpenforConsignment,ClosedforConsignment, AuctionHighlights, CatelogueUploaded, PrivatePreview,CommonChecks, AuctionResults, AbsenteeBidCloseLotList, AbsenteeBidOpen, AbsenteeBidOpenlotdetails, MyLots, AbsenteeBidCloseMyLot, AbsenteeBidCloseViewDetails,liveauction,YOPmail } from '../../locators/objectsRepository';
import message from '../../fixtures/message.json';
import * as details from '../../fixtures/backendauctiondetails.json';
import * as domain from '../../fixtures/domains.json';

const helper = new Helper();

Then(/^I see all auction in grid view which is already selected on auction page$/,() =>{
    helper.clickOnButton(Viewallauctions.auctionlistview)
    helper.support(Viewallauctions.title).then(title=>{
      expect(title.text().trim()).to.equals(message.auctionHeader.title)
      })
    helper.clickOnButton(Viewallauctions.auctiongridview)
});

When(/^I click on list view for auction then auction should be display in list view on auction page$/, () =>{
    helper.clickOnButton(Viewallauctions.auctionlistview);
    helper.support(Viewallauctions.title).then(title=>{
    expect(title.text().trim()).to.equals(message.auctionHeader.title)
    })
  });

When(/^I click on auction number '([^"]*)' then related lots get open on auction page$/, (auctionNumber:string) =>{
      auctionNumber=Viewallauctions.auction_name.replace('{auctionNumber}',`D&I.${auctionNumber}`);
      helper.clickOnButton(auctionNumber);
  });

When(/^I click on View Details for lot number '([^"]*)' then lot description get open on auction page$/, (lotNumber:string) =>{
    helper.clickOnButton(Viewallauctions.viewdetailslot.replace('{lotNumber}',lotNumber));
});

When(/^I click on Save to my auction for auction number '([^"]*)' then auction get saved on auction page$/, (auctionNumber:string) =>{
   auctionNumber=Viewallauctions.saveauctionxpath.replace('{auctionNumber}',`D&I.${auctionNumber}`);
   helper.xpath(auctionNumber).should(CommonChecks.beVisible).eq(0).click();
});

Then(/^I see View My Auction button available on auction page$/,() =>{
    helper.support(Viewallauctions.viewmyauction).then(msg=>{
      expect(msg.text().trim()).to.equals(message.auctionHeader.viewmyauctions)
    })
});

When(/^I click on View My Auction button on auction page$/, () =>{
  helper.clickOnButton(Viewallauctions.viewmyauction);
})

When(/^I see auction number '([^"]*)' available on auction page$/,(auctionNumber:string) =>{
  auctionNumber=Viewallauctions.auctionname.replace('{auctionNumber}',`D&I.${auctionNumber}`);
})

When(/^I click on lot number '([^"]*)' and Save to Lots then lots get saved on auction page$/, (lotNumber) =>{
    helper.support(Viewallauctions.lotTitle.replace('{lotnumber}',lotNumber)).then(lot=>{
    globalThis.lotTitle=lot.text()
    helper.forceclick(Viewallauctions.savelot);
    })    
  })

Then(/^I see View My lots button available on auction page$/, () =>{
   helper.support(Viewallauctions.viewmylots).then(msg=>{
    expect(msg.text().trim()).to.equals(message.auctionHeader.viewmylots)
   })
});

When(/^I click on View My lots button on auction page$/, () =>{
 helper.clickOnButton(Viewallauctions.viewmylots);
});

When(/^I see lots number '([^"]*)' available on auction page$/, () =>{
  helper.support(Viewallauctions.selectauctionviewall).select('345',{force:true}).invoke("val").should('eq','345')
  helper.support(Viewallauctions.lotname).then(msg=>{  
  expect(msg.text().trim()).to.equals(message.auctionHeader.lotname.trim())
      cy.log(globalThis.lotTitle)  
  })
});

When(/^I select auction number '([^"]*)' from auction details page$/, (auctionNumber:string) =>{
   auctionNumber=Viewallauctions.auctionname.replace('{auctionNumber}',`D&I.${auctionNumber}`)
   helper.clickOnButton(auctionNumber);
});

Then(/^I see the auction number '([^"]*)' available in 'Open For Consignment' stage in auction page$/, (auctionNumber:string) =>{
    helper.xpath(OpenforConsignment.openconsignment.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)   
});

Then(/^I click on auction number '([^"]*)' and unable to see lot in 'Open For Consignment' stage and see Open For Consignment text in auction page$/, (auctionNumber:string) =>{
   auctionNumber=Viewallauctions.auctionname.replace('{auctionNumber}',`D&I.${auctionNumber}`);
   cy.get(auctionNumber).scrollIntoView();
   helper.forceclick(auctionNumber)
     helper.support(OpenforConsignment.OpenforConsignmenttext).then(consignment=>{
     expect(consignment.text().trim()).to.equals(message.auctionHeader.openconsignment)
     })
})

When(/^I click on Save to my auction for auction number '([^"]*)' of open for consignment stage then auction get saved on auction page$/, (auctionNumber:string) =>{
  auctionNumber=OpenforConsignment.saveauctionconsign.replace('{auctionNumber}',`D&I.${auctionNumber}`);
  helper.xpath(auctionNumber).should(CommonChecks.beVisible).eq(0).click();
})

Then(/^I see the auction number '([^"]*)' available in 'Closed for Consignment' stage in auction page$/ ,(auctionNumber:string) =>{
     helper.xpath(ClosedforConsignment.closeconsignment.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)
})

Then(/^I click on auction number '([^"]*)' and unable to see lot in 'Closed for Consignment' stage and see Closed for Consignment text in auction page$/, (auctionNumber:string) =>{
  auctionNumber=Viewallauctions.auctionname.replace('{auctionNumber}',`D&I.${auctionNumber}`);
  
  helper.clickOnButton(auctionNumber)

  helper.support(ClosedforConsignment.ClosedforConsignmenttext).then(closeconsignment=>{
   expect(closeconsignment.text().trim()).to.equals(message.auctionHeader.closeconsignment)
  })
})

When(/^I click on Save to my auction for auction number '([^"]*)' of closed for consignment stage then auction get saved on auction page$/, (auctionNumber:string)=>{
  auctionNumber=ClosedforConsignment.saveauctioncloseconsign.replace('{auctionNumber}',`D&I.${auctionNumber}`);
  helper.xpath(auctionNumber).should(CommonChecks.beVisible).eq(0).click();
})

Then(/^I see the auction number '([^"]*)' available in 'Auction Highlights' stage in auction page$/, (auctionNumber:string)=>{
    helper.xpath(AuctionHighlights.auctionhighlights.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)  
})

Then(/^I click on auction number '([^"]*)' and unable to see lot in 'Auction Highlights' stage and see Auction Highlights text in auction page$/, (auctionNumber:string)=>{
     auctionNumber=Viewallauctions.auctionname.replace('{auctionNumber}',`D&I.${auctionNumber}`);
     helper.clickOnButton(auctionNumber);

     helper.support(AuctionHighlights.auctionhighlightstext).then(auchighlighttext=>{
      expect(auchighlighttext.text().trim()).to.equals(message.auctionHeader.auctionhighlights)
     })
})

Then(/^I click on Save to my auction for auction number '([^"]*)' of Auction Highlights stage then auction get saved on auction page$/,(auctionNumber)=>{
  auctionNumber=AuctionHighlights.saveauctionhighlight.replace('{auctionNumber}',`D&I.${auctionNumber}`);
  helper.xpath(auctionNumber).should(CommonChecks.beVisible).eq(0).click();
})

When(/^I check availability of Highlights tab in auction page$/, ()=>{
    helper.support(AuctionHighlights.highlightstext).then(highlighttext=>{
      expect(highlighttext.text().trim()).to.equals(message.auctionHeader.highlights)
    })
})

Then(/^I see the auction number '([^"]*)' available in 'Catelogue Uploaded' stage in auction page$/, (auctionNumber:string)=>{
     helper.xpath(CatelogueUploaded.catelogueuploaded.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)
})

Then(/^I click on auction number '([^"]*)' and able to see lot in 'Catelogue Uploaded' stage and see Catelogue Uploaded text in auction page$/, (auctionNumber:string)=>{
     auctionNumber=Viewallauctions.auctionname.replace('{auctionNumber}',`D&I.${auctionNumber}`)
     helper.clickOnButton(auctionNumber)

     helper.support(CatelogueUploaded.catelogueuploaded1).then(catelogueupload=>{
     expect(catelogueupload.text().trim()).to.equals(message.auctionHeader.catalogueuploaded)
   })
})

Then(/^I click at lot tab$/, () => {
      helper.clickOnButton(AuctionResults.lotTab);
     
   })

Then(/^I verify on lot list page all caption which are added from backend for lot number '([^"]*)'$/, (lotNumber:string) => {
     
     helper.support(liveauction.liveStatus).then(buttonname=>{
          const mytext = helper.getText(buttonname)
          cy.log(mytext);
            if (mytext === 'Auction Live') 
            {
               helper.verifyText(CatelogueUploaded.auctionStartIn,details.dryrun.auctionEndIn);
            }else {
               helper.verifyText(CatelogueUploaded.auctionStartIn,details.dryrun.auctionStartIn);
            }
          })     
     helper.verifyText(CatelogueUploaded.closingSchedule, details.dryrun.closingScheduleTab);
     helper.support(CatelogueUploaded.lotNo.replace('{lotNumber}',lotNumber)).then(lotnum=>{
          globalThis.lotnumber= lotnum.text();
          cy.log(globalThis.lotnumber);
     });
     helper.support(CatelogueUploaded.viewDetails.replace('{lotNumber}',lotNumber)).then(viewdetail=>{
          globalThis.viewDetail= viewdetail.text();
          cy.log(globalThis.viewDetail);
     });
     helper.support(CatelogueUploaded.artistname.replace('{lotNumber}',lotNumber)).then(artname=>{
          globalThis.nameartist= artname.text();
          cy.log(globalThis.nameartist);
     });
     helper.support(CatelogueUploaded.mediamDate.replace('{lotNumber}',lotNumber)).then(date=>{
          globalThis.meddate= date.text();
          cy.log(globalThis.meddate);
     });
        helper.support(CatelogueUploaded.size.replace('{lotNumber}',lotNumber)).then(size=>{
          globalThis.sizenum= size.text();
          cy.log(globalThis.sizenum);
     });
     helper.support(CatelogueUploaded.extension.replace('{lotNumber}',lotNumber)).then(estimate=>{
          globalThis.estimatetxt= estimate.text();
          cy.log(globalThis.estimatetxt);
     });
     helper.support(CatelogueUploaded.rs.replace('{lotNumber}',lotNumber)).then(rsestimate=>{
          globalThis.rupee= rsestimate.text();
          cy.log(globalThis.rupee);
     });
     helper.support(CatelogueUploaded.dollar.replace('{lotNumber}',lotNumber)).then(dollarestimate=>{
          globalThis.dollaresti= dollarestimate.text();
          cy.log(globalThis.dollaresti);
     });
     helper.support(CatelogueUploaded.gdp.replace('{lotNumber}',lotNumber)).then(gbpestimate=>{
          globalThis.gbpesti= gbpestimate.text();
          cy.log(globalThis.gbpesti);
     });
   })

   Then(/^I verify on lot list page all caption which are added from backend for lot number in result stage '([^"]*)'$/, (lotNumber:string) => {
     
     helper.verifyText(CatelogueUploaded.closingonResult, details.dryrun.closingScheduleTab);
     helper.support(CatelogueUploaded.lotNo.replace('{lotNumber}',lotNumber)).then(lotnum=>{
          globalThis.lotnumber= lotnum.text();
          cy.log(globalThis.lotnumber);
     });
     helper.support(CatelogueUploaded.viewDetails.replace('{lotNumber}',lotNumber)).then(viewdetail=>{
          globalThis.viewDetail= viewdetail.text();
          cy.log(globalThis.viewDetail);
     });
     helper.support(CatelogueUploaded.artistname.replace('{lotNumber}',lotNumber)).then(artname=>{
          globalThis.nameartist= artname.text();
          cy.log(globalThis.nameartist);
     });
     helper.support(CatelogueUploaded.mediamDate.replace('{lotNumber}',lotNumber)).then(date=>{
          globalThis.meddate= date.text();
          cy.log(globalThis.meddate);
     });
        helper.support(CatelogueUploaded.size.replace('{lotNumber}',lotNumber)).then(size=>{
          globalThis.sizenum= size.text();
          cy.log(globalThis.sizenum);
     });
     helper.support(CatelogueUploaded.rupeeOnResult.replace('{lotNumber}',lotNumber)).then(estimate=>{
          globalThis.estimatetxt= estimate.text();
          cy.log(globalThis.estimatetxt);
     });
     helper.support(CatelogueUploaded.dollarOnResult.replace('{lotNumber}',lotNumber)).then(dollarOnResultPage=>{
          globalThis.dollarOnResult= dollarOnResultPage.text();
          cy.log(globalThis.dollarOnResult);
     });
     helper.support(CatelogueUploaded.gdpOnResult.replace('{lotNumber}',lotNumber)).then(gdpOnResultPage=>{
          globalThis.gdpOnResult= gdpOnResultPage.text();
          cy.log(globalThis.gdpOnResult);
     });
     helper.support(CatelogueUploaded.resultWin.replace('{lotNumber}',lotNumber)).then(resultWinOnresultPage=>{
          globalThis.resultWin= resultWinOnresultPage.text();
          cy.log(globalThis.resultWin);
     });
     helper.support(CatelogueUploaded.resultSold.replace('{lotNumber}',lotNumber)).then(resultSoldOnresultPage=>{
          globalThis.resultSold= resultSoldOnresultPage.text();
          cy.log(globalThis.resultSold);
     });
   })

   Then(/^I verify on lot list page all buttons for live stage lot number '([^"]*)'$/, (lotNumber:string) => {
     
       helper.support(CatelogueUploaded.bidnowbutton.replace('{lotNumber}',lotNumber)).then(gbpestimate=>{
          globalThis.bidnowbutton= gbpestimate.text();
          cy.log(globalThis.bidnowbutton);
     });
   })

   Then(/^I verify on lot list page all caption which are added from backend on absentee bid open stage for lot number '([^"]*)'$/, (lotNumber:string) => {
        helper.support(CatelogueUploaded.nextAbsenteeBid.replace('{lotNumber}',lotNumber)).then(viewdetail=>{
          globalThis.viewDetail= viewdetail.text();
          cy.log(globalThis.viewDetail);
     });
     helper.support(CatelogueUploaded.abseneteeBidButton.replace('{lotNumber}',lotNumber)).then(viewdetail=>{
          globalThis.viewDetail= viewdetail.text();
          cy.log(globalThis.viewDetail);
     });

   })


   Then(/^I click on View Details link at lot no '([^"]*)'$/, (lotNumber:string) => {
     lotNumber = CatelogueUploaded.viewDetails.replace('{lotNumber}',lotNumber)
     helper.clickOnButton(lotNumber)
   })

   Then(/^I verify the captions on detail page$/, () => {
     helper.isVisible(CatelogueUploaded.imageOnDetail);
     // helper.isVisible(CatelogueUploaded.saveButton);
     helper.isVisible(CatelogueUploaded.previousbutton);
     helper.isVisible(CatelogueUploaded.nextbutton);
     helper.isVisible(CatelogueUploaded.breadcrum);
     helper.verifyText(CatelogueUploaded.lotTileDetail,details.dryrun.lotname);
     helper.verifyText(CatelogueUploaded.lotnoDetail, details.dryrun.lotnumber.trim());
     helper.verifyText(CatelogueUploaded.artistnameDetails, details.dryrun.artistname);
     helper.verifyText(CatelogueUploaded.mediamDateDetail,details.dryrun.MediamDatetitle);
     helper.verifyText(CatelogueUploaded.mediamDateDetailPage,details.dryrun.MediamDate.trim());
     helper.verifyText(CatelogueUploaded.signaturetitle,details.dryrun.signaturetitle.trim());
     helper.verifyText(CatelogueUploaded.signatureValue,details.dryrun.Signature1.trim());
     helper.verifyText(CatelogueUploaded.sizeTitle,details.dryrun.sizeTitle.trim());
     helper.verifyText(CatelogueUploaded.sizeValue,details.dryrun.size);
     helper.verifyText(CatelogueUploaded.estimateTitle,details.dryrun.extension.trim());
     helper.verifyText(CatelogueUploaded.estimaterupee,details.dryrun.rs);
     helper.verifyText(CatelogueUploaded.estimatedoller,details.dryrun.dollar);
     helper.verifyText(CatelogueUploaded.estimategdp,details.dryrun.gdp);     
     
   })

   Then(/^I verify the captions on detail page on result page$/, () => {
     helper.isVisible(CatelogueUploaded.imageOnDetail);
     helper.isVisible(CatelogueUploaded.previousbutton);
     helper.isVisible(CatelogueUploaded.nextbutton);
     helper.isVisible(CatelogueUploaded.breadcrum);
     helper.verifyText(CatelogueUploaded.lotTileDetail,details.dryrun.lotname);
     helper.verifyText(CatelogueUploaded.lotnoDetail, details.dryrun.lotnumber.trim());
     helper.verifyText(CatelogueUploaded.artistnameDetails, details.dryrun.artistname);
     helper.verifyText(CatelogueUploaded.mediamDateDetail,details.dryrun.MediamDatetitle);
     helper.verifyText(CatelogueUploaded.mediamDateDetailPage,details.dryrun.MediamDate.trim());
     helper.verifyText(CatelogueUploaded.signaturetitle,details.dryrun.signaturetitle.trim());
     helper.verifyText(CatelogueUploaded.signatureValue,details.dryrun.Signature1.trim());
     helper.verifyText(CatelogueUploaded.sizeTitle,details.dryrun.sizeTitle.trim());
     helper.verifyText(CatelogueUploaded.sizeValue,details.dryrun.size);
     helper.verifyText(CatelogueUploaded.winResult,details.dryrun.winResult);
     helper.verifyText(CatelogueUploaded.winPrice,details.dryrun.winPrice);
     helper.verifyText(CatelogueUploaded.soldStatus,details.dryrun.soldStatus);
   })

   Then(/^I check all captions on result tab$/, () => {

     helper.verifyText(CatelogueUploaded.closingonResult, details.dryrun.closingScheduleTab);
     helper.isVisible(AuctionResults.printButton);
     helper.isVisible(AuctionResults.assumingGBP);
     helper.isVisible(AuctionResults.assumingUS);   
     helper.isVisible(AuctionResults.totalsaleResult);
     helper.isVisible(AuctionResults.lotsSold);
     helper.verifyText(AuctionResults.lotsoldPercent,details.dryrun.lotsoldPercent);
     helper.isVisible(AuctionResults.listviewlotresult);
     helper.isVisible(AuctionResults.resultLotImage);
     helper.isVisible(AuctionResults.lotNumber);
     helper.isVisible(AuctionResults.artistname);
     helper.isVisible(AuctionResults.auctionName);
     helper.isVisible(AuctionResults.estimates);
     helper.isVisible(AuctionResults.estimaterupee);
     helper.isVisible(AuctionResults.estimatedo);
     helper.isVisible(AuctionResults.estimategdp);
     helper.isVisible(AuctionResults.winner);
     helper.isVisible(AuctionResults.sold);     
   })

   Then(/^I verify the captions on detail page buttons on absentee bid open stage$/, () => {
     helper.isVisible(CatelogueUploaded.nextAbsenteeBidDetail);
     helper.isVisible(CatelogueUploaded.abseneteeBidButtonDetail); 
     
   })
  
Then(/^I click on Save to my auction for auction number '([^"]*)' of Catelogue Uploaded stage then auction get saved on auction page$/,(auctionNumber)=>{
     auctionNumber=CatelogueUploaded.saveauctionCatelogueUploaded.replace('{auctionNumber}',`D&I.${auctionNumber}`)
     helper.xpath(auctionNumber).should(CommonChecks.beVisible).eq(0).click();
})

Then(/^I see the auction number '([^"]*)' available in 'Private Preview' stage in auction page$/, (auctionNumber:string)=>{
     helper.xpath(PrivatePreview.privatepreview.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)  
})

Then(/^I click on auction number '([^"]*)' and able to see lot in 'Private Preview' stage and see Private Preview text in auction page$/, (auctionNumber:string)=>{
     auctionNumber=Viewallauctions.auctionname.replace('{auctionNumber}',`D&I.${auctionNumber}`)
     helper.clickOnButton(auctionNumber)

     helper.support(PrivatePreview.privatepreview1).then(privatepri=>{
      expect(privatepri.text().trim()).to.equals(message.auctionHeader.privatepreview)
     })
})

Then(/^I click on Save to my auction for auction number '([^"]*)' of Private Preview stage then auction get saved on auction page$/,(auctionNumber)=>{
     auctionNumber=PrivatePreview.saveauctionPrivatePreview.replace('{auctionNumber}',`D&I.${auctionNumber}`)
     helper.xpath(auctionNumber).should(CommonChecks.beVisible).eq(0).click();
})

Then(/^I see the auction number '([^"]*)' available in 'Auction Results' stage in auction page$/, (auctionNumber:string)=>{
     helper.xpath(AuctionResults.auctionresults.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)
})

Then(/^I see the auction number '([^"]*)' available in 'Absentee Bidding Closed' stage in auction page$/, (auctionNumber:string)=>{
     helper.xpath(AbsenteeBidCloseLotList.absenteeBidClose.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)
})

Then(/^I see the auction number '([^"]*)' available in 'Auction Live' stage in auction page$/,(auctionNumber:string)=>{
     helper.xpath(AbsenteeBidOpen.auctionlive.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)
 })

Then(/^I click on auction number '([^"]*)' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page$/, (auctionNumber:string)=>{
     auctionNumber=Viewallauctions.auctionname.replace('{auctionNumber}',`D&I.${auctionNumber}`)
     helper.clickOnButton(auctionNumber)

    helper.support(AbsenteeBidCloseLotList.absenteeBidClose1).then(absenteebidtext=>{
      expect(absenteebidtext.text().trim()).to.equals(message.absenteebidclose.absenteeclosebid)
    })
})

Then(/^I click on Save to my auction for auction number '([^"]*)' of Absentee Bidding Closed stage then auction get saved on auction page$/,(auctionNumber)=>{
  auctionNumber=AbsenteeBidCloseLotList.saveabsenteebidclose.replace('{auctionNumber}',`D&I.${auctionNumber}`);
  helper.xpath(auctionNumber).should(CommonChecks.beVisible).eq(0).click();
})

Then(/^I click on list view for lots then lots should be display in list view$/, ()=>{
    helper.clickOnButton(AuctionResults.listviewlotresult)
})

Then(/^I click on list view for lots then lots should be display in list view on auction page$/, ()=>{
     helper.clickOnButton(AbsenteeBidCloseLotList.listviewlotabsenteeclose)
}); 

Then(/^I click on Next Lot on auction page$/, ()=>{
  helper.clickOnButton(AbsenteeBidCloseLotList.nextlot)
})

Then(/^I click on lot number '([^"]*)' and Save to Lots then lots get saved on auction page$/,(lotNumber)=>{
  helper.support(AbsenteeBidCloseLotList.lotTitleabsenteebidclose.replace('{lotnumber}',lotNumber)).then(lot=>{
    globalThis.lotTitle=lot.text()
    helper.clickOnButton(AbsenteeBidCloseLotList.savelotabsenteebidclose.replace('{savelot}',lotNumber))
    })
})

Then(/^I see the auction number '([^"]*)' available in 'Absentee Bidding Open' stage in auction page$/,(auctionNumber:string)=>{
    helper.xpath(AbsenteeBidOpen.absenteeBidOpen.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)
})

Then(/^I see the auction number '([^"]*)' available in 'Absentee Bidding Close' stage in auction page$/,(auctionNumber:string)=>{
     helper.xpath(AbsenteeBidOpen.absenteeBidClose.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)
 })
Then(/^I see the auction number '([^"]*)' available in 'Catalogue Uploaded' stage in auction page$/,(auctionNumber:string)=>{
     helper.xpath(AbsenteeBidOpen.catelogeUploaded.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)
 })

 Then(/^I wait till the auction gets live$/, () => {
     const checkLiveStatus = () => {
          helper.support(liveauction.liveStatus).then(buttonname=>{
               const mytext = helper.getText(buttonname)
               cy.log(mytext);
                 if (mytext === 'Auction Live') 
                 {
                    cy.log('auction still live')
                    helper.openWebPage(domain.yopmail.url)
                    helper.enterText(YOPmail.search,'auto@yopmail.com')
                    helper.clickOnButton(YOPmail.arrow);             
               cy.iframe(YOPmail.bodyemail).find(YOPmail.auctionlive).should('be.visible').then(msg=>{
                    globalThis.auctionlivemessage=msg.text()
                    cy.log(globalThis.globalThis.auctionlivemessage)
                    })          
                 }
               
                 else{
              cy.log('Not live yet');
              const waitTime = 50000; // Wait for 50 seconds
              helper.waitFor(waitTime);
              checkLiveStatus();
           }
        })
     };
  
     checkLiveStatus();
  });

 Then(/^I verify auction is in cateloge uploaded stage$/,()=>{
     helper.isVisible(CatelogueUploaded.stageNameVarification)

})
Then(/^I see lot number '([^"]*)' have Register to bid button in place of place absentee bid button$/,(lotNumber)=>{ 
     helper.support(AbsenteeBidOpen.registertobidabsenteeopen.replace('{lotNumber}',lotNumber)).then(registerbidopen=>{
      expect(registerbidopen.text().trim()).to.equals(message.auctionHeader.resgistertobid)
     })   
})

Then(/^I click on Register to bid button for lot number '([^"]*)' and should redirect to register to bid form page$/,(lotNumber)=>{
     helper.clickOnButton(AbsenteeBidOpen.registertobidabsenteeopen.replace('{lotNumber}',lotNumber))
})

Then(/^I already have an account then click on login button and redirect to login page$/,()=>{
  helper.clickOnButton(AbsenteeBidOpen.loginlink)

})

Then(/^I click on auction number '([^"]*)' and able to see lot in 'Absentee Bidding Open' stage in auction page$/,(auctionNumber:string)=>{
    auctionNumber=Viewallauctions.auctionname.replace('{auctionNumber}',`D&I.${auctionNumber}`)
    helper.clickOnButton(auctionNumber)
})

Then(/^I click on list view for lots then lots should be display in list view on auction page$/,()=>{
  helper.clickOnButton(AbsenteeBidOpenlotdetails.lotlistview);
})

Then(/^I click on accept cookie button$/, async (button: string) => {
  helper.clickOnButton(Viewallauctions.cookiebuttonAccept, button);
})

Then(/^I click on toggle button then lot display in list view on auction page$/,()=>{
     helper.forceclick(AbsenteeBidCloseLotList.listviewlotabsenteeclose)
})

When(/^I click on View Details link for lot number '([^"]*)' then lot description get open on auction page$/, (lotNumber:string) =>{
     helper.clickOnButton(AbsenteeBidCloseViewDetails.lotdetails.replace('{lotNumber}',lotNumber));
});

Then(/^I verify Your Absentee Bid available for lot number '([^"]*)' on auction page$/,(lotNumber:string)=>{
     helper.support(AbsenteeBidCloseLotList.yourabsenteebid.replace('{lotNumber}',lotNumber)).then(absenteebid=>{
      expect(absenteebid.text().trim()).to.equals(message.absenteebidclose.yourabsenteebid);
     }); 
 })

Then(/^I verfiy absenteebid amount in rupee for lot number '([^"]*)' on auction page$/,(lotNumber:string)=>{
     helper.support(AbsenteeBidCloseLotList.rupeeamountlotlist.replace('{lotNumber}',lotNumber)).then(rupee=>{
          let text=helper.getText(rupee)
          expect(text).to.contains(message.absenteebidclose.rupeesymboldetails)
     })
})

Then(/^I verfiy absenteebid amount in dollar for lot number '([^"]*)' on auction page$/,(lotNumber:string)=>{
     helper.support(AbsenteeBidCloseLotList.dollaramountlotlist.replace('{lotNumber}',lotNumber)).then(dollar=>{
          let text=helper.getText(dollar)
          expect(text).to.contains(message.absenteebidclose.dollarsymboldetails)
     })
})

 Then(/^I see aution start time on right side top corner on auction page$/,()=>{
      helper.support(AbsenteeBidCloseLotList.auctionstarttime).then(auctionstart=>(
      expect(auctionstart.text().trim()).to.equals(message.absenteebidclose.auctionstarttime)
      ))
 })

 Then(/^I click on all lots filter then I see all lots shows on auction page$/,(lotNumber:string)=>{
      helper.clickOnButton(AbsenteeBidCloseLotList.alllots)
      helper.support(AbsenteeBidCloseLotList.alllots).then(lots=>{
        expect(lots.text().trim()).to.equals(message.absenteebidclose.alllots)
      }) 
 })

 Then(/^I check mylots filter selected on auction page$/,()=>{
  helper.clickOnButton(AbsenteeBidCloseLotList.mylotsfilter)
  helper.support(AbsenteeBidCloseLotList.savecolor)
  .should(CommonChecks.haveCss, CommonChecks.backgroundColor, message.absenteebidclose.savebuttoncolor)
 })
 
 Then(/^I check lots number '([^"]*)' available in My Lots filter on auction page$/,(lotNumber:string)=>{
      helper.forceclick(AbsenteeBidCloseLotList.mylotsfilter)
      helper.support(AbsenteeBidCloseLotList.lotnamemylotfilter.replace('{lotNumber}',lotNumber)).then(lotname=>{
      globalThis.lotTitle=lotname.text()
      cy.log(globalThis.lotTitle)
      })
   });

 Then(/^I enter number '([^"]*)' in Go to lot and click on arrow symbol$/,(lotNumber:string)=>{
      helper.support(AbsenteeBidCloseLotList.lotnamemylotfilter.replace('{lotNumber}',lotNumber))
      helper.enterText(AbsenteeBidCloseLotList.gotolot,lotNumber)
      helper.forceclick(AbsenteeBidCloseLotList.arrowsymbol)
 })

 Then(/^I Verify guest user able to see Register to bid button in absenteebidclose stage from lot list page$/,async()=>{
      helper.verifyText(AbsenteeBidCloseViewDetails.registertobid,message.absenteebidclose.registertobid)
 })

 Then(/^I click on Register to Bid button$/,()=>{
      helper.clickOnButton(AbsenteeBidCloseViewDetails.registertobid)
 })

 Then(/^I verify Your Absentee Bid section available on view details page$/,async()=>{
      helper.support(AbsenteeBidCloseViewDetails.yourabsenteebiddetails).then(absenteebidtext=>{
        expect(absenteebidtext.text().trim()).to.equals(message.absenteebidclose.yourabsenteebid)
      })
 })

 Then(/^I verfiy absenteebid amount in rupee on view details page$/,async ()=>{
     helper.support(AbsenteeBidCloseViewDetails.rupeeamount).then(rupeetext=>{
     let text=helper.getText(rupeetext)
     expect(text).to.contains(message.absenteebidclose.rupeesymboldetails)
  })
 })

 Then(/^I verfiy absenteebid amount in dollar on view details page$/,async()=>{
      helper.support(AbsenteeBidCloseViewDetails.dollaramount).then(dollartext=>{
      let text=helper.getText(dollartext)
      expect(text).to.contains(message.absenteebidclose.dollarsymboldetails)
      })
 })

 Then(/^I verify auction start time on view details page$/,async()=>{
    helper.support(AbsenteeBidCloseViewDetails.starttimedetails).then(start=>{
    let time=helper.getText(start)
    expect(time).to.contains(message.absenteebidclose.auctionstarttime)
    })
 })

 Then(/^I select auction name on select auction dropdown on mylots page$/,()=>{
      helper.support(Viewallauctions.selectauctionviewall).select('644',{force:true}).invoke("val").should('eq','644')
 })

 Then(/^I click on toggle button then lot display in list view on mylot page$/,()=>{
      helper.clickOnButton(MyLots.lotlistview)
 })

 Then(/^I verify Your Absentee Bid section available on mylot page$/,()=>{
      helper.support(AbsenteeBidCloseMyLot.yourabsenteebidmylot).then(mylot=>{
          expect(mylot.text().trim()).to.equals(message.absenteebidclose.yourabsenteebid)
      })
 })

 Then(/^I verify the self absentee bid for the superuser$/,()=>{
   helper.isVisible(AuctionResults.adminSelfabsentee)
     }) 

 Then(/^I verfiy absenteebid amount in rupee on mylot page$/,async()=>{
      helper.support(AbsenteeBidCloseMyLot.rupeeamountmylot).then(rupee=>{
          let amount=helper.getText(rupee)
          expect(amount).to.contains(message.absenteebidclose.rupeesymboldetails)
      })
 })

 Then(/^I verfiy absenteebid amount in dollar on mylot page$/,async()=>{
     helper.support(AbsenteeBidCloseMyLot.dollaramountmylot).then(dollar=>{
          let amount=helper.getText(dollar)
          expect(amount).to.contains(message.absenteebidclose.dollarsymboldetails)
     })
 })

 Then(/^I select auction name on select auction dropdown and click on Go to Auction button on mylots page$/,async()=>{
     helper.support(Viewallauctions.selectauctionviewall).select('644',{force:true}).invoke("val").should('eq','644')
     helper.support(AbsenteeBidCloseMyLot.gotoauctionmylot).then(gotolottext=>{
          expect(gotolottext.text().trim()).to.equals(message.absenteebidclose.gotoauctionmylots)
     })
     helper.clickOnButton(AbsenteeBidCloseMyLot.gotoauctionmylot)
 })

 Then(/^I click at lots tab$/,()=>{
     helper.clickOnButton(AuctionResults.lotTab)
})

 Then(/^I click on auction number '([^"]*)' and able to see lot in 'Auction Results' stage and see Auction Results text in auction page$/, (auctionNumber:string)=>{
     auctionNumber=Viewallauctions.auctionname.replace('{auctionNumber}',`D&I.${auctionNumber}`)
     helper.forceclick(auctionNumber)

     helper.support(AuctionResults.auctionresults1).then(auctionresults=>{
     expect(auctionresults.text().trim()).to.equals(message.auctionHeader.auctionresults)
   })
})

Then(/^I click on toggle button then lot display in list view of result on auction page$/,()=>{
     helper.clickOnButton(AuctionResults.listviewlotresult)
})

Then(/^I see Total Sale amount of lots in auctionresults page$/, (childnum:string)=>{

     helper.clickOnButton(AuctionResults.listviewlotresult)
          let sum=0 , saleamt;
      helper.support(AuctionResults.totalrow).then(row=>{
          console.log(row.length);
          
     for( let i=1;i<=row.length;i++){
          childnum=AuctionResults.price.replace('{i}',`${i}`)
              
               helper.support(childnum).then(pricetext=>{
                         let pricelot=helper.getText(pricetext) 
                         pricelot=pricelot.replace('₹','')
                         
                        if(pricelot !== 'Brought In'){
                         let total = parseFloat(pricelot.replace(/,/g, ''))
                         sum=sum+total
                           cy.log(`sum is ${sum}`)
                        }
                        else{
                         cy.log(`${i} ${pricelot}`)
                        }   
                    })
               }
})
               helper.support(AuctionResults.totalsale).then(saletext=>{
                    saleamt=helper.getText(saletext)
                    saleamt=saleamt.replace('₹','')
                    cy.log(`${saleamt}`)
                    let sale=parseFloat(saleamt.replace(/,/g,''))
                    cy.log(`${sale}`);
     
       expect(sum).to.equals(sale)
                    
               })
     helper.support(AuctionResults.totalsale).then(rupee=>{
          let amountrupee=helper.getText(rupee)
          expect(amountrupee).to.contains(message.absenteebidclose.rupeesymboldetails)
     })

     helper.support(AuctionResults.totalsaleusd).then(dollar=>{
          let amountdollar=helper.getText(dollar)
          expect(amountdollar).to.contains(message.absenteebidclose.dollarsymboldetails)
     })             
          })


Then(/^I see sold lots in auctionresults page$/,(childnum:string)=>{
     helper.clickOnButton(AuctionResults.listviewlotresult)
     let arr=[];
     
     helper.support(AuctionResults.totalrow).then(row=>{
          console.log(row.length);

     for(let k=1; k<=row.length; k++)
     {
          childnum=AuctionResults.sellprice.replace('{k}',`${k}`)
          
          helper.support(childnum).then(pricerow=>{
               let saleamount=helper.getText(pricerow)
               saleamount=saleamount.replace('₹','')

               if(saleamount!='Brought In'){
                    let amount=parseFloat(saleamount.replace(/,/g,''))
                    cy.log(`${amount}`)
                    arr.push(amount)
                    cy.log('arr value is '+arr)
               }
               var count=arr.length;
               cy.log('count is '+count)

               let lotsold;
               lotsold=count/row.length*100;

               cy.log('lot sold amount '+lotsold.toFixed(0)+'%')
               helper.support(AuctionResults.lotsoldpercent).then(lot=>{
                    let percent=helper.getText(lot)
                    expect(percent).to.contains(message.auctionresults.percentlotsold)
               })

               let lotsoldper=`${count} / ${row.length}`
               cy.log(lotsoldper)
               cy.log(lotsold.toFixed(0)+'%')
          })
     }
})
})

Then(/^I see top three selling price in auctionresults page$/,(childnum:string)=>{
          helper.clickOnButton(AuctionResults.listviewlotresult)
          let arr=[];
          
          helper.support(AuctionResults.totalrow).then(row=>{
               console.log(row.length);
          for(let k=1; k<=row.length; k++)
          {
             
               childnum=AuctionResults.sellprice.replace('{k}',`${k}`)
               helper.support(childnum).then(pricerow=>{
                    let saleamount=helper.getText(pricerow)
                    saleamount=saleamount.replace('₹','')
     
                    if(saleamount!='Brought In'){
                         let amount=parseFloat(saleamount.replace(/,/g,''))
                         cy.log(`${amount}`)
     
                         arr.push(amount)
                         cy.log('arr value is '+arr)
     
                         function findlargest3(){
                              arr.sort((a,b) => a<b ? 1: a>b? -1 : 0);
                              console.log(arr);
                              cy.log('Top 3 selling price is '+arr[0]+"\r\n"+arr[1]+"\r\n"+arr[2])
                         }
                         findlargest3();     
                    }
               })     
          }    
        
          helper.support(AuctionResults.toplot1).then(lot=>{
           let first=helper.getText(lot)
           first=first.replace('₹','')
           first=first.replace(/\,/g,'')
     
            expect(first).to.contains(arr[0])
            cy.log('first lot '+first)    
           })

         helper.support(AuctionResults.toplot2).then(lot=>{
          let second=helper.getText(lot)
          second=second.replace('₹','')
          second=second.replace(/\,/g,'')

          expect(second).to.contains(arr[1])
          cy.log('second lot '+second)
         })

        helper.support(AuctionResults.toplot3).then(lot=>{
         let third=helper.getText(lot)
         third=third.replace('₹','')
         third=third.replace(/\,/g,'')
          
         expect(third).to.contains(arr[2])
         cy.log('third lot '+third)    
         })    
     
     })
     })

     

