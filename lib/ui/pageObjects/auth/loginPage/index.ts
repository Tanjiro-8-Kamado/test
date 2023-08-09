/// <reference types="cypress" />
import { Backendlogin as _backend, LoginPage as _LoginPage } from '../../../../../ui/locators/objectsRepository';
import Helper from '../../common/helper';
import user from '../../../../../ui/fixtures/accounts.json';
import * as alias from '../../../../../ui/fixtures/alias.json';
import message from '../../../../../ui/fixtures/message.json';

const helper = new Helper();
const env = helper.getEnvironment();

class LoginPage {
    static username(username: any, arg1: string) {
        throw new Error("Method not implemented.");
    }
  verifyWebElement(webElement: string) {
    switch (webElement.toLocaleLowerCase()) {
      case 'login form':
        webElement = _LoginPage.loginForm;
        break;
        default:
        throw Error('No case found');
    }
    helper.isVisible(webElement);
  }

  inputText(userInput: string, field: string) {
    switch (userInput) {
      case 'username':
        field = _LoginPage.username;
        userInput = user.qa.email;
        break;

      case 'password':
        field = _LoginPage.password;
        userInput = user.qa.password;
        break;

      case 'invalid username':
        field = _LoginPage.username;
        userInput = user.invalid.username;
        break;

      case 'invalid password':
        field = _LoginPage.password;
        userInput = user.invalid.password;
        break;

      default:
        throw Error('No case found');
    }
    helper.enterText(field, userInput);
  }

  clickWebElement(webElement: string) {
    switch (webElement.toLocaleLowerCase()) {
      case 'login':
        webElement = _LoginPage.loginButton;
        break;
      case 'password':
        webElement = _LoginPage.password;
        break;
      case 'next':
        webElement = _LoginPage.nextButton;
         break;
     
        default:
        throw Error('No case found');
    }
    helper.clickOnButton(webElement);
  }

  logIWithUsername() {
    let username: string;
    if (env === 'qa') {
      username = user.qa.username;
    } else {
      username = user.prod.username;
    }
    globalThis.username = username;
    helper.enterText(_LoginPage.username, username);
    helper.enterText(_LoginPage.password, user.qa.password);
  }

  logIWithAdminUsername() {
    let username: string;
    if (env === 'qa') {
      username = user.qaAdmin.username;
    } else {
      username = user.prod.username;
    }
    globalThis.username = username;
    helper.enterText(_LoginPage.username, username);
    helper.enterText(_LoginPage.password, user.qaAdmin.password);
  }

  logInWithbackendUsername() {
    let username: string;
    if (env === 'qa') {
      username = user.qaAdmin.username;
    } else {
      username = user.prod.username;
    }
    globalThis.username = username;
    helper.enterText(_LoginPage.usernameAdmin, username);
    helper.enterText(_LoginPage.passwordAdmin, user.qaAdmin.password);
  }

  logInbackendWithRegisterUsername() {
    let username: string;
    if (env === 'qa') {
      username = user.qaregisterpending.username;
    } else {
      username = user.prod.username;
    }
    globalThis.username = username;
    helper.enterText(_LoginPage.usernameAdmin, username);
    helper.enterText(_LoginPage.passwordAdmin, user.qaregisterpending.password);
  }

  logInbackendWithBidderUsername() {
    let username: string;
    if (env === 'qa') {
      username = user.qabidder.username;
    } else {
      username = user.prod.username;
    }
    globalThis.username = username;
    helper.enterText(_LoginPage.usernameAdmin, username);
    helper.enterText(_LoginPage.passwordAdmin, user.qabidder.password);
  }

  logIWithbackendUsernameOnly() {
    let username: string;
    if (env === 'qa') {
      username = user.qaAdmin.username;
    } else {
      username = user.prod.username;
    }
    globalThis.username = username;
    helper.enterText(_LoginPage.usernameAdmin, username);
    }

