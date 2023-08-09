import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import Profile from '../../../lib/ui/pageObjects/profile/index';
import { ProfilePage } from '../../locators/objectsRepository';
import Helper from '../../../lib/ui/pageObjects/common/helper';
const profile = new Profile();
const helper = new Helper();

Then(/^I verify '([^"]*)' message is displayed on profile page$/, (msg: string) => {
  profile.verifyMessage(msg);
});

When(/^I click on the '([^"]*)' link from profile page$/, (msg: string) => {
  helper.clickOnButton(ProfilePage.edit);
 });
 When(/^I updated data for each field on profile page$/, () => {
  profile.updatedEditProfile();
  
});
When(/^I updated username on profile page$/, () => {
  profile.updatedEmailidOnProfilePage();
  
});

When(/^I updated username on profile page with a exist username$/, () => {
  profile.updatedExistUsernameOnProfilePage();
  
});

When (/^I verify message is displayed on profile page$/ , () =>{
  const wait2k = 2000;
  helper.waitFor(wait2k);
profile.VerifyProfilePageMsg();
})

When(/^I verify user name is update at the place of display name at the top$/ , () => {
profile.VerifyUserName();
})

When(/^I undo the updated username on profile page$/, () => {
  profile.undoEmailidOnProfilePage();
  
});
