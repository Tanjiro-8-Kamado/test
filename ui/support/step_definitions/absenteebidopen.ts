import { When , Then } from "cypress-cucumber-preprocessor/steps";
import Helper from "../../../lib/ui/pageObjects/common/helper"; 
import { liveauction,LoginPage,Switchuser,Absenteebidopenstage,AbsenteeBidOpen,CommonChecks,YOPmail } from "../../locators/objectsRepository";
import Message from '../../fixtures/message.json';
import LogIn from '../../../lib/ui/pageObjects/auth/loginPage';
import user from '../../fixtures/accounts.json';

const helper = new Helper();
const logIn = new LogIn();

Then(/^I verify absenteebidopen stage is available in all auction page$/,(auctionNumber:string) => {
  helper.xpath(AbsenteeBidOpen.absenteeBidOpen.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)

  helper.support(AbsenteeBidOpen.absenteeBidOpen).then(message=>{
  expect(message.text().trim()).to.contains(Message.absentee.absenteebidstage.trim())
  });
  });

Then(/^I Verify guest user able to see Register to bid button in absenteebidopen stage from lot list page$/, async () => {
        helper.verifyText(Absenteebidopenstage.registerbutton, Message.auctionlive.guestbid);
      })   
      
When(/^I click on Register to bid button$/, async (button: string) => {
        helper.clickOnButton(Absenteebidopenstage.registerbutton, button);
      }) 

Then(/^I verify Estimates section is available in lot cart$/,()=>{
  helper.support(Absenteebidopenstage.estimatetext).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.absentee.estimate)
  })
});

Then(/^I verify Estimates amount in rupee is available on nextbid section in lot$/,()=>{
  helper.support(Absenteebidopenstage.estimaterupee).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.rupeesymbol)
  })
});  

Then(/^I verify Estimates amount in dollar is available on nextbid section in lot$/,()=>{
  helper.support(Absenteebidopenstage.estimatedollar).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.dollarsymbol)
  })
})
      
Then(/^I verify Starting bid text is available in starting bid amount section on lot cart$/, async () => {
        helper.support(Absenteebidopenstage.startingbidtext).then(text => {
          let mytext = helper.getText(text)
          expect(mytext).to.contains(Message.absentee.startingbid)
        })
      });

Then(/^I verify Starting bid amount available in rupee$/, async () => {
        helper.support(Absenteebidopenstage.startingbidsection).then(text => {
          let mytext = helper.getText(text)
          expect(mytext).to.contains(Message.auctionlive.rupeesymbol)
        })
      });  
      
Then(/^I verify Starting bid amount available in dollar$/, async () => {
        helper.support(Absenteebidopenstage.startingbidsection).then(text => {
          let mytext = helper.getText(text)
          expect(mytext).to.contains(Message.auctionlive.dollarsymbol)
        })
      });   
      
Then(/^I Verify bidder user able to see 'Place Absentee Bid' button for lot number '([^"]*)' in grid view of lot list page$/, (lotNumber : string) => {
     cy.get('body').then(body => {
      if(body.find(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber)).length > 0){
        cy.get(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber))
      }
      else{
        helper.clickOnButton(Absenteebidopenstage.deletebid.replace('{lotNumber}',lotNumber))
        helper.waitFor(3000)
        cy.get(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber))
          }
    })
})

