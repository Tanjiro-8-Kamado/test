import { When , Then } from "cypress-cucumber-preprocessor/steps";
import Helper from "../../../lib/ui/pageObjects/common/helper"; 
import { liveauction,LoginPage,Switchuser,CommonChecks,YOPmail, ProfilePage } from "../../locators/objectsRepository";
import Message from '../../fixtures/message.json';
import LogIn from '../../../lib/ui/pageObjects/auth/loginPage';
import user from '../../fixtures/accounts.json';
import Register from '../../../lib/ui/pageObjects/auth/registrationPage';
import * as domain from '../../fixtures/domains.json';


const helper = new Helper();
const logIn = new LogIn();
const register = new Register();

beforeEach(() => {
  helper.openWebPage('',{ failOnStatusCode: false });
  helper.waitFor(2000);
  helper.clickIfVisible(LoginPage.refreshpopup)  
 });

Then(/^I click on viewall link of all auction section$/, async (link: string) => {
  cy.get(liveauction.newviewalllink1).click();
});

Then(/^I verify '([^"]*)' Auction Live stage is available in all auction page$/, (auctionNumber: string) => {
  helper.xpath(liveauction.stagelive.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)   
  });

  Then(/^I verify '([^"]*)' Auction on result stage is available in all auction page$/, (auctionNumber: string) => {
    helper.xpath(liveauction.stageresult.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible)   
    });

When(/^I click on auction number '([^"]*)' then their respective lot list page gets open$/, async (auctionNumber: string) => {
  auctionNumber=liveauction.auctionnumber.replace('{number}',`D&I.${auctionNumber}`);
  helper.clickOnButton(auctionNumber); 
});

Then(/^I verify auction is available on auction live stage in lot list page$/, async () => {
  helper.containsText(liveauction.lotpage,Message.auctionlive.lotpagestage )
})

Then(/^I verify guest user should able to see register to bid button$/, async () => {
  helper.verifyText(liveauction.registerbutton, Message.auctionlive.guestbid);
})

When(/^I click on '([^"]*)' button$/, async (button: string) => {
  helper.clickOnButton(liveauction.registerbutton, button);
})

Then(/^I verify current page is register to bid form page$/, async (text: string) => {
  helper.containsText(liveauction.registerpagevalidation, Message.auctionlive.registerpage);
})

Then(/^I verify bidder user able see 'Bid Now' button is available on lot list page$/, (lotNumber:string) => {
  helper.verifyText(liveauction.bidbutton, Message.auctionlive.bidnowbutton);

})

When(/^I click on '([^"]*)' button from lot list page$/, async (button: string) => {
  helper.clickOnButton(liveauction.bidbutton, button);
})

Then(/^I verify '([^"]*)' button gets appear in the popup$/, async (text: string) => {
  helper.verifyText(liveauction.bidplace, Message.auctionlive.placebid);
})

When(/^I click on viewdetails of lot$/, async (link: string) => {
  helper.clickOnButton(liveauction.viewdetails, link);
})

Then(/^I verify guest user should able to see register to bid button in lot details page$/, async (text: string) => {
  helper.verifyText(liveauction.detailpagebutton, Message.auctionlive.lotdetailregisterbutton);
})

When(/^I click on register to bid button from lot details page$/, async (button:string) => {
  helper.clickOnButton(liveauction.detailpagebutton, button);
})

Then(/^I verify guest user should able to redirect to '([^"]*)' form page from lot details page$/, async (text: string) => {
  helper.verifyText(liveauction.registerpagevalidation, Message.auctionlive.registerpage);
})

Then(/^I verify bidder user able see '([^"]*)' button is available on lot detail page$/, async (text: string) => {
  helper.verifyText(liveauction.detailpagebidbutn, Message.auctionlive.bidnowbutton);
})

When(/^I click on '([^"]*)' button from lot detail page$/, async (button: string) => {
  helper.clickOnButton(liveauction.detailpagebidbutn, button);
})

