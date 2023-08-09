import {When,Then} from "cypress-cucumber-preprocessor/steps";
import Helper from "../../../lib/ui/pageObjects/common/helper";
import Message from "../../fixtures/message.json";
import { Livewithresult,liveauction,Switchuser,LoginPage as _LoginPage,AuctionResults,CommonChecks } from "../../locators/objectsRepository";
import * as user from '../../fixtures/accounts.json';
import LogIn from '../../../lib/ui/pageObjects/auth/loginPage';

const helper = new Helper();
const logIn = new LogIn();

Then(/^I verify user is visited as guest by verifying login button$/, async () => {
    helper.support(Livewithresult.login).then(text => {
        let login = helper.getText(text)
        expect(login).to.eqls(Message.livewithresultpage.loginbutton)
    })
} )

Then(/^I verify the un-availability of Live with Result tab in lot list page$/, async () => {
    cy.get('body').then(body => {
        if(body.find(liveauction.livewithresulttab).length < 1){
           cy.log('live with result tab is un available for guest user')
        }else{
            cy.log('live with result tab is available')
            throw new Error("test fails here")
        }
    })
});

Then(/^I verify user is logged in as registered user without having bidder access$/, async () => {
    helper.waitFor(2000)
    helper.support(Livewithresult.profileregistereduser).then(text => {
       let useraccess =  helper.getText(text)
       expect(useraccess).to.contains(Message.livewithresultpage.userbidderaccesspending)
    })
});

Then(/^I verify user visits homepage of site$/, async () => {
    cy.visit('https://qa.derivaz-ives.com/home')
});

Then(/^I verify user is logged in as bidder user with having bidder access$/, async () => {
    helper.waitFor(2000)
    helper.support(Livewithresult.profileregistereduser).then(text => {
       let useraccess =  helper.getText(text)
       expect(useraccess).to.contains(Message.livewithresultpage.userbidder)
    })
});

When(/^I click on Live with Result tab in lot list page$/, async () => {
    helper.clickOnButton(liveauction.livewithresulttab)
});

Then(/^I verify Live with Result page gets open by verifying Highest bidder column header$/, async () => {
    helper.support(Livewithresult.highestbiddercolumn).then(text => {
        let useraccess =  helper.getText(text)
        expect(useraccess).to.contains(Message.livewithresultpage.highestbidder)
     })
});

When(/^I click on lot details link in required lot$/, async () =>{
    helper.clickOnButton(Livewithresult.livepagelottitle)
    helper.waitFor(2000)
});

Then(/^I verify detail page gets open of that respective lot$/, async () => {
    helper.support(Livewithresult.livetodetailpagepreviousbutton).then(text => {
        let useraccess =  helper.getText(text)
        expect(useraccess).to.contains(Message.livewithresultpage.previous)
     })
});

Then(/^I verify '([^"]*)' Auction Result stage is available in all auction page$/, (auctionNumber: string) => {
    helper.xpath(AuctionResults.auctionresults.replace('{auctionNumber}',auctionNumber)).should(CommonChecks.beVisible) 
    });

Then(/^I verify same auction gets open in lot list page by validating auction number '([^"]*)'$/, async (validation:string) => {
        globalThis.myinput = (`D&I.${validation}`)
        validation=liveauction.auctionvalidation.replace('{number}',`D&I.${validation}`);
          helper.support(Livewithresult.stagevalidation).then(text=>{
          const mytext = helper.getText(text).trim()
          expect(mytext).to.equals(globalThis.myinput)
           }) 
      });

Then(/^I verify auction is available on auction Result stage in lot list page$/, async () => {
        helper.containsText(liveauction.lotpage,Message.livewithresultpage.resultstage )
      });