Then(/^I Verify user able to increase amount by clicking up-arrow button$/, async (text: String) => {
   helper.support(Absenteebidopenstage.bidvalue).then(message => {
    globalThis.startvalue = helper.getText(message)
    cy.log(globalThis.startvalue)
       })

     helper.clickOnButton(Absenteebidopenstage.incrementbutton)
     helper.support(Absenteebidopenstage.bidvalue).then(message => {
      globalThis.increasedvalue = helper.getText(message)
      cy.log(globalThis.increasedvalue)
       })

      if(globalThis.startvalue < globalThis.increasedvalue){
        cy.log('amount is increased as user clicks on increment button')
      }else{
        cy.log('amount not increased')
      }
    });

  When(/^I click on the Place Absentee Bid button for lot number '([^"]*)' in grid view of lot list page$/,(lotNumber:string) => {
    cy.get('body').then(body => {
      if(body.find(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber)).length > 0){
        helper.clickOnButton(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber))
        helper.waitFor(5000)
      }
      else{
        helper.clickOnButton(Absenteebidopenstage.deletebid.replace('{lotNumber}',lotNumber))
        
        helper.clickOnButton(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber))
        helper.waitFor(5000)
        }
    });
 });

  When(/^I click on Place Absentee Bid button in list view of lot list page$/,async (button: String) => {
    cy.get('body').then(body => {
      if(body.find(Absenteebidopenstage.listviewbidbutton).length > 0){
        helper.clickOnButton(Absenteebidopenstage.listviewbidbutton);
        helper.verifyText(Absenteebidopenstage.successfullAbsenteeBidPlacedMesssage,Message.absentee.successbid)
      }
      else{
        helper.clickOnButton(Absenteebidopenstage.listdeletebutton)
        helper.waitFor(3000)
        helper.clickOnButton(Absenteebidopenstage.listviewbidbutton);
          }
    });
  });

  Then(/^I verify user able to see delete button available for lot number '([^"]*)' on absentee bid placed lots$/,(lotNumber:string) => {
    cy.get('body').then(body => {
      if(body.find(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber)).length > 0){
        cy.get(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber)).click()
        helper.waitFor(5000)
      }
      else{
        helper.support(Absenteebidopenstage.deletebid.replace('{lotNumber}',lotNumber))
         }
    });
  });

  Then(/I verify user able to see Revise button for lot number '([^"]*)' available on lot cart in absentee bid stage$/,(lotNumber:string) => {
    cy.get('body').then(body => {
      if(body.find(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber)).length > 0){
        cy.get(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber)).click();
        helper.waitFor(2000)
      }
      else{
        helper.support(Absenteebidopenstage.revisebutton.replace('{lotNumber}',lotNumber))
        }
    });
  });

  Then(/^I verify user able to revise placed absentee bids for lot number '([^"]*)'$/,(lotNumber:string) => {
    helper.clickOnButton(Absenteebidopenstage.revisebutton.replace('{lotNumber}',lotNumber));
    helper.waitFor(2000)
    helper.support(Absenteebidopenstage.successfullAbsenteeBidPlacedMesssage).then(revisemsg=>{
      globalThis.revisebidmsg=revisemsg.text();
    cy.log(globalThis.revisebidmsg)
    })
    helper.waitFor(2000)
  });

  Then(/^I increase the amount of placed absentee bids on lot cart for lot number '([^"]*)'$/,(lotNumber:string) => {
    helper.clickOnButton(Absenteebidopenstage.increaseamount.replace('{lotNumber}',lotNumber));
    helper.waitFor(2000);
  });

  
  Then(/^I verify user able to delete placed absentee bids for lot number '([^"]*)'$/, (lotNumber:string) => {
    cy.get(Absenteebidopenstage.deletebid.replace('{lotNumber}',lotNumber)).click()
   helper.support(Absenteebidopenstage.successfullAbsenteeBidPlacedMesssage).then(deletbidmsg=>{
    globalThis.deletmsg=deletbidmsg.text();
    cy.log(globalThis.deletmsg)
    helper.waitFor(2000);
   })
  });

  Then(/^I click on lotdetail link for lot number '([^"]*)' on lot cart from lot list page grid view$/,(lotNumber:string) => {
    helper.clickOnButton(Absenteebidopenstage.lotdetailpagelink.replace('{lotNumber}',lotNumber)),{force:true};
    helper.waitFor(2000)
  });

  Then(/^I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button$/, async (button: String) => {
    helper.verifyText(Absenteebidopenstage.lotdetailpreviousbutton,Message.absentee.previousbutton)
  });

  Then(/^I Verify guest user able to see Register to bid button in lot detail page$/, async (button: String) => {
    helper.verifyText(Absenteebidopenstage.detailguestregisterbutton,Message.auctionlive.guestbid)
  });

  When(/^I click on Register to Bid button in lot detail page$/, async (button: String) => {
    helper.clickOnButton(Absenteebidopenstage.detailguestregisterbutton)
  });

  Then(/^I Verify when user clicks on Register to bid button from lot detail page it redirects to registeration form$/, async (text: String) => {
    helper.verifyText(liveauction.registerpagevalidation, Message.auctionlive.registerpage)
  });

  Then(/^I verify estimates text is available in lot detail page$/, async (text: String) => {
    helper.support(Absenteebidopenstage.estimatesdetailtext).then(estimate => {
      let mytext = helper.getText(estimate)
      expect(mytext).to.contains(Message.auctionlive.Estimates)
    })
  });

  Then(/^I verify estimates amount in rupee is available in lot detail page$/, async () => {
    helper.support(Absenteebidopenstage.detailsestimaterupee).then(estimate => {
      let mytext = helper.getText(estimate)
      expect(mytext).to.contains(Message.auctionlive.rupeesymbol)
    })
  });

  Then(/^I verify estimates amount in dollar is available in lot detail page$/, async () => {
    helper.support(Absenteebidopenstage.detailsestimatedollar).then(estimate => {
      let mytext = helper.getText(estimate)
      expect(mytext).to.contains(Message.auctionlive.dollarsymbol)
    })
  });

  Then(/^I verify starting bid text is available in lot detail page$/, async () => {
    helper.support(Absenteebidopenstage.detailpagestartbidtext).then(startbid => {
      let mytext = helper.getText(startbid)
      expect(mytext).to.contains(Message.absentee.startingbid)
    })
  });

  Then(/^I verify starting bid amount in rupee is available in lot detail page$/, async () => {
    helper.support(Absenteebidopenstage.detailstartbidrupee).then(startbid => {
      let mytext = helper.getText(startbid)
      expect(mytext).to.contains(Message.auctionlive.rupeesymbol)
    })
  });
  
  Then(/^I verify starting bid amount in dollar is available in lot detail page$/, async () => {
    helper.support(Absenteebidopenstage.detailstartbiddollar).then(startbid => {
      let mytext = helper.getText(startbid)
      expect(mytext).to.contains(Message.auctionlive.dollarsymbol)
    })
  });

  Then(/^I Verify bidder user able to see Place Absentee Bid button in lot detail page$/, async () => {
    cy.get('body').then(body => {

      if(body.find(Absenteebidopenstage.placeabsenteedetailpage).length > 0){
        cy.get(Absenteebidopenstage.placeabsenteedetailpage).invoke('text').should('eq',Message.absentee.absenteebutton)
      }
      else{
        helper.clickOnButton(Absenteebidopenstage.deletedetailpage)
        helper.waitFor(2000)
        cy.get(Absenteebidopenstage.placeabsenteedetailpage).invoke('text').should('eq',Message.absentee.absenteebutton)
      }
    })   
  });

  Then(/^I click on place absentee bid button from lot detail page$/, async () => {
    cy.get('body').then(body => {

      if(body.find(Absenteebidopenstage.placeabsenteedetailpage).length > 0){
        cy.get(Absenteebidopenstage.placeabsenteedetailpage).invoke('text').should('eq',Message.absentee.absenteebutton)
        helper.clickOnButton(Absenteebidopenstage.placeabsenteedetailpage)
      }
      else{
        helper.clickOnButton(Absenteebidopenstage.deletedetailpage)
        helper.waitFor(2000)
        cy.get(Absenteebidopenstage.placeabsenteedetailpage).invoke('text').should('eq',Message.absentee.absenteebutton)
        helper.clickOnButton(Absenteebidopenstage.placeabsenteedetailpage)
      }
    })   
  });

  Then(/^I verify absentee bid placed successfully fro lot detail page$/, async () => {
    helper.containsText(Absenteebidopenstage.successabsenteebidverification, Message.absentee.successbid)
  });

  Then(/^I verify Revise button is available in lot detail page$/, async () => {
    cy.get('body').then(body => {

      if(body.find(Absenteebidopenstage.revisedetailpage).length > 0){
        cy.get(Absenteebidopenstage.revisedetailpage).invoke('text').should('eq',Message.absentee.revisebutton)
      }
      else{
        helper.clickOnButton(Absenteebidopenstage.placeabsenteedetailpage)
        helper.waitFor(2000)
        cy.get(Absenteebidopenstage.revisedetailpage).invoke('text').should('eq',Message.absentee.revisebutton)
      }
    })   
  });

  Then(/^I click on increment amount button$/, async () => {
    helper.clickOnButton(Absenteebidopenstage.increaseamountdetailpagebutton)
  });

  Then(/^I click on Revise button on lot detail page$/, async () => {
    cy.get('body').then(body => {

      if(body.find(Absenteebidopenstage.revisedetailpage).length > 0){
        cy.get(Absenteebidopenstage.revisedetailpage).invoke('text').should('eq',Message.absentee.revisebutton)
        helper.clickOnButton(Absenteebidopenstage.revisedetailpage)
      }
      else{
        helper.clickOnButton(Absenteebidopenstage.placeabsenteedetailpage)
        helper.waitFor(2000)
        cy.get(Absenteebidopenstage.revisedetailpage).invoke('text').should('eq',Message.absentee.revisebutton)
        helper.clickOnButton(Absenteebidopenstage.revisedetailpage)
      }
    })   
  });

  Then(/^I verify availability of delete button in lot detail page$/, async () => {
    cy.get('body').then(body => {

      if(body.find(Absenteebidopenstage.deletedetailpage).length > 0){
        cy.get(Absenteebidopenstage.deletedetailpage).invoke('text').should('eq',Message.absentee.deletebutton)
      }
      else{
        helper.clickOnButton(Absenteebidopenstage.placeabsenteedetailpage)
        helper.waitFor(2000)
        cy.get(Absenteebidopenstage.deletedetailpage).invoke('text').should('eq',Message.absentee.deletebutton)
      }
    })   
  });

  When(/^I click on the delete button on lot detail page$/, async () => {
    cy.get('body').then(body => {

      if(body.find(Absenteebidopenstage.deletedetailpage).length > 0){
        cy.get(Absenteebidopenstage.deletedetailpage).invoke('text').should('eq',Message.absentee.deletebutton)
        helper.clickOnButton(Absenteebidopenstage.deletedetailpage)
      }
      else{
        helper.clickOnButton(Absenteebidopenstage.placeabsenteedetailpage)
        helper.waitFor(2000)
        cy.get(Absenteebidopenstage.deletedetailpage).invoke('text').should('eq',Message.absentee.deletebutton)
        helper.clickOnButton(Absenteebidopenstage.deletedetailpage)
      }
    })   
  });

  Then(/^I verify user able to see lot number '([^"]*)' gets saved after placing absentee bid by verifying save button highlighted$/, (lotNumber:string) => {
  
    if(helper.support(Absenteebidopenstage.savebuttonab).should('have.css', 'background-color').should('eq','rgb(43, 89, 113)')){
      cy.log('button is saved')
    }else{
      helper.clickOnButton(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber))
      helper.waitFor(2000)
      helper.support(Absenteebidopenstage.savebuttonab).should('have.css', 'background-color').should('eq','rgb(43, 89, 113)')
    }
  });

  When(/^I click on view my lots button from lot list page in absentee bid stage$/, async (text:string) => {
helper.clickOnButton(Absenteebidopenstage.viewmylotbutton)
  })

  Then(/^I verify page redirects on my lots page$/, async () => {
    helper.support(liveauction.selectauction).select('1270', {force: true}).invoke("val").should('eq','1270')
  })
  
  Then(/^I verify Estimates text is available in estimate amount section on lot cart in My lots page$/, async (text:string) => {
    helper.verifyText(Absenteebidopenstage.estimatestextmylot, Message.auctionlive.Estimates)
  })

  Then(/^I verify Estimates amount in rupee is available on estimates section in lot cart of absentee bid open stage in  my lots page$/, async (text: String) => {
    helper.containsText(Absenteebidopenstage.mylotestimatesrupee, Message.auctionlive.rupeesymbol)
  })

  Then(/^I verify Estimates amount in dollar is available on estimates section in lot cart of absentee bid open stage in  my lots page$/, async (text: String) => {
    helper.containsText(Absenteebidopenstage.mylotestimatesdollar,Message.auctionlive.dollarsymbol)
  });

  Then(/^I verify Starting bid text is available in Starting bid amount section on lot cart in My lots page$/, async (text:String) => {
    helper.verifyText(Absenteebidopenstage.mylotstartingbid, Message.absentee.startingbid)
  })

  Then(/^I verify Starting bid amount in rupee is available on Starting bid amount section in lot cart of absentee bid open stage in  my lots page$/, async (text: String) => {
    helper.containsText(Absenteebidopenstage.mylotstartingbidamountrupee, Message.auctionlive.rupeesymbol)
  })

  Then(/^I verify Starting bid amount in dollar is available on Starting bid amount section in lot cart of absentee bid open stage in  my lots page$/, async (text: String) => {
    helper.containsText(Absenteebidopenstage.mylotstartingbidamountdollar, Message.auctionlive.dollarsymbol)
  })

  Then(/^I verify user able to see Place Absentee Bid buttonon lot cart in my lots page$/, async (text: String) => {
    cy.get('body').then(body => {

      if(body.find(Absenteebidopenstage.placeabsenteebuttonmylot).length > 0){
        cy.get(Absenteebidopenstage.placeabsenteebuttonmylot).invoke('text').should('eq',Message.absentee.absenteebutton)
      }
      else{
        helper.clickOnButton(Absenteebidopenstage.mylotdeletebidbutton)
        helper.waitFor(2000)
        cy.get(Absenteebidopenstage.placeabsenteebuttonmylot).invoke('text').should('eq',Message.absentee.absenteebutton)
      }
    }) 
  });

  When(/^I click on place absentee bid button$/, async (button: String) => {
    cy.get('body').then(body => {
      if(body.find(Absenteebidopenstage.placeabsenteebuttonmylot).length > 0){
        helper.clickOnButton(Absenteebidopenstage.placeabsenteebuttonmylot)
      }
      else{
        helper.clickOnButton(Absenteebidopenstage.mylotdeletebidbutton)
        helper.waitFor(2000)
        helper.clickOnButton(Absenteebidopenstage.placeabsenteebuttonmylot)
      }
    })
  });