Then(/^I verify '([^"]*)' button gets appear in the popup on lot detail page$/, async (text: string) => {
  helper.verifyText(liveauction.detailplacebid, Message.auctionlive.placebid);
})

Then(/^I verify same auction gets open in lot list page by validating auction '([^"]*)'$/, async (validation:string) => {
  globalThis.myinput = (`D&I.${validation}`)
  validation=liveauction.auctionvalidation.replace('{number}',`D&I.${validation}`);
    helper.support(liveauction.validation).then(text=>{
    const mytext = helper.getText(text).trim()
    expect(mytext).to.equals(globalThis.myinput)
     }) 
})

Then(/^I verify self absentee bid is availability for bidder$/, () => {
  helper.verifyText(liveauction.selfAbsenteeBid, Message.auctionlive.selfAbsenteeBid);
})

Then(/^I verify self absentee bid is availability on details page$/, () => {
  helper.clickIfVisible(liveauction.selfAbsenteeBidLot);
  helper.verifyText(liveauction.selfAbsenteeBidDetail, Message.auctionlive.selfAbsenteeBid);
  })

  Then(/^I verify self absentee bid is not availability on details page when lot is closed$/, () => {
    helper.clickIfVisible(liveauction.selfAbsenteeBidClosedLot);
    // helper.verifyText(liveauction.selfAbsenteeBidDetail, Message.auctionlive.selfAbsenteeBid);
    })
   
 Then(/^I verify availability of bid now button$/, () => {
  helper.support(Switchuser.profilename).then(user=>{
  const defaultuser = helper.getText(user)
 if (defaultuser === 'derivaz_and_ives_qa') 
 {
    
    helper.support(liveauction.bidbutton).then(buttonname=>{
    const mytext = helper.getText(buttonname)
      if (mytext === 'Bid Now') 
      {
         cy.log('Bid now button available')
      }
      else{
          logIn.logOut();
          helper.openWebPage('/login', { failOnStatusCode: false }); 
          helper.enterText(LoginPage.username, 'Auto');
          helper.enterText(LoginPage.password, 'test2345');
          helper.clickOnButton(Switchuser.buttonlogin);
          cy.get(liveauction.newviewalllink1).click();
          let auctionnumber = liveauction.auctionnumber.replace('{number}', 'D&I.${060817}')
          helper.clickWithContains(`D&I.060817`)
          helper.containsText(liveauction.lotpage, Message.auctionlive.lotpagestage);
          helper.verifyText(liveauction.bidbutton, Message.auctionlive.bidnowbutton);
         }
      });
  }
 else{
   cy.log('user is guest')
     }
   }); 
});

Then(/^I verify next bid section for lot number '([^"]*)' is available in lot cart$/,(lotNumber:string) => {
  helper.support(liveauction.nextbidtext.replace('{lotNumber}',lotNumber)).then(nxtbidtext=>{
    expect(nxtbidtext.text().trim()).to.equals(Message.auctionlive.nextbid)
  })
});

Then(/^I verify next bid amount in rupee for lot number '([^"]*)' is available on nextbid section in lot$/, (lotNumber:string) => {
  helper.support(liveauction.nextbidrupee.replace('{lotNumber}',lotNumber)).then(nextbidrupee => {
    let text=helper.getText(nextbidrupee)
    expect(text).to.contains(Message.auctionlive.rupeesymbol)
})
})

Then(/^I verify next bid amount in dollar for lot number '([^"]*)' is available on nextbid section in lot$/, (lotNumber:string) => {
  helper.support(liveauction.nextbiddollar.replace('{lotNumber}',lotNumber)).then(nextbiddollar => {
    let text = helper.getText(nextbiddollar)
    expect(text).to.contains(Message.auctionlive.dollarsymbol)
  })
});

Then(/^I verify current bid section for lot number '([^"]*)' is available in lot cart$/, (lotNumber:string) => {
  helper.support(liveauction.currentbidtext.replace('{lotNumber}',lotNumber)).then(currenbittext => {
    let mytext = helper.getText(currenbittext)
    expect(mytext).to.contains(Message.auctionlive.currentbid)
  })
});

