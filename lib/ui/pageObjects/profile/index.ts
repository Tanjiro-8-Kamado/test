import Helper from '../common/helper';
import { ProfilePage as profile } from '../../../../ui/locators/objectsRepository';
import { LoginPage as _LoginPage } from '../../../../ui/locators/objectsRepository';
import * as user from '../../../../ui/fixtures/accounts.json';
const helper = new Helper();

class ProfilePage {
  verifyMessage(msg: string) {
    let webElement: string;
    switch (msg) {
      case 'Register To Bid':
        webElement = profile.registertoBid;
        break;

      case 'Bidder Registration Pending':
        webElement = profile.bidderRegPending;
        break;

        case 'Edit Details':
          webElement = profile.editDetails;
          break;  
      
           default:
        throw Error('No case found');
    }
    helper.containsText(webElement, msg);
  }

  updatedEditProfile() {
    let password: string;
    helper.clickOnButton(profile.phone);
    cy.get(profile.phone).clear();
    helper.enterText(profile.phone,user.user_updated_data.phone);
    helper.enterText(profile.billName,user.user_updated_data.newName); 
    helper.enterText(profile.billingAddress,user.user_updated_data.billingAddress);
    helper.selectDropdown(profile.country, user.user_updated_data.country);
    helper.forceclick(profile.submitButton);   
   }
  
   updatedEmailidOnProfilePage() {
    helper.enterText(_LoginPage.username,user.user_updated_data.updatedUserName);
    helper.clickOnButton(profile.submitButton);  
    }
    
    updatedExistUsernameOnProfilePage() {
      helper.enterText(_LoginPage.username,user.qa.username);
      helper.clickOnButton(profile.submitButton);  
      }

    undoEmailidOnProfilePage(){
      helper.enterText(_LoginPage.username,user.user_updated_data.userName);
      helper.clickOnButton(profile.submitButton);  
    }
  VerifyUserName(){
      helper.support(profile.topUserName).then(title=>{
      expect(title.text().trim()).to.equals(user.user_updated_data.updatedUserName)
      })
  }
  VerifyProfilePageMsg(){
    helper.support(profile.bidderRegPending).then(title=>{
    expect(title.text().trim()).to.equals(user.qaregisterpending.approvalPending)
    })

  }
  }

export default ProfilePage;