Then(/^I verify the current amount in bid value$/, async (value: String) => {
  helper.support(Absenteebidopenstage.estimatestextmylot).then( text => {
   let amount = helper.getText(text)
   cy.log(amount, 'hello')
  })
});

When(/^I click on toggle button in my lots page$/, async (button: String) => {
  helper.forceclick(Absenteebidopenstage.mylottoggle)
  helper.waitFor(1000)
});

Then(/^I verify list view appears in my lots page$/, async (text: String) => {
  helper.containsText(Absenteebidopenstage.imagecolumnheader, Message.absentee.imagecolumn)
});

Then(/^I verify user able to see place absentee bid button in list view of my lots page$/, async (button: String) => {
  cy.get('body').then(body => {
    if(body.find(Absenteebidopenstage.mylotlistviewplaceabsenteebidbutton).length > 0){
      cy.get(Absenteebidopenstage.mylotlistviewplaceabsenteebidbutton).invoke('text').should('eq',Message.absentee.absenteebutton)
    }
    else{
      helper.clickOnButton(Absenteebidopenstage.mylotlistviewdeletebutton)
      helper.waitFor(2000)
      cy.get(Absenteebidopenstage.mylotlistviewplaceabsenteebidbutton).invoke('text').should('eq',Message.absentee.absenteebutton)
    }
  })
});