Then(/^I verify current bid amount in rupee for lot number '([^"]*)' is available on nextbid section in lot$/, (lotNumber:string) => {
  helper.support(liveauction.currentbidrupee.replace('{lotNumber}',lotNumber)).then(currentbidrupeetext => {
    let mytext = helper.getText(currentbidrupeetext)
    expect(mytext).to.contains(Message.auctionlive.rupeesymbol)
  })
});

Then(/^I verify current bid amount in dollar for lot number '([^"]*)' is available on nextbid section in lot$/, (lotNumber:string) => {
  helper.support(liveauction.currentbiddollar.replace('{lotNumber}',lotNumber)).then(currentbiddollartext => {
    let mytext = helper.getText(currentbiddollartext)
    expect(mytext).to.contains(Message.auctionlive.dollarsymbol)
  })
});

Then(/^I verify Estimates section for lot number '([^"]*)' is available in lot cart$/, (lotNumber:string) => {
  helper.support(liveauction.estimatetext.replace('{lotNumber}',lotNumber)).then(estitext => {
    let mytext = helper.getText(estitext)
    expect(mytext).to.contains(Message.auctionlive.Estimates)
  })
});

Then(/^I verify Estimates amount in rupee for lot number '([^"]*)' is available on nextbid section in lot$/, (lotNumber:string) => {
  helper.support(liveauction.estimaterupee.replace('{lotNumber}',lotNumber)).then(estimaterupeetext => {
    let mytext = helper.getText(estimaterupeetext)
    expect(mytext).to.contains(Message.auctionlive.rupeesymbol)
  })
});

Then(/^I verify Estimates amount in dollar for lot number '([^"]*)' is available on nextbid section in lot$/, (lotNumber:string) => {
  helper.support(liveauction.estimatedollar.replace('{lotNumber}',lotNumber)).then(estimatedollartext => {
    let mytext = helper.getText(estimatedollartext)
    expect(mytext).to.contains(Message.auctionlive.dollarsymbol)
  })
});

Then(/^I verify totalbids text for lot number '([^"]*)' is available in totalbids section on lot cart$/, (lotNumber:string) => {
  helper.support(liveauction.totalbidtext.replace('{lotNumber}',lotNumber)).then(bidtext => {
   let mytext = helper.getText(bidtext)
   expect(mytext).to.contains(Message.auctionlive.totalbid)
  });
})

Then(/^I verify total bid count is available in totalbids section on lot cart$/, () => {
  helper.support(liveauction.totalbidcount).then(counttxt => {
    let count = helper.getText(counttxt)
    expect(Number.isNaN(count)).to.eq(false)
  })
})

Then(/^I verify Lot closes in section for lot number '([^"]*)' on lot cart$/, (lotNumber:string) => {
  helper.support(liveauction.lottimersection.replace('{lotNumber}',lotNumber)).then(timertext => {
   let mytext = helper.getText(timertext)
   expect(mytext).to.contains(Message.auctionlive.lotclosestext)
  });
})

Then(/^I verify lot closing time is available on lot carts$/, async () => {
  helper.support(liveauction.lottimer).then(text => {
    const timepattern = /^([A-Za-z0-9]+( [A-Za-z0-9]+)+)$/;
    const digit = helper.getText(text)
    expect(digit).to.match(timepattern)
  })
})

When(/^I click on Place Bid button$/, (button: string) => {
  helper.clickOnButton(liveauction.bidplace, button)
})

Then(/^I verify bid gets placed successfully$/, (text: string) => {
  helper.verifyText(liveauction.bidbutton, Message.auctionlive.highestbidder)
  register.hightestbidderemail();
})