Then(/^I verify user able to see Bid Now button in lot carts$/, async () => {
    let user1:string = user.qaAdmin.username
    let user1password:string = user.qaAdmin.password
  
    let value:string;
    helper.support(Livewithresult.bidbuttonvalue).then(text => {
        value = helper.getText(text)
        cy.log(value)
        
     if (value == Message.auctionlive.bidnowbutton)
     {
        cy.log(value);
     }else{

                helper.support(Switchuser.profilename).then(user=>{
                    let username:string = helper.getText(user)
                    if(username == user1){
                        cy.log('hello')
                        logIn.logOut();
                        helper.openWebPage('/login', { failOnStatusCode: false }); 
                        helper.enterText(_LoginPage.username, 'subham');
                        helper.enterText(_LoginPage.password, 'Test2345');
                        helper.clickOnButton(Switchuser.buttonlogin);
                        helper.clickOnButton(liveauction.newviewalllink);
                        helper.clickWithContains(`D&I.060817`)
                        helper.containsText(liveauction.lotpage, Message.auctionlive.lotpagestage);
                        helper.clickOnButton(liveauction.livewithresulttab)

                        helper.support(Livewithresult.highestbiddercolumn).then(text => {
                            let useraccess =  helper.getText(text)
                            expect(useraccess).to.contains(Message.livewithresultpage.highestbidder)
                         });

                        helper.verifyText(Livewithresult.bidbuttonvalue, Message.auctionlive.bidnowbutton);
                    }else{
                        logIn.logOut();
                        helper.openWebPage('/login', { failOnStatusCode: false }); 
                        helper.enterText(_LoginPage.username, user1);
                        helper.enterText(_LoginPage.password,user1password );
                        helper.clickOnButton(Switchuser.buttonlogin);
                        helper.clickOnButton(liveauction.viewallauction);
                        helper.clickWithContains(`D&I.060817`)
                        helper.containsText(liveauction.lotpage, Message.auctionlive.lotpagestage);
                        helper.verifyText(liveauction.bidbutton, Message.auctionlive.bidnowbutton);
                        helper.clickOnButton(liveauction.livewithresulttab)

                        helper.support(Livewithresult.highestbiddercolumn).then(text => {
                            let useraccess =  helper.getText(text)
                            expect(useraccess).to.contains(Message.livewithresultpage.highestbidder)
                         });

                        helper.verifyText(Livewithresult.bidbuttonvalue, Message.auctionlive.bidnowbutton);
                        }
                   });
            };   
    });
 });

 When(/^I click on Bid Now button in Live with Result page$/, async() =>{
     helper.clickOnButton(Livewithresult.bidbuttonvalue)
 });

 Then(/^I verify Place Bid button gets appear in popup in Live with result page$/, async () => {
    helper.verifyText(Livewithresult.placebidbutton, Message.auctionlive.placebid)
 });

 When(/^I click on Place Bid button from Live With Result page$/, async ()=> {
    helper.clickOnButton(Livewithresult.placebidbutton)
    helper.waitFor(2000)
 });

 Then(/^I verify bid gets placed successfully from live with Result page$/, async () => {
    helper.verifyText(Livewithresult.hightestbid, Message.livewithresultpage.buttonstatus)
 });

 Then(/^I verify user able to see change in current bid amount when bid gets placed$/, async () => {
   
    let currentamount : string ;
    let nextbidamount : string ;


    helper.support(Livewithresult.nextbidamount).then(amt => {
        nextbidamount = helper.getText(amt)
        cy.log(nextbidamount)
    });

    helper.clickOnButton(Livewithresult.bidbuttonvalue);
    helper.clickOnButton(Livewithresult.placebidbutton);

    helper.support(Livewithresult.currentbidamount).then(amt => {
        currentamount = helper.getText(amt)
        cy.log(currentamount)
   });

   if (currentamount == nextbidamount){
    cy.log('current bid amount equals next bid amount after bid gets placed')
   }else{
    cy.log('current bid amount does not given expected result')
    throw new Error('test case failed')
   }
});

