import Helper from '../../common/helper';
import user from '../../../../../ui/fixtures/accounts.json';
import message from '../../../../../ui/fixtures/message.json';
import {
  RegistrationPage as _RegistrationPage,
  GeneralLocators,
  Mailinator,
  CommonChecks,
  Subscriber,
  YOPmail,
  Backendlogin,
  ProfilePage
} from '../../../../../ui/locators/objectsRepository';

const helper = new Helper();
class RegistrationPage {
signUpWithBlankfields(){
    
    helper.clickOnButton(_RegistrationPage.registerButton);

    helper.enterText(_RegistrationPage.email,user.new_registeration.password);
    helper.enterText(_RegistrationPage.password,user.user_updated_data.password);
    helper.containsText(_RegistrationPage.emailErrorMsg,message.addValidEmail)
   
    helper.enterText(_RegistrationPage.confirmPassword,user.user_updated_data.userEmail);
    helper.clickOnButton(_RegistrationPage.mobileNumber);
    helper.containsText(_RegistrationPage.invalidconformPassword,message.shouldSamePassword)
 
    helper.enterText(_RegistrationPage.mobileNumber,user.new_registeration.invalidMobile);
    helper.clickOnButton(_RegistrationPage.billingName) 
    helper.containsText(_RegistrationPage.inValidMobileNumber,message.shouldValidMobileNumber)
    
    helper.clickOnButton(_RegistrationPage.billingName)
    helper.clickOnButton(_RegistrationPage.billingAddress)
    helper.containsText(_RegistrationPage.billErrorMsg,message.fieldRequired)

    helper.clickOnButton(_RegistrationPage.billingAddress);
    helper.clickOnButton(_RegistrationPage.pincode);
    helper.containsText(_RegistrationPage.billAddressErrorMsg,message.fieldRequired)

    helper.support(_RegistrationPage.country).select('0: null',{force:true}).invoke("val").should('eq','0: null')
    helper.clickOnButton(_RegistrationPage.city);

    helper.support(_RegistrationPage.state).select('0: null',{force:true}).invoke("val").should('eq','0: null')
    helper.clickOnButton(_RegistrationPage.city);

    helper.clickOnButton(_RegistrationPage.pincode);
    helper.clickOnButton(_RegistrationPage.reference);   
    helper.containsText(_RegistrationPage.pincodeErrorMsg,message.fieldRequired)
  }
 
  signUp() {
    const random = new Date().toISOString().replace(/[-,:.]/g, '');
    const email=user.new_registeration.email+random+ '@yopmail.com';
    const username = user.new_registeration.username + random;
    helper.clickOnButton(_RegistrationPage.registerButton);
    helper.enterText(_RegistrationPage.email, email);
    helper.enterText(_RegistrationPage.username, username);
    helper.enterText(_RegistrationPage.password, user.new_registeration.password);
    helper.enterText(_RegistrationPage.confirmPassword, user.new_registeration.password);
    helper.enterText(_RegistrationPage.mobileNumber,user.new_registeration.mobilenumber);
    helper.enterText(_RegistrationPage.billingName,user.new_registeration.billingname);
    helper.enterText(_RegistrationPage.billingAddress,user.new_registeration.billingaddress); 
    helper.support(_RegistrationPage.country).select('105: IN',{force:true}).invoke("val").should('eq','105: IN')
    helper.support(_RegistrationPage.state).select('22: Maharashtra',{force:true}).invoke("val").should('eq','22: Maharashtra');
    helper.enterText(_RegistrationPage.city,user.new_registeration.city);
    helper.enterText(_RegistrationPage.pincode,user.new_registeration.pincode);
    helper.clickOnButton(_RegistrationPage.submit);
    helper.containsText(_RegistrationPage.notification, message.sucessfullRegistration);
    helper.writeFile(`${GeneralLocators.path}/email`, email);
  }

  signUpWithExitEmail()
  {
    helper.clickOnButton(_RegistrationPage.registerButton);
    helper.enterText(_RegistrationPage.email, user.qa.email);
    helper.enterText(_RegistrationPage.username, user.qa.username);
    helper.enterText(_RegistrationPage.password, user.new_registeration.password);
    helper.enterText(_RegistrationPage.confirmPassword, user.new_registeration.password);
    helper.enterText(_RegistrationPage.mobileNumber,user.new_registeration.mobilenumber);
    helper.enterText(_RegistrationPage.billingName,user.new_registeration.billingname);
    helper.enterText(_RegistrationPage.billingAddress,user.new_registeration.billingaddress);
    helper.enterText(_RegistrationPage.state,user.new_registeration.state);
    helper.enterText(_RegistrationPage.city,user.new_registeration.city);
    helper.enterText(_RegistrationPage.pincode,user.new_registeration.pincode);
    helper.selectDropdown(_RegistrationPage.country,user.new_registeration.country);
    helper.clickOnButton(_RegistrationPage.submit);
    helper.containsText(_RegistrationPage.notificationExistEmailId, message.existMailIDMsg);
  }
 
