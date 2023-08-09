import {Then } from "cypress-cucumber-preprocessor/steps";
import Helper from "../../../lib/ui/pageObjects/common/helper"; 
import {YOPmail, AuctionResults, liveauction, ProfilePage, Switchuser, LoginPage, Absenteebidopenstage } from "../../locators/objectsRepository";
import user from '../../fixtures/accounts.json';
import message from '../../fixtures/message.json';
import * as domain from '../../fixtures/domains.json';

const helper = new Helper();

Then(/^I verify absentee bid open stage notification mail on yopmail$/,()=>{
    helper.enterText(YOPmail.search,user.preview.email)
    helper.clickOnButton(YOPmail.arrow);
    helper.clickOnButton(YOPmail.refresh);
    cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidbulkmail).should('be.visible').then(msg=>{
     globalThis.notification=msg.text()
       cy.log(globalThis.notification)
    })
})

Then(/^I verify placed absentee bid mail on yopmail for preview$/,()=>{
  helper.enterText(YOPmail.search,user.preview.email)
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

Then(/^I verify delete absentee bid mail on yopmail for preview$/,()=>{
  helper.enterText(YOPmail.search,user.preview.email)
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

Then(/^I verify revise absentee bid mail on yopmail for preview$/,()=>{
  helper.enterText(YOPmail.search,user.preview.email)
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

Then(/^I verify availability of bid now button for dryrun$/,()=>{
  helper.support(Switchuser.profilename).then(user=>{
    const defaultuser = helper.getText(user)
   if (defaultuser === 'derivaz_and_ives_preview') 
   {
      
      helper.support(liveauction.bidbutton).then(buttonname=>{
      const mytext = helper.getText(buttonname)
        if (mytext === 'Bid Now') 
        {
           cy.log('Bid now button available')
        }
        else{
            helper.clickOnButton(ProfilePage.topUserName);
            helper.clickOnButton(ProfilePage.logout)
            helper.openWebPage('https://derivazpreview:xDc761HqZxJ5X68@preview.derivaz-ives.com/login', { failOnStatusCode: false }); 
            helper.enterText(LoginPage.username, 'Auto');
            helper.enterText(LoginPage.password, 'test2345');
            helper.clickOnButton(Switchuser.buttonlogin);
            cy.get(liveauction.newviewalllink1).click();
            let auctionnumber = liveauction.auctionnumber.replace('{number}', 'D&I.${999}')
            helper.clickWithContains(`D&I.999`)
            helper.containsText(liveauction.lotpage, message.auctionlive.lotpagestage);
            helper.verifyText(liveauction.bidbutton, message.auctionlive.bidnowbutton);
           }
        });
    }
   else{
     cy.log('user is guest')
       }
     });
})

Then(/^I verify counter bid mail on yopmail for preview$/,()=>{
  let email1=user.preview.email;
  let email2='auto@yopmail.com'
  let profile=globalThis.hbe
 if(profile===email1){
      helper.enterText(YOPmail.search,email2)
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
 }
 else
 {
      helper.enterText(YOPmail.search,email1)
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
 }
})

Then(/^I check My Absentee Bid text in lot list page$/,()=>{
  helper.support(liveauction.myabsenteebidtxt).then(txtmsg=>{
      expect(txtmsg.text().trim()).to.equals(message.auctionlive.myabsenteebid);
  });
})

Then(/^I check My Absentee Bid value on popup$/,()=>{
helper.clickOnButton(liveauction.myabsenteebidtxt);
helper.support(liveauction.myabsenteebidvalue).then(val=>{
 globalThis.valuesabsentee=val.text()
 cy.log(globalThis.valuesabsentee);
});
})

Then(/^I check availability of highest bidder for dryrun$/,()=>{
  helper.support(Switchuser.profilename).then(user=>{
    const defaultuser = helper.getText(user)
   if (defaultuser === 'derivaz_and_ives_preview') 
   {
      
      helper.support(liveauction.bidbutton).then(buttonname=>{
      const mytext = helper.getText(buttonname)
        if (mytext === ' You Are Currently The Highest Bidder ') 
        {
           cy.log('You Are Currently The Highest Bidder text available')
        }
        else{
            helper.clickOnButton(ProfilePage.topUserName);
            helper.clickOnButton(ProfilePage.logout)
            helper.openWebPage('https://derivazpreview:xDc761HqZxJ5X68@preview.derivaz-ives.com/login', { failOnStatusCode: false }); 
            helper.enterText(LoginPage.username, 'Auto');
            helper.enterText(LoginPage.password, 'test2345');
            helper.clickOnButton(Switchuser.buttonlogin);
            cy.get(liveauction.newviewalllink1).click();
            let auctionnumber = liveauction.auctionnumber.replace('{number}', 'D&I.${999}')
            helper.clickWithContains(`D&I.999`)
            helper.containsText(liveauction.lotpage, message.auctionlive.lotpagestage);
            helper.verifyText(liveauction.bidbutton, message.auctionlive.bidnowbutton);
           }
        });
    }
   else{
     cy.log('user is guest')
       }
     }); 
})

Then(/^I wait till the auction gets closed$/, () => {
  const checkCloseStatus = () => {
       helper.support(liveauction.lotclosedfordryrun).should('exist').then(btn=>{
            const mytext = helper.getText(btn)
                 cy.log(mytext);
                   if (mytext === 'Closed') 
                   {
                      cy.log('Lot is closed')
                   }
                   else{
                cy.log('Not closed yet');
                const waitTime = 40000; // Wait for 40 seconds
                helper.waitFor(waitTime);
                checkCloseStatus();
             }
       })

       }
       checkCloseStatus();
       })

Then(/^I verify availability of bid now button for selling price$/,()=>{
  helper.support(Switchuser.profilename).then(user=>{
    const defaultuser = helper.getText(user)
   if (defaultuser === 'derivaz_and_ives_preview') 
   {
      
      helper.support(liveauction.bidbuttonsellprice).then(buttonname=>{
      const mytext = helper.getText(buttonname)
        if (mytext === 'Bid Now') 
        {
           cy.log('Bid now button available')
        }
        else{
            helper.clickOnButton(ProfilePage.topUserName);
            helper.clickOnButton(ProfilePage.logout)
            helper.openWebPage('https://derivazpreview:xDc761HqZxJ5X68@preview.derivaz-ives.com/login', { failOnStatusCode: false }); 
            helper.enterText(LoginPage.username, 'Auto');
            helper.enterText(LoginPage.password, 'test2345');
            helper.clickOnButton(Switchuser.buttonlogin);
            cy.get(liveauction.newviewalllink1).click();
            let auctionnumber = liveauction.auctionnumber.replace('{number}', 'D&I.${999}')
            helper.clickWithContains(`D&I.999`)
            helper.containsText(liveauction.lotpage, message.auctionlive.lotpagestage);
            helper.verifyText(liveauction.bidbuttonsellprice, message.auctionlive.bidnowbutton);
           }
        });
    }
   else{
     cy.log('user is guest')
       }
     });
})

Then(/^I verify bidder user able see 'Bid Now' button is available on lot list page for selling price$/,()=>{
  helper.verifyText(liveauction.bidbuttonsellprice, message.auctionlive.bidnowbutton);
})

Then(/^I click on '([^"]*)' button from lot list page for selling price$/,(button: string)=>{
  helper.clickOnButton(liveauction.bidbuttonsellprice, button);
})

Then(/^I verify '([^"]*)' button gets appear in the popup for selling price$/,()=>{
  helper.verifyText(liveauction.bidplace, message.auctionlive.placebid);
})

Then(/^I click on Place Bid button for selling price$/,(button: string)=>{
  helper.clickOnButton(liveauction.bidplace, button)
})

Then(/^I verify bid gets placed successfully for selling price$/,()=>{
  helper.verifyText(liveauction.bidbuttonsellprice, message.auctionlive.highestbidder)
})

Then(/^I see Total Sale amount of lots in auctionresults page for preview$/,()=>{
  helper.clickOnButton(AuctionResults.listviewlotresult)
       let sum=0 , saleamt;
   helper.support(AuctionResults.totalrow).then(row=>{
       console.log(row.length);
       
  for( let i=1;i<=row.length;i++)
  {
       let childnum1 =AuctionResults.price1.replace('{i}',`${i}`)
           
            helper.support(childnum1).then(pricetext=>{
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

Then(/^I see sold lots in auctionresults page for preview$/,()=>{
  helper.clickOnButton(AuctionResults.listviewlotresult)
     let arr=[];
     
     helper.support(AuctionResults.totalrow).then(row=>{
          console.log(row.length);

     for(let k=1; k<=row.length; k++)
     {
          let childnum=AuctionResults.sellpricepreview.replace('{k}',`${k}`)
          
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

Then(/^I see top three selling price in auctionresults page for preview$/,()=>{
  helper.clickOnButton(AuctionResults.listviewlotresult)
          let arr=[];
          
          helper.support(AuctionResults.totalrow).then(row=>{
               console.log(row.length);
          for(let k=1; k<=row.length; k++)
          {
             
               let childnum=AuctionResults.sellpricepreview.replace('{k}',`${k}`)
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

Then(/^I launch the YOPmail website to check auction results stage notification$/,()=>{
  helper.openWebPage(domain.yopmail.url);
})

Then(/^I verify lot-won-notification mail on yopmail for preview$/,()=>{
  helper.enterText(YOPmail.search,'auto@yopmail.com')
  helper.clickOnButton(YOPmail.arrow);
  helper.clickOnButton(YOPmail.refresh);
  cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail).should('be.visible').then(winmsg=>{
   globalThis.winnermail=winmsg.text()
     cy.log(globalThis.winnermail)
  })
  cy.iframe(YOPmail.bodyemail).find(YOPmail.lotmsgresults).should('be.visible').then(lotmsg=>{
   globalThis.lotnum=lotmsg.text()
     cy.log(globalThis.lotnum)
  })
})

Then(/^I verify lot-lost-notification mail on yopmail for preview$/,()=>{
  helper.enterText(YOPmail.search,user.preview.email)
  helper.clickOnButton(YOPmail.arrow);
  helper.clickOnButton(YOPmail.refresh);
  cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail).should('be.visible').then(lostmsg=>{
   globalThis.lostemail=lostmsg.text()
     cy.log(globalThis.lostemail)
  })
  cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail1).should('be.visible').then(lotmsg=>{
   globalThis.lotnum=lotmsg.text()
     cy.log(globalThis.lotnum)
  })
})

Then(/^I verify availability of bid now button for min reserve price$/,()=>{
  helper.clickOnButton(ProfilePage.topUserName);
  helper.clickOnButton(ProfilePage.logout)
  helper.openWebPage('https://derivazpreview:xDc761HqZxJ5X68@preview.derivaz-ives.com/login', { failOnStatusCode: false }); 
  helper.enterText(LoginPage.username, 'sayaliauto');
  helper.enterText(LoginPage.password, 'sayaliauto');
  helper.clickOnButton(Switchuser.buttonlogin);
  cy.get(liveauction.newviewalllink1).click();
  let auctionnumber = liveauction.auctionnumber.replace('{number}', 'D&I.${999}')
  helper.clickWithContains(`D&I.999`)
  helper.containsText(liveauction.lotpage, message.auctionlive.lotpagestage);
  helper.verifyText(liveauction.bidbuttonreservedry, message.auctionlive.bidnowbutton);
  })
  
  Then(/^I verify bidder user able see 'Bid Now' button is available on lot list page for min reserve price$/,()=>{
    helper.verifyText(liveauction.bidbuttonreservedry, message.auctionlive.bidnowbutton);
  })
  
  Then(/^I click on '([^"]*)' button from lot list page for min reserve price$/,(button:string)=>{
    helper.clickOnButton(liveauction.bidbuttonreservedry, button);
  })
  
  Then(/^I verify '([^"]*)' button gets appear in the popup for min reserve price$/,()=>{
    helper.verifyText(liveauction.bidplace, message.auctionlive.placebid);
  })
  
  Then(/^I click on Place Bid button for min reserve price$/,(button:string)=>{
    helper.clickOnButton(liveauction.bidplace, button)
  })
  
  Then(/^I verify bid gets placed successfully for min reserve price$/,()=>{
    helper.verifyText(liveauction.bidbuttonreservedry, message.auctionlive.highestbidder)
  })

  Then(/^I verify minimum reserve not met notification mail on yopmail for preview$/,()=>{
    helper.enterText(YOPmail.search,'sayaliauto@yopmail.com')
    helper.clickOnButton(YOPmail.arrow);
    helper.clickOnButton(YOPmail.refresh);
    cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail).should('be.visible').then(lostmsg=>{
     globalThis.lostemail=lostmsg.text()
       cy.log(globalThis.lostemail)
    })
    cy.iframe(YOPmail.bodyemail).find(YOPmail.absenteebidmail1).should('be.visible').then(lotmsg=>{
     globalThis.lotnum=lotmsg.text()
       cy.log(globalThis.lotnum)
    })
  })

  Then(/^I click on the Place Absentee Bid button for lot number '([^"]*)' in grid view of lot list page by 2 bidder user$/,(lotNumber:string) => {
        cy.get('body').then(body => {
          if(body.find(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber)).length > 0){
            helper.clickOnButton(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber))
            helper.waitFor(5000)

            helper.openWebPage(domain.yopmail.url);
            helper.enterText(YOPmail.search,user.preview.email)
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
            helper.waitFor(5000)
            helper.openWebPage('https://derivazpreview:xDc761HqZxJ5X68@preview.derivaz-ives.com/login', { failOnStatusCode: false });   
          } 
          else{
            helper.clickOnButton(Absenteebidopenstage.deletebid.replace('{lotNumber}',lotNumber))
            
            helper.clickOnButton(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber))
            helper.waitFor(5000)
            }
        });
           helper.clickOnButton(ProfilePage.topUserName);
           helper.clickOnButton(ProfilePage.logout)
           helper.openWebPage('https://derivazpreview:xDc761HqZxJ5X68@preview.derivaz-ives.com/login', { failOnStatusCode: false }); 
           helper.enterText(LoginPage.username, 'Auto');
           helper.enterText(LoginPage.password, 'test2345');
           helper.clickOnButton(Switchuser.buttonlogin);
           cy.get(liveauction.newviewalllink1).click();
           let auctionnumber = liveauction.auctionnumber.replace('{number}', 'D&I.${999}')
           helper.clickWithContains(`D&I.999`)
           helper.clickOnButton(Absenteebidopenstage.placeabsenteebutton.replace('{lotNumber}',lotNumber))
           helper.waitFor(5000)    

           helper.openWebPage(domain.yopmail.url);
           helper.enterText(YOPmail.search,'auto@yopmail.com')
           helper.clickOnButton(YOPmail.arrow);
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
  });