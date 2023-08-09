import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import LogIn from '../../../lib/ui/pageObjects/auth/loginPage';
import { CommonChecks, RegistrationPage } from '../../locators/objectsRepository';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import { LoginPage, Homepage} from '../../locators/objectsRepository';
import message from '../../fixtures/message.json'

const helper = new Helper();
const logIn = new LogIn();

Then(/^I verify '([^"]*)' is displayed on the login page$/, (webElement: string) => {
  logIn.verifyWebElement(webElement);
});

When(/^I type '([^"]*)' in the ([^"]*) text field on the login page$/, async (userInput: string, field: string) => {
  logIn.inputText(userInput, field);
});

When(/^I click on the '([^"]*)' button on the login page$/, async (button: string) => {
  logIn.clickWebElement(button);
});

Then(/^I verify '([^"]*)' message is displayed in the pop up on the login page$/, (message: string) => {
  helper.containsText(RegistrationPage.notification, message);
});

Then(/^I verify '([^"]*)' message is displayed in the profile page$/, (message: string) => {
  helper.containsText(RegistrationPage.bidderApproval, message);
});

Then(/^system should display '([^"]*)' error message$/, (message: string) => {
  helper.containsText(RegistrationPage.invalidemailidMsg, message);
});

When(/^I type valid username and password on the login page$/, () => {
  logIn.logIWithUsername();
});

When(/^I type valid admin username and password on the login page$/, () => {
  logIn.logIWithAdminUsername();
});

When(/^I type valid email and password on the login page$/, () => {
  logIn.logIWithEmail();
});

When(/^I type valid email and password on the login page for register pending user$/, () => {
  logIn.logIWithEmailForPendingUser();
});

When(/^I type invalid Email id on forgot password page$/, () => {
  logIn.enterInvalidEmailid();
});

When(/^I type correct email id on forgot password page$/, () => {
  logIn.enterValidEmailid();
});
 
Then(/^I verify title text is present in Verification Code page$/, () => {
 logIn.verifyCodeMsg();
  
})

When(/^I type valid bidder email and password on the login page$/, () => {
  logIn.logIWithBidder();
  
});

When(/^I type valid bidder email and password on the login page to update the mail id$/, () => {
  logIn.logIWithBidderToUpdateEmail();
  
});

When(/^I type old bidder user and password on the login page system did't allow to login$/, () => {
  logIn.logInWithOldEmailid();
  
});

When(/^I type valid bidder username and password on the login page with the update the mail id$/, () => {
  logIn.logIWithUpdateEmail();
  
});

When(/^I click on the '([^"]*)' link from login page$/, (link: string) => {
  helper.clickWithContains(link);
});

 When(/^I verify Forgot Your Password text is present in the forgot password page$/, () => {
    logIn.verifypassword();
  });

When(/^I log out from the website$/, () => {
  logIn.logOut();
});

Then(/^I type Password and invalid Verify Password on forgot password page$/,()=>{
   logIn.enterInvalidVerifyPassword();
});

Then(/^I type Password and verify password on forgot password page$/,()=>{
    logIn.enterResetPassword();
})

Then(/^I click on Reset password button on forgot password page$/,()=>{
  helper.clickOnButton(LoginPage.resetpassbutton);
})

Then(/^I see Passwords did not match message on forgot password page$/,()=>{
  helper.support(LoginPage.passwordnotmatch).then(notmatch=>{
   expect(notmatch.text().trim()).to.equals(message.auctionHeader.passnotmatch)
  })
})

Then(/^I see successful Reset password message on forgot password page$/,()=>{
   helper.support(LoginPage.successfulrestpass).then(successmessage=>{
    expect(successmessage.text().trim()).to.equals(message.auctionHeader.sucessfulresetpassword.trim());
   })
})

Then(/^I type superuser email id on forgot password page$/,()=>{
     logIn.enterSuperuserEmailid();
})

Then(/^I see validatation message on forgot password page$/,()=>{
     helper.support(LoginPage.superuservalidationmsg).then(validationmsg=>{
      expect(validationmsg.text().trim()).to.equals(message.auctionHeader.superusermsg)
     })
})

Then(/^I see Next button was disabled until enter the email address in Email Address textbox on login page$/,()=>{
    helper.support(LoginPage.nextButton)
    .should(CommonChecks.haveCss,CommonChecks.backgroundColor,message.auctionHeader.buttoncolornext)
});

Then(/^I click on the email address textbox on the login page$/,()=>{
  helper.clickOnButton(LoginPage.email)
})

Then(/^I click on the Next button on the forgetpwd page$/,()=>{
  helper.clickOnButton(LoginPage.nextforgetbtn)
})

Then(/^I click on the Next button on the login page$/,()=>{
   helper.clickOnButton(LoginPage.nextbuttonforgotpass)
})

Then(/^I see Email Required message on forgot password page$/,()=>{
  helper.support(LoginPage.emailrequiredmessage).then(emailmessage=>{
    expect(emailmessage.text().trim()).to.equals(message.auctionHeader.emailrequiredforgotpassmsg)
  })
})

Then(/^I click on the verification code textbox on the login page$/,()=>{
  helper.clickOnButton(LoginPage.verificationcodetextbox)
})

Then(/^I Click on the Next button on the login page$/,()=>{
   helper.clickOnButton(LoginPage.nextbuttonverificationcode)
})

Then(/^I see Verification code required message on forgot password page$/,()=>{
  helper.support(LoginPage.verificationcoderequiredmsg).then(verificationmsg=>{
    expect(verificationmsg.text().trim()).to.equals(message.auctionHeader.verificationcodeforfogotpassmsg)
  });
});

When(/^I type credential of user without having bidder access$/,() => {
  logIn.logInWithoutbidderaccess();

})