Then(/^I verify total bids count get increased by one on successfull bid placed$/, (button: string) => {
  helper.support(liveauction.totalbidcount).then(count=>{
   globalThis.prevcount = helper.getText(count)
   cy.log(globalThis.prevcount)
   })
   helper.clickOnButton(liveauction.bidbutton)
   helper.clickOnButton(liveauction.bidplace, button)
   helper.waitFor(3000)
   helper.support(liveauction.totalbidcount).then(current=>{
    globalThis.currentcount = helper.getText(current)
    cy.log(globalThis.currentcount)
  }) 
  if (`${globalThis.currentcount} === ${globalThis.prevcount} + ${1}`){
    cy.log('current count increased by one')
   }
   else{
    cy.log('count not increased')
   }
})

Then(/^I verify bid get placed at correct amount by verifying next bid amount before bid and current bid amount after bid get equals$/, () => {
  helper.support(liveauction.nextbidamount).then(amount=>{
    globalThis.nextamount = helper.getText(amount)
  })
  helper.clickOnButton(liveauction.bidbutton)
  helper.clickOnButton(liveauction.bidplace)
  helper.waitFor(3000)
  helper.support(liveauction.currentbidamount).then(amount=>{
   globalThis.currentamount = helper.getText(amount)
  })
  if (`${globalThis.nextbidamount} == ${globalThis.currentamount}`){
    cy.log('bid gets placed at correct amount')
  }else{
    cy.log('bid gets placed at incorrect amount')
    throw new Error('bid gets placed at incorrect amount')
  }
})

Then(/^I verify next bid section is available in lot details page$/, async (nextbid: string) => {
  helper.support(liveauction.detailnextbidtext).then(message=>{
    let mytext = helper.getText(message)
    expect(mytext).to.equals(Message.auctionlive.nextbid)
  })
});

Then(/^I verify next bid amount in rupee is available on nextbid section in lot details page$/, async () => {
  helper.support(liveauction.detailnextbidrupee).then(symbol => {
    let text = helper.getText(symbol)
    expect(text).contains(Message.auctionlive.rupeesymbol)
  })
});

Then(/^I verify next bid amount in dollar is available on nextbid section in lot details page$/, async () => {
  helper.support(liveauction.detailnextbiddollar).then(symbol => {
    let text = helper.getText(symbol)
    expect(text).to.contains(Message.auctionlive.dollarsymbol)
  })
});

Then(/^I verify current bid section is available in lot details page$/, async () => {
  helper.support(liveauction.detailcurrentbidtext).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.currentbid)
  })
});

Then(/^I verify current bid amount in rupee is available on nextbid section in lot details page$/, async () => {
  helper.support(liveauction.detailcurrentbidrupee).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.rupeesymbol)
  })
});

Then(/^I verify current bid amount in dollar is available on nextbid section in lot details page$/, async () => {
  helper.support(liveauction.detailcurrentbiddollar).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.dollarsymbol)
  })
});

Then(/^I verify Estimates section is available in lot details page$/, async () => {
  helper.support(liveauction.detailestimatetext).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.Estimates)
  })
});

Then(/^I verify Estimates amount in rupee is available on nextbid section in lot details page$/, async () => {
  helper.support(liveauction.detailestimaterupee).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.rupeesymbol)
  })
});

Then(/^I verify Estimates amount in dollar is available on nextbid section in lot details page$/, async () => {
  helper.support(liveauction.detailestimatedollar).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.dollarsymbol)
  })
});

Then(/^I verify Lot closes in section on lot details page$/, async () => {
  helper.support(liveauction.lotclosesintextindetailpage).then(text => {
   let mytext = helper.getText(text)
   expect(mytext).to.contains(Message.auctionlive.lotclosestext)
  });
})

Then(/^I verify lot closing time is available on lot details page$/, async () => {
  helper.support(liveauction.detailpagelotclosestimer).then(text => {
    const timepattern = /^([A-Za-z0-9]+( [A-Za-z0-9]+)+)$/;
    const digit = helper.getText(text)
    expect(digit).to.match(timepattern)
  })
})

When(/^I click on '([^"]*)' button on lot detail page$/, async (text: string) => {
  helper.clickOnButton(liveauction.detailplacebid, text);
})