    logIWithbackendPasswordOnly() {
      let username: string;
      if (env === 'qa') {
        username = user.qaAdmin.username;
      } else {
        username = user.prod.username;
      }
      globalThis.username = username;
      helper.enterText(_LoginPage.passwordAdmin, user.qaAdmin.password);
      }

  logIWithEmail() {
    let email: string;
    if (env === 'qa') {
      email = user.qa.username;
    } else {
      email = user.prod.email;
    }
    helper.enterText(_LoginPage.username, email);
    helper.enterText(_LoginPage.password, user.qa.password);
  }
  
  logIWithEmailForPendingUser() {
    let email: string;
    if (env === 'qa') {
      email = user.qaregisterpending.email;
    } else {
      email = user.prod.email;
    }
    helper.enterText(_LoginPage.username, email);
    helper.enterText(_LoginPage.password, user.qaregisterpending.password);
  } 

  enterInvalidEmailid(){
    helper.enterText(_LoginPage.email,user.user_updated_data.invalidemail);
 }

 enterValidEmailid(){
  helper.enterText(_LoginPage.email,user.user_updated_data.emailForResetPassword);
}

 enterInvalidVerifyPassword(){
  helper.enterText(_LoginPage.newpassword,user.user_updated_data.resetpassword);
  helper.enterText(_LoginPage.confirmnewpassword,user.user_updated_data.invalidresetvpassword);
 }

 enterInvalidBackendCredintial(){
  helper.enterText(_backend.username,user.user_updated_data.resetpassword);
  helper.enterText(_backend.password,user.user_updated_data.invalidresetvpassword);
 }

 enterResetPassword(){
  helper.enterText(_LoginPage.newpassword,user.user_updated_data.resetpassword);
  helper.enterText(_LoginPage.confirmnewpassword,user.user_updated_data.resetvpassword);
 }

 enterSuperuserEmailid()
 {
  helper.enterText(_LoginPage.email,user.user_updated_data.superuseremail);
 }

  logIWithBidder() {
    let email: string;
    if (env === 'qa') {
      email = user.qabidder.email;
    } else {
      email = user.prod.email;
    }
    helper.enterText(_LoginPage.username, email);
    helper.enterText(_LoginPage.password, user.qabidder.password);
  }

  logIWithBidderToUpdateEmail(){
    let email: string;
    if (env === 'qa') {
      email = user.user_updated_data.userName;
    } else {
      email = user.prod.email;
    }
    helper.enterText(_LoginPage.username, email);
    helper.enterText(_LoginPage.password, user.user_updated_data.password);
  }

  logIWithUpdateEmail(){
    let email: string;
    if (env === 'qa') {
      email = user.user_updated_data.updatedUserName;
    } else {
      email = user.prod.email;
    }
    helper.enterText(_LoginPage.username, email);
    helper.enterText(_LoginPage.password, user.user_updated_data.password);
  }
  
  logInWithOldEmailid(){
    let email: 
    string;
    if (env === 'qa') {
      email = user.user_updated_data.userName;
    } else {
      email = user.prod.email;
    }
    helper.enterText(_LoginPage.username, email);
    helper.enterText(_LoginPage.password, user.user_updated_data.password);
  }
  verifypassword(){
    helper.support(_LoginPage.forgotYourPassword).then(title=>{
      expect(title.text().trim()).to.equals(message.passwordText)
      })    
   }
verifyCodeMsg(){
   helper.support(_LoginPage.verificationCodeMsg).then(title=>{
    expect(title.text().trim()).to.equals(message.verifycodeMsg)
    }) 
}

  logOut() {
    helper.openWebPage(alias.logout, { failOnStatusCode: false });
  }
  
  refreshupdate(){
    helper.clickOnButton(_LoginPage.refreshdeploy, 'Refresh')
  }

  logInWithoutbidderaccess() {
    let username: string;
    if (env === 'qa') {
      username = user.qabidderverificationpending.username;
    } else {
      username = user.prod.username;
    }
    globalThis.username = username;
    helper.enterText(_LoginPage.username, username);
    helper.enterText(_LoginPage.password, user.qabidderverificationpending.password);
  }
}

export default LoginPage;