When(/^I click on place absentee bid button user able to place absentee bid in list view of my lots page$/, async (button: String) => {
  cy.get('body').then(body => {
    if(body.find(Absenteebidopenstage.mylotlistviewplaceabsenteebidbutton).length > 0){
      helper.clickOnButton(Absenteebidopenstage.mylotlistviewplaceabsenteebidbutton)
    }
    else{
      helper.clickOnButton(Absenteebidopenstage.mylotlistviewdeletebutton)
      helper.waitFor(2000)
      helper.clickOnButton(Absenteebidopenstage.mylotlistviewplaceabsenteebidbutton)
    }
  })
});

Then(/^I verify availability of Delete button in grid view of my lots page$/, async (text: String) => {
  cy.get('body').then(body => {

    if(body.find(Absenteebidopenstage.placeabsenteebuttonmylot).length > 0){
      helper.clickOnButton(Absenteebidopenstage.placeabsenteebuttonmylot)
      helper.waitFor(2000)
      cy.get(Absenteebidopenstage.mylotdeletebidbutton).invoke('text').should('eq',Message.absentee.deletebutton)
    }
    else{
      cy.get(Absenteebidopenstage.mylotdeletebidbutton).invoke('text').should('eq',Message.absentee.deletebutton)
    }
  }) 
});