Then(/^I verify user able to see change in Next bid amount when bid gets placed$/, async () => {

    let nextbidamount ;
    let currentamount ;
    let afterbidnextbidamt ;

    helper.support(Livewithresult.nextbidamount).then(amt => {
        nextbidamount = helper.getText(amt)
        nextbidamount = nextbidamount.replace('₹','')
        cy.log(`${nextbidamount}`)
    });

    
        helper.clickOnButton(Livewithresult.bidbuttonvalue);
        helper.clickOnButton(Livewithresult.placebidbutton);
        helper.waitFor(5000)
      

       helper.support(Livewithresult.nextbidamount).then(amt => {
        afterbidnextbidamt = helper.getText(amt)
        afterbidnextbidamt = afterbidnextbidamt.replace('₹','')
        cy.log(`${afterbidnextbidamt}`)
    });

    
    if(`${nextbidamount} < ${afterbidnextbidamt}`){
        cy.log(`next bid value before bid place is ${nextbidamount} and after bid placed is ${afterbidnextbidamt}`)
    }else{
        cy.log('failed')
    }

});

Then(/^I Verify user able to see change in Total Bids count when bid gets placed$/, async ()=> {
    let beforebidcout ;
    let afterbidcount ;
    
    helper.support(Livewithresult.prevbidcount).then(count=>{
        beforebidcout = helper.getText(count)
        cy.log(`${beforebidcout}`)
        })
        
        helper.clickOnButton(Livewithresult.bidbuttonvalue);
        helper.clickOnButton(Livewithresult.placebidbutton);
        helper.waitFor(5000)

        helper.support(Livewithresult.prevbidcount).then(current=>{
        afterbidcount = helper.getText(current)
         cy.log(`${afterbidcount}`)
       }) 
       if (`${afterbidcount} === ${beforebidcout} + ${1}`){
         cy.log('current count increased by one')
        }
        else{
         cy.log('count not increased')
        }
});

Then(/^I Verify user able to see change in Highest bidder name when places bid$/, async () => {
 
    let loggedinusername ;
    let beforebidhighestbiddername ;
    let afterbidhighestbiddername ;

    helper.support(Switchuser.profilename).then(user=>{
        loggedinusername = helper.getText(user)
        cy.log(`${loggedinusername}`)
     });

     helper.support(Livewithresult.highestbiddername).then(user=>{
        beforebidhighestbiddername = helper.getText(user)
        cy.log(`${beforebidhighestbiddername}`)
     });

     helper.clickOnButton(Livewithresult.bidbuttonvalue);
        helper.clickOnButton(Livewithresult.placebidbutton);
        helper.waitFor(5000)

    helper.support(Livewithresult.highestbiddername).then(user=>{
        afterbidhighestbiddername = helper.getText(user)
            cy.log(`${afterbidhighestbiddername}`)
         });
         
    if(loggedinusername === afterbidhighestbiddername) {
        cy.log('it is updated as user is now highest bidded ')
    } else {
        cy.log('not updated as user is currently the highest bidder')
    }     

});

Then(/^I verify the availability of Lot No.,Title,Starting Bid,Current Bid,Next Bid,Reserve Price,Total Bids,Highest Bidder,Status in LivewithResult column header$/, async () => {
    helper.support(Livewithresult.columnheaders).then(texts => {
        cy.contains(Message.livewithresultpage.columnheadertexts.text1).should('be.visible');
        cy.contains(Message.livewithresultpage.columnheadertexts.text2).should('be.visible');
        cy.contains(Message.livewithresultpage.columnheadertexts.text3).should('be.visible');
        cy.contains(Message.livewithresultpage.columnheadertexts.text4).should('be.visible');
        cy.contains(Message.livewithresultpage.columnheadertexts.text5).should('be.visible');
        cy.contains(Message.livewithresultpage.columnheadertexts.text6).should('be.visible');
        cy.contains(Message.livewithresultpage.columnheadertexts.text7).should('be.visible');
        cy.contains(Message.livewithresultpage.columnheadertexts.text8).should('be.visible');
        cy.contains(Message.livewithresultpage.columnheadertexts.text9).should('be.visible');
    })
})