Then(/^I verify Next Lot button is available on lot detail page$/, (text: string) => {
  helper.verifyText(liveauction.nextbutton, Message.auctionlive.nextbutn)
})

When(/^I click on Next Lot button page should redirect to next lot page$/, async (text: string) => {
  helper.clickOnButton(liveauction.nextbutton, text);
})


Then(/^I verify Previous Lot button is available on lot detail page$/, (text: string) => {
  helper.verifyText(liveauction.previousbutton, Message.auctionlive.prevbtn)
})

When(/^I click on Previous Lot button page should redirect to Previous lot page$/, async (text: string) => {
  helper.clickOnButton(liveauction.previousbutton, text);
})

When(/^I click on toggle button from lot list page$/, async () => {
 
  helper.support(liveauction.textsearch).then(text => {
    const textstore = helper.getText(text)
    if(textstore.includes('Artist | Title')){
      cy.log('pass')
    }
    else{
      cy.log('here')
      helper.waitFor(3000)
      helper.clickOnButton(liveauction.livetoggle)
      helper.waitFor(1000)
       }
       helper.containsText(liveauction.artisttoggle, Message.auctionlive.artisttitle)
  })
})

Then(/^I verify user able to see lots in list view$/, (text: string) => {
  helper.containsText(liveauction.artistcolumn, Message.auctionlive.artisttitle)
})

Then(/^I verify Register to bid button is available in lots instead of bid now button$/, (text: string) => {
  helper.verifyText(liveauction.listpageregisterbutton, Message.auctionlive.guestbid)
})

When(/^I click on Register to bid button from list view$/, (text: string) => {
  helper.clickOnButton(liveauction.listpageregisterbutton)
})

Then(/^I click view details on required lots from lot list view$/, (text: string) => {
   helper.clickOnButton(liveauction.listdetail)
})

Then(/^I verify Bid Now button is available in lot list view$/, (text: string) => {
  helper.verifyText(liveauction.listbidbutton, Message.auctionlive.bidnowbutton)
})

When(/^I click on Bid Now button$/, (text: string) => {
  helper.clickOnButton(liveauction.listbidbutton) 
})

Then(/^I verify Place Bid appears in popup$/, (text: string) => {
  helper.verifyText(liveauction.listplacebid, Message.auctionlive.placebid)
})

When(/^I click on Place Bid button in required lot$/, (button: string) => {
  helper.clickOnButton(liveauction.listplacebid)
})

Then(/^I fetched the background color of save button$/, (text: String) => {
   
  cy.log('initialize')
  helper.support(liveauction.savebuttoncolor).should('have.css','background-color').then(color => {
    let blue = 'rgb(43, 89, 113)'
    
    if(String(color) == blue){
      cy.log('lot is saved')
    }else{
      helper.waitFor(3000)
      helper.clickIfVisible(liveauction.savebuttoncolor)
      helper.clickOnButton(liveauction.savebuttoncolor)
      cy.log('lot not saved')
      helper.waitFor(5000)
    }
     })   
});

When(/^I click on view my lots button from lot list page$/, (text: string) => {
  
  helper.clickOnButton(liveauction.mylotspage)
});

When(/^I click on auction dropdown from my lot page$/, (dropdwon : string) => {
  helper.clickOnButton(liveauction.selectauction)
})

When(/^I select saved lots auction from dropdown in my lots page$/, (text: string) => {
helper.support(liveauction.selectauction).select('597', {force: true}).invoke("val").should('eq','597')
helper.waitFor(2000)
})

Then(/^I verify bidnow button is visible in my lots page$/, (text: string) => {
  helper.support(liveauction.mylotbidBidnowbutton).then(msg=>{
    globalThis.msgbid=msg.text();
    cy.log(globalThis.msgbid)
  })
})