Then(/^I verify availability of Revise button in grid view of my lots page$/, async (text: String) => {
  cy.get('body').then(body => {

    if(body.find(Absenteebidopenstage.placeabsenteebuttonmylot).length > 0){
      helper.clickOnButton(Absenteebidopenstage.placeabsenteebuttonmylot)
      helper.waitFor(2000)
      cy.get(Absenteebidopenstage.mylotrevise).invoke('text').should('eq',Message.absentee.revisebutton)
    }
    else{
      cy.get(Absenteebidopenstage.mylotrevise).invoke('text').should('eq',Message.absentee.revisebutton)
    }
  }) 
});

Then(/^I click on Delete button in my lots page i verify the placed absentee bid gets deleted$/, async (text: String) => {
  cy.get('body').then(body => {

    if(body.find(Absenteebidopenstage.placeabsenteebuttonmylot).length > 0){
      helper.forceclick(Absenteebidopenstage.placeabsenteebuttonmylot)
      helper.waitFor(2000)
      cy.get(Absenteebidopenstage.mylotdeletebidbutton).invoke('text').should('eq',Message.absentee.deletebutton)
      helper.forceclick(Absenteebidopenstage.mylotdeletebidbutton)
      helper.waitFor(2000)
    }
    else{
      cy.get(Absenteebidopenstage.mylotdeletebidbutton).invoke('text').should('eq',Message.absentee.deletebutton)
      helper.forceclick(Absenteebidopenstage.mylotdeletebidbutton)
      helper.waitFor(4000)
    }
  }) 
});