  getVarificationLinkFromMailinator() {
    const wait3k = 5000;
    helper.readFile(`${GeneralLocators.path}/email`).then(email => {
      helper.enterText(YOPmail.search, email);
      helper.clickOnButton(YOPmail.arrow);
      helper.waitFor(wait3k);   
      cy.iframe(YOPmail.bodyemail).find(YOPmail.findemail).should('be.visible').then(body => {
          const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
          const urls = body.text().match(urlRegex);
          let toBeVerified = urls.toString().split(',')[0].replace(/\\n/g, '');
          toBeVerified = toBeVerified.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
          helper.writeFile(`${GeneralLocators.path}/verificationLink`, toBeVerified);
        });           
});
  }

  verifyEmail() {
    helper.readFile(`${GeneralLocators.path}/verificationLink`).then(emailToBeVerified => {
      helper.openWebPage(''); 
      helper.openWebPage(emailToBeVerified, { failOnStatusCode: false });
     helper.containsText(_RegistrationPage.notification, message.sucessfullEmailVerification);
      // this line needs to removed once bugs is fix
      helper.clickOnButton(_RegistrationPage.cancelNotification);
    });
  }

  loginWithNewlyRegisteredUser() {
    helper.readFile(`${GeneralLocators.path}/email`).then(email => {
      helper.enterText(_RegistrationPage.username, email);
      helper.enterText(_RegistrationPage.password, user.new_registeration.password);
    });
  }

  getVarificationCodeFromMailinator() {
    const wait3k = 3000;
      let email = 'priyanka_sresetpassword'
      helper.enterText(Mailinator.search, email);
      helper.clickWithContains(Mailinator.go);
      helper.isVisible(Mailinator.inboxPanel);
      helper.isVisible(Mailinator.dataTable);
      helper.waitFor(wait3k);
      helper.support(Mailinator.findEmail).should(CommonChecks.beVisible).contains('password reset request').click();
      helper.clickOnButton(Mailinator.json);
      helper.support(Mailinator.emailBody).then(body => {
        const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
        const urls = body.text().match(urlRegex);
        let toBeVerified = urls.toString().split(',')[0].replace(/\\n/g, '');
        toBeVerified = toBeVerified.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
        helper.writeFile(`${GeneralLocators.path}/verificationLink1`, toBeVerified);
        
      });
  }
  
  verifyCode() {
    helper.openWebPage('');
    helper.readFile(`${GeneralLocators.path}/verificationLink1`).then(codeToBeVerified => {
      helper.openWebPage(codeToBeVerified, { failOnStatusCode: false });      
    });
    };

     getsubscriptionemailverificationtoken(){
      const wait3k = 5000;
      helper.readFile(`${GeneralLocators.path}/email`).then(email => {
      helper.enterText(YOPmail.search, email);
      helper.clickOnButton(YOPmail.arrow);
      helper.waitFor(wait3k); 
      cy.iframe(YOPmail.bodyemail).find(YOPmail.subscribelink).should('be.visible').contains(message.verfylink).invoke("attr", "target", "_self").click();
      helper.waitFor(wait3k);     
    });
    };

     verifyuserfrombackend(){
      helper.readFile(`${GeneralLocators.path}/email`).then(email => {
        helper.enterText(Backendlogin.searchbox, email);
        helper.clickOnButton(Backendlogin.searchIcone)
      })
     }
   
     deletesubscribeuserfrombackend(){
      helper.readFile(`${GeneralLocators.path}/email`).then(email => {
        helper.enterText(Backendlogin.searchbox, email);
        helper.clickOnButton(Backendlogin.searchIcone);
        cy.get(Backendlogin.selectuser).check();
        helper.clickOnButton(Backendlogin.userDelete)
      })
     }

     verifyregisteruserfrombackend(){
      helper.readFile(`${GeneralLocators.path}/email`).then(email => {
        helper.enterText(Backendlogin.searchbox, email);
        helper.clickOnButton(Backendlogin.searchIcone)
      })
     }

     deleteregisteruserfrombackend(){
      helper.readFile(`${GeneralLocators.path}/email`).then(email => {
        helper.enterText(Backendlogin.searchbox, email);
        helper.clickOnButton(Backendlogin.searchIcone);
        cy.get(Backendlogin.selectuser).check();
        helper.clickOnButton(Backendlogin.userDelete);
      })
     }

    hightestbidderemail(){
    helper.clickOnButton(ProfilePage.topUserName);
    helper.clickOnButton(ProfilePage.selectprofile);
    cy.wait(2000)
    helper.support(ProfilePage.email).then(email=>{
    email.text();
    globalThis.hbe=email.text();
    cy.log(globalThis.hbe)  
  })
     }

}

export default RegistrationPage;