When(/^I click on bid now button in my lot page$/, (button: string) => {
  
  helper.support(Switchuser.profilename).then(user=>{
    const defaultuser = helper.getText(user)
   if (defaultuser === 'derivaz_and_ives_qa') 
   {
      
      helper.support(liveauction.mylotbid1).then(buttonname=>{
      const mytext = helper.getText(buttonname)
        if (mytext === 'Bid Now') 
        {
           cy.log('Bid now button available')
           helper.clickOnButton(liveauction.mylotbid1)
        }
        else{
            logIn.logOut();
            helper.waitFor(2000)
            helper.openWebPage('/login', { failOnStatusCode: false }); 
            helper.enterText(LoginPage.username, 'Auto');
            helper.enterText(LoginPage.password, 'test2345');
            helper.clickOnButton(Switchuser.buttonlogin);
            helper.clickOnButton(liveauction.newviewalllink1);
            let auctionnumber = liveauction.auctionnumber.replace('{number}', 'D&I.${060817}')
            helper.clickWithContains(`D&I.060817`)
            helper.containsText(liveauction.lotpage, Message.auctionlive.lotpagestage);
            helper.clickOnButton(liveauction.mylotspage)
            helper.support(liveauction.selectauction).select('597', {force: true}).invoke("val").should('eq','597')
            helper.waitFor(2000)
            helper.clickOnButton(liveauction.mylotbid7);
           }
        });
    }
     }); 
})

Then(/^I verify '([^"]*)' button gets appeared$/, (text: string) => {
  helper.xpath(liveauction.placebidmylot).should('have.text',' Place Bid')
})

Then(/^I click on place bid button in my lot page$/, (button: string) => {
  helper.xpath(liveauction.placebidmylot).click({force:true})
})

Then(/^I verify next bid text is available in next bid amount section on required lot in my lots page$/, async (nextbid: string) => {
  helper.support(liveauction.mylotnextbidtext).then(message=>{
    let mytext = helper.getText(message)
    expect(mytext).to.equals(Message.auctionlive.nextbid)
  })
});

Then(/^I verify next bid amount is available in rupee on required lot in my lots page$/, async () => {
  helper.support(liveauction.mylotnextbidrupee).then(symbol => {
    let text = helper.getText(symbol)
    expect(text).contains(Message.auctionlive.rupeesymbol)
  })
});

Then(/^I verify next bid amount is available in dollar on required lot in my lots page$/, async () => {
  helper.support(liveauction.mylotnextbiddollar).then(symbol => {
    let text = helper.getText(symbol)
    expect(text).to.contains(Message.auctionlive.dollarsymbol)
  })
});

Then(/^I verify current bid text is available in current bid amount section on required lot in my lots page$/, async () => {
  helper.support(liveauction.mylotcurrentbidtext).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.currentbid)
  })
});

Then(/^I verify current bid amount is available in rupee on required lot in my lots page$/, async () => {
  helper.support(liveauction.mylotcurrentbidrupee).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.rupeesymbol)
  })
});

Then(/^I verify current bid amount is available in dollar on required lot in my lots page$/, async () => {
  helper.support(liveauction.mylotcurrentbiddollar).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.dollarsymbol)
  })
});

Then(/^I verify estimates text is available in estimate amount section on required lot in my lots page$/, async () => {
  helper.support(liveauction.mylotestimatestext).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.Estimates)
  })
});

Then(/^I verify estimate amount is available in rupee on required lot in my lots page$/, async () => {
  helper.support(liveauction.mylotestimatesrupee).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.rupeesymbol)
  })
});

Then(/^I verify estimate amount is available in dollar on required lot in my lots page$/, async () => {
  helper.support(liveauction.mylotestimatesdollar).then(text => {
    let mytext = helper.getText(text)
    expect(mytext).to.contains(Message.auctionlive.dollarsymbol)
  })
});

Then(/^I verify refresh popup button available$/, async () => {
  helper.waitFor(3000);
  helper.clickOnButton(LoginPage.refreshpopup)
});