Then(/^I click on Revise button in placed absentee bid lot in my lot page , i verify absentee bid gets revised$/, async (text: String) => {
  cy.get('body').then(body => {

    if(body.find(Absenteebidopenstage.placeabsenteebuttonmylot).length > 0){
      helper.forceclick(Absenteebidopenstage.placeabsenteebuttonmylot)
      helper.waitFor(2000)
      cy.get(Absenteebidopenstage.mylotrevise).invoke('text').should('eq',Message.absentee.revisebutton)
      helper.forceclick(Absenteebidopenstage.mylotincrementamount)
      helper.forceclick(Absenteebidopenstage.mylotrevise)
    }
    else{
      cy.get(Absenteebidopenstage.mylotrevise).invoke('text').should('eq',Message.absentee.revisebutton)
      helper.forceclick(Absenteebidopenstage.mylotincrementamount)
      helper.forceclick(Absenteebidopenstage.mylotrevise)
    }
  }) 
});

Then(/^I verify placed absentee bid mail on yopmail$/,()=>{
     helper.enterText(YOPmail.search,user.qa.email)
     helper.clickOnButton(YOPmail.arrow);
     cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail).should('be.visible').then(msg=>{
      globalThis.placeabsenteebid=msg.text()
        cy.log(globalThis.placeabsenteebid)
     })
     cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail1).should('be.visible').then(msg=>{
      globalThis.placeabsenteebid=msg.text()
        cy.log(globalThis.placeabsenteebid)
     })
})

Then(/^I verify delete absentee bid mail on yopmail$/,()=>{
     helper.enterText(YOPmail.search,user.qa.email)
     helper.clickOnButton(YOPmail.arrow);
     cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail).should('be.visible').then(msg=>{
      globalThis.placeabsenteebid=msg.text()
        cy.log(globalThis.placeabsenteebid)
     })
     cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail1).should('be.visible').then(msg=>{
      globalThis.placeabsenteebid=msg.text()
        cy.log(globalThis.placeabsenteebid)
     })
})

Then(/^I verify revise absentee bid mail on yopmail$/,()=>{
     helper.enterText(YOPmail.search,user.qa.email)
     helper.clickOnButton(YOPmail.arrow);
     cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail).should('be.visible').then(msg=>{
      globalThis.placeabsenteebid=msg.text()
        cy.log(globalThis.placeabsenteebid)
     })
     cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail1).should('be.visible').then(msg=>{
      globalThis.placeabsenteebid=msg.text()
        cy.log(globalThis.placeabsenteebid)
     })
})

