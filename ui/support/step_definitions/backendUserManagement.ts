import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import * as user from '../../../ui/fixtures/accounts.json';
import { Backendlogin } from '../../locators/objectsRepository';
import message from '../../fixtures/message.json'
import backendUser from '../../../lib/ui/pageObjects/backend/index';


const helper = new Helper();
const backend = new backendUser()

  When(/^I click at '([^"]*)' Menu from backend dropdown open$/,async (button: string) => {
    helper.clickOnButton(Backendlogin.userMenu);
  });

  When(/^I click at '([^"]*)' Menu in user menu$/,async (button: string) => {
    helper.clickOnButton(Backendlogin.userManagement);
  });
  
  Then(/^I verify system redirect in Users page$/,()=>{
    helper.support(Backendlogin.admindashboard).then(menu=>{
     expect(menu.text().trim()).to.equals(message.backend.userPage)
    })
  })

 Then(/^I Click at '([^"]*)' button on user list page$/,async (button: string) => {
  helper.clickOnButton(Backendlogin.newButton);
 });

 Then(/^I Click at '([^"]*)' button without entering anything$/,async (button: string) => {
  helper.clickOnButton(Backendlogin.save);
 });

 When(/^I fill the all required fields$/, () => {
 backend.entermandatoryfields();  
});

Then(/^I Check all the necessary user group$/, () => {
  backend.SelectACL();  
 });
 
Then(/^I verify success message is displaying on form$/,()=>{
  helper.support(Backendlogin.errormsg).then(successmsg=>{
    expect(successmsg.text().trim()).to.equals(message.backend.userSave)
})
})
Then(/^I verify user should not be able to save do to message is displaying on form$/,()=>{
  helper.support(Backendlogin.errormsg).then(successmsg=>{
    expect(successmsg.text().trim()).to.equals(message.backend.errormsgForSameUserName)
})
})

Then(/^Enter username in serach box$/, () => {
 helper.enterText(Backendlogin.searchbox,user.backendUser.formname);
 helper.clickOnButton(Backendlogin.searchIcone);
 });
 
Then(/^I click at enabled icon to disabled the user$/, () =>{
  helper.clickIfVisible(Backendlogin.disableUser);
});

Then(/^I click at disabled icone to enabled the user$/, () =>{
  helper.clickIfVisible(Backendlogin.enableUser);
});

Then(/^I verify the message displaying that user is disabled$/,()=>{
  helper.support(Backendlogin.errormsg).then(disabledUser=>{
    expect(disabledUser.text().trim()).to.equals(message.backend.userDisable)
})
})

Then(/^I verify the message displaying that user is enabled$/,()=>{
  helper.support(Backendlogin.errormsg).then(enabledUser=>{
    expect(enabledUser.text().trim()).to.equals(message.backend.userEnable)
})
})


Then(/^I click at username$/, () =>{
  helper.clickIfVisible(Backendlogin.searchUsername);
});

Then(/^I click at username checkbox and delete the user$/, () =>{
  helper.clickIfVisible(Backendlogin.userCheckbox);
  helper.clickOnButton(Backendlogin.userDelete);
})

Then(/^I click at save and close button$/, () =>{
  helper.clickOnButton(Backendlogin.saveClose);
});

Then(/^I click at save and new button$/, () =>{
  helper.clickOnButton(Backendlogin.saveNew);
});
Then(/^I click at closed button$/, () =>{
  helper.clickOnButton(Backendlogin.closedButton);
});

Then(/^I edit the password and confirm password$/, () =>{
  helper.enterText(Backendlogin.formPassword,user.backendUser.formname); 
  helper.enterText(Backendlogin.formConformPasword,user.backendUser.formname);
  helper.clickOnButton(Backendlogin.save);  
  });

 Then(/^I verify System redirect to new form$/,()=>{
  helper.support(Backendlogin.admindashboard).then(menu=>{
   expect(menu.text().trim()).to.equals(message.backend.newUserForm)
  })
})

Then(/^I click at '([^"]*)' button without entering any value to the form$/,async (button: string) => {
  helper.clickOnButton(Backendlogin.save);
 });

 Then(/^I verify all error messages are display to the user$/,()=>{

      helper.containsText(Backendlogin.nameErrormsg.replace('\n\t',''),message.backend.nameErrormsg)
      helper.containsText(Backendlogin.loginNameErrormsg.replace('\n\t',''),message.backend.loginNameErrormsg)
      helper.containsText(Backendlogin.whatappErrormsg.replace('\n\t',''),message.backend.whatappErrormsg)
      helper.containsText(Backendlogin.emailErrormsg.replace('\n\t',''),message.backend.emailErrormsg)  
      helper.containsText(Backendlogin.billErrormsg.replace('\n\t',''),message.backend.billErrormsg)  
      helper.containsText(Backendlogin.billaddressErrormsg.replace('\n\t',''),message.backend.billaddressErrormsg)  
      helper.containsText(Backendlogin.countryErrormsg.replace('\n\t',''),message.backend.countryErrormsg) 
      helper.containsText(Backendlogin.stateErrormsg.replace('\n\t',''),message.backend.stateErrormsg)  
      helper.containsText(Backendlogin.pinErrormsg.replace('\n\t',''),message.backend.pinErrormsg)  
      helper.containsText(Backendlogin.agreeErrormsg.replace('\n\t',''),message.backend.agreeErrormsg)  

  })

 Then(/^I verify '([^"]*)' tabs are displaying in the form$/,async (button: string)=>{
  helper.support(Backendlogin.accountDetails).then(menu=>{
   expect(menu.text().trim()).to.equals(message.backend.accountDetails)
  })
  helper.support(Backendlogin.accessUserGroup).then(menu=>{
    expect(menu.text().trim()).to.equals(message.backend.accessUserGroup)
   })
   helper.support(Backendlogin.basicSetting).then(menu=>{
    expect(menu.text().trim()).to.equals(message.backend.basicSetting)
   })
   helper.support(Backendlogin.fields).then(menu=>{
    expect(menu.text().trim()).to.equals(message.backend.fields)
   })
   helper.support(Backendlogin.registerToBid).then(menu=>{
    expect(menu.text().trim()).to.equals(message.backend.registerToBid)
   })
   helper.support(Backendlogin.billingDetails).then(menu=>{
    expect(menu.text().trim()).to.equals(message.backend.billingDetails)
   })
   helper.support(Backendlogin.reference).then(menu=>{
    expect(menu.text().trim()).to.equals(message.backend.reference)
   })
   helper.support(Backendlogin.last).then(menu=>{
    expect(menu.text().trim()).to.equals(message.backend.last)
   })
   
})
