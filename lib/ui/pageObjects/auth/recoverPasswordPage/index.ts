// import { ForgotPasswordPage } from '../../../../../ui/locators/objectsRepository';
import Helper from '../../common/helper';
import account from '../../../../../ui/fixtures/accounts.json';

const helper = new Helper();

class RecoverPasswordPage {
  // validateRecoverContent() {
  //   helper.isVisible(ForgotPasswordPage.resetYourPassword);
  //   helper.isVisible(ForgotPasswordPage.hintMessage);
  //   helper.isVisible(ForgotPasswordPage.backToSignIn);
  //   helper.isVisible(ForgotPasswordPage.registerSection);
  // }
  // setEmailAndSubmit(email: string) {
  //   helper.enterText(ForgotPasswordPage.emailField, email, { force: true });
  //   helper.clickOnButton(ForgotPasswordPage.resetPassword);
  // }
  // validateRecoveryProcessDescription() {
  //   helper.isVisible(ForgotPasswordPage.succesMessage);
  //   helper.isVisible(ForgotPasswordPage.spamLabel1);
  //   helper.isVisible(ForgotPasswordPage.spellingLabel2);
  //   helper.isVisible(ForgotPasswordPage.waitLabel3);
  // }
  // clickStartValidationButton() {
  //   helper.clickOnButton(ForgotPasswordPage.proceedToChangePassword);
  // }
  // validatePasswordChangeForm(email: string) {
  //   helper.isVisible(ForgotPasswordPage.resetHintMessage);
  //   helper.isPrefilled(ForgotPasswordPage.setEmailField, email);
  //   helper.isVisible(ForgotPasswordPage.code);
  //   helper.isEmpty(ForgotPasswordPage.newPassword);
  //   helper.isEmpty(ForgotPasswordPage.confirmNewPassword);
  //   helper.isVisible(ForgotPasswordPage.setNewPassword);
  // }
  // validateErrorForFakeCode() {
  //   let _password = account.fakeData.password;
  //   let _code = account.fakeData.code;
  //   helper.enterText(ForgotPasswordPage.newPassword, _password);
  //   helper.enterText(ForgotPasswordPage.confirmNewPassword, _password);
  //   helper.enterText(ForgotPasswordPage.code, _code);
  //   helper.clickOnButton(ForgotPasswordPage.setNewPassword);
  //   helper.verifyText(ForgotPasswordPage.error, 'Recovery code is incorrect');
  // }
}

export default RecoverPasswordPage;
