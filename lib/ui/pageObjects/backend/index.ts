import Helper from '../common/helper';
import { Backendlogin} from '../../../../ui/locators/objectsRepository'
import * as user from '../../../../ui/fixtures/accounts.json';
const helper = new Helper();

class backend {

    entermandatoryfields(){
        helper.enterText(Backendlogin.formname,user.backendUser.formname);
        helper.enterText(Backendlogin.formLogin,user.backendUser.formname);
        helper.enterText(Backendlogin.formPassword,user.backendUser.formname); 
        helper.enterText(Backendlogin.formConformPasword,user.backendUser.formname); 
        helper.enterText(Backendlogin.formEmail,user.backendUser.formEmail); 
        helper.clickOnButton(Backendlogin.accessUserGroup);
        helper.clickOnButton(Backendlogin.bidderACL);
        helper.clickOnButton(Backendlogin.registerToBid);
        helper.enterText(Backendlogin.whatappNumber,user.backendUser.whatappnumber);
        helper.clickOnButton(Backendlogin.billingDetails);
        helper.enterText(Backendlogin.billName,user.backendUser.billName);
        helper.enterText(Backendlogin.billingAddress,user.backendUser.billAddress);
        helper.enterText(Backendlogin.country,user.backendUser.country);
        helper.enterText(Backendlogin.state,user.backendUser.state);
        helper.enterText(Backendlogin.city,user.backendUser.city);
        helper.enterText(Backendlogin.pin,user.backendUser.pin);
        helper.clickOnButton(Backendlogin.last);
        helper.clickOnButton(Backendlogin.termcondition);
        helper.clickOnButton(Backendlogin.save);           
}

SelectACL(){
    helper.clickOnButton(Backendlogin.accessUserGroup);
    helper.clickOnButton(Backendlogin.bidderACL);
    helper.clickOnButton(Backendlogin.supperUserACL);
    helper.clickOnButton(Backendlogin.derivazUser);
}




}
export default backend;