Then(/^I increase the amount for lot number '([^"]*)' by clicking up-arrow button on grid view$/,()=>{
helper.clickOnButton(Absenteebidopenstage.incrementbtngridview)
    helper.waitFor(2000)
    let val;
    helper.support(Absenteebidopenstage.bidamountgridview).should(($input) => {
    val = $input.val();
    expect(val).to.equal('₹50,000'); 
  }); 

})

Then(/^I decrease the amount for lot number '([^"]*)' by clicking down-arrow button on grid view$/,()=>{
helper.clickOnButton(Absenteebidopenstage.decreasebtngridview)
    helper.waitFor(2000)
    let val;
    helper.support(Absenteebidopenstage.bidamountgridview).should(($input) => {
    val = $input.val();
    expect(val).to.equal('₹48,000'); 
  }); 

})

Then(/^I increase the amount by clicking up-arrow button on lot list page$/,()=>{
helper.clickOnButton(Absenteebidopenstage.incrementbtnlistview)
    helper.waitFor(2000)
    let val;
    helper.support(Absenteebidopenstage.bidamountlistview).should(($input) => {
    val = $input.val();
    expect(val).to.equal('₹50,000'); 
  }); 

})

Then(/^I decrease the amount by clicking down-arrow button on lot list page$/,()=>{
helper.clickOnButton(Absenteebidopenstage.decreasebtnlistview)
helper.waitFor(2000)
let val;
helper.support(Absenteebidopenstage.bidamountlistview).should(($input) => {
val = $input.val();
expect(val).to.equal('₹48,000'); 
}); 
})

Then(/^I increase the amount clicking on up-arrow button in lot details page$/,()=>{
helper.clickOnButton(Absenteebidopenstage.incrementbtndetails)
    helper.waitFor(2000)
    let val;
    helper.support(Absenteebidopenstage.bidamountdetails).should(($input) => {
    val = $input.val();
    expect(val).to.equal('₹50,000'); 
  }); 
})

Then(/^I decrease the amount clicking on down-arrow button in lot details page$/,()=>{
  helper.clickOnButton(Absenteebidopenstage.decreasebtndetails)
      helper.waitFor(2000)
      let val;
      helper.support(Absenteebidopenstage.bidamountdetails).should(($input) => {
      val = $input.val();
      expect(val).to.equal('₹48,000'); 
    }); 

})

Then(/^I increase the amount by clicking up-arrow button on my lot page$/,()=>{
  helper.clickOnButton(Absenteebidopenstage.incrementbtnmylotpagegrid)
      helper.waitFor(2000)
      let val;
      helper.support(Absenteebidopenstage.bidamountmylotgrid).should(($input) => {
      val = $input.val();
      expect(val).to.equal('₹50,000'); 
    }); 
})

Then(/^I decrease the amount by clicking down-arrow button on my lot page$/,()=>{
  helper.clickOnButton(Absenteebidopenstage.decreasebtnmylotpagegrid)
      helper.waitFor(2000)
      let val;
      helper.support(Absenteebidopenstage.bidamountmylotgrid).should(($input) => {
      val = $input.val();
      expect(val).to.equal('₹48,000'); 
    }); 

})

Then(/^I increase the amount by clicking up-arrow button in list view of my lots page$/,()=>{
  helper.clickOnButton(Absenteebidopenstage.incrementbtnmylotpagelist)
      helper.waitFor(2000)
      let val;
      helper.support(Absenteebidopenstage.bidamountmylotlist).should(($input) => {
      val = $input.val();
      expect(val).to.equal('₹50,000'); 
    }); 

})

Then(/^I decrease the amount by clicking down-arrow button in list view of my lots page$/,()=>{
  helper.clickOnButton(Absenteebidopenstage.decreasebtnmylotpagelist)
      helper.waitFor(2000)
      let val;
      helper.support(Absenteebidopenstage.bidamountmylotlist).should(($input) => {
      val = $input.val();
      expect(val).to.equal('₹48,000'); 
    }); 
})


 

 





      