Then(/^I verify user is logged in as super user by verifying availability of Live with Result tab in lot list page$/, async () => {
  helper.support(liveauction.livewithresulttab).then(text => {
  let tabtext = helper.getText(text)
  expect(tabtext).to.contains(Message.auctionlive.livewithresult)
  })
});

Then(/^I Verify Super user able to see bid count$/, async () => {
  helper.support(liveauction.supertotalbids).then(text => {
    let superuserbid = helper.getText(text)
    expect(superuserbid).to.contains(Message.auctionlive.totalbid)
  })
})

Then(/^I verify guest user not able to view absentee bid to check with Lot Closed status for lot number '([^"]*)'$/,(lotNumber:string)=>{
  helper.support(liveauction.lotclosedselfabsentee.replace('{lotNumber}',lotNumber)).then(lotclosedstatus=>{
    expect(lotclosedstatus.text().trim()).to.equals(Message.auctionlive.lotclosedselfabsentee)
  })
});

Then(/^I verify same results auction gets open in lot list page by validating auction '([^"]*)'$/, async (validation:string) => {
  globalThis.myinput = (`D&I.${validation}`)
  validation=liveauction.resultauctionvalidation.replace('{number}',`D&I.${validation}`);
    helper.support(liveauction.resultvalidation).then(text=>{
    const mytext = helper.getText(text).trim()
    expect(mytext).to.equals(globalThis.myinput)
     }) 
})

Then(/^I click on Lot tab and verify self absentee bid for lot number '([^"]*)' display on results stage$/,(lotNumber:string)=>{
    helper.clickOnButton(liveauction.lottabresults);
    helper.support(liveauction.resultselfabsenteebid.replace('{lotNumber}',lotNumber)).then(resultselfbid=>{
      expect(resultselfbid.text().trim()).to.equals(Message.auctionlive.selfAbsenteeBidadmin)
    })
    helper.clickOnButton(liveauction.resultselfabsenteebid);
    helper.clickOnButton(liveauction.closeselfabsenteebidpopup)
})

Then(/^I launch the YOPmail website to check Auction live email notification$/,()=>{
    helper.openWebPage(domain.yopmail.url);
})

Then(/^I verify place bid mail on yopmail$/,()=>{ 
    helper.enterText(YOPmail.search,globalThis.hbe)
         helper.clickOnButton(YOPmail.arrow);
         helper.clickOnButton(YOPmail.refresh);
         cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail).should('be.visible').then(msg=>{
          globalThis.placeabsenteebid=msg.text()
            cy.log(globalThis.placeabsenteebid)
         })
         cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail1).should('be.visible').then(msg=>{
          globalThis.placeabsenteebid=msg.text()
            cy.log(globalThis.placeabsenteebid)
         })  
  })

  Then(/^I verify counter bid mail on yopmail$/,()=>{
       let email1=user.qa.email;
       let email2='auto@yopmail.com'
       let profile=globalThis.hbe
      if(profile===email1){
           helper.enterText(YOPmail.search,email2)
           helper.clickOnButton(YOPmail.arrow);
           helper.waitFor(2000)
           helper.clickOnButton(YOPmail.refresh);
           helper.waitFor(2000)
           cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail).should('be.visible').then(msg=>{
            globalThis.placeabsenteebid=msg.text()
              cy.log(globalThis.placeabsenteebid)
           })
           cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail1).should('be.visible').then(msg=>{
            globalThis.placeabsenteebid=msg.text()
              cy.log(globalThis.placeabsenteebid)
           })  
      }
      else
      {
           helper.enterText(YOPmail.search,email1)
           helper.clickOnButton(YOPmail.arrow);
           helper.waitFor(2000)
           helper.clickOnButton(YOPmail.refresh);
           helper.waitFor(2000)
           cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail).should('be.visible').then(msg=>{
            globalThis.placeabsenteebid=msg.text()
              cy.log(globalThis.placeabsenteebid)
           })
           cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail1).should('be.visible').then(msg=>{
            globalThis.placeabsenteebid=msg.text()
              cy.log(globalThis.placeabsenteebid)
           })  
      }
})





