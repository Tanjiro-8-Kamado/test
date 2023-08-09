import { When,Then } from "cypress-cucumber-preprocessor/steps";
import Helper from "../../../lib/ui/pageObjects/common/helper";
import { backendArticleCreation, Backendlogin } from "../../locators/objectsRepository";
import message from "../../fixtures/message.json";
import * as user from '../../fixtures/backendauctiondetails.json';
import backendarticle from '../../../lib/ui/pageObjects/backendarticlecreation/index';

const helper=new Helper();
const article=new backendarticle();

When(/^I click at Content Menu from backend dropdown open$/,()=>{
    helper.clickOnButton(backendArticleCreation.contentmenu);
    helper.containsText(backendArticleCreation.contentmenu,message.backendarticlecreation.contenttext)
})

When(/^I click at Articles Menu from Content menu$/,()=>{
    helper.clickOnButton(backendArticleCreation.articlemenu);
})

Then(/^I verify system redirect in Article page$/,()=>{
    helper.containsText(Backendlogin.admindashboard,message.backendarticlecreation.articletext);
})

Then(/^I click at New button on article list page$/,()=>{
    helper.clickOnButton(Backendlogin.newButton);
})

Then(/^I verify system redirect to new form$/,()=>{
    helper.containsText(Backendlogin.admindashboard,message.backendarticlecreation.articlenewtext);
})

Then(/^I verify Home page slider is displaying on frontend as per the created ariticle$/,()=>{
    // helper.isVisible(backendArticleCreation.slider);
    helper.containsText(backendArticleCreation.homepagetitle,user.backendarticlecreation.title);
    helper.containsText(backendArticleCreation.homepagenumber,user.backendarticlecreation.auctionNumber);
    helper.containsText(backendArticleCreation.homepageAuctionDate,user.backendarticlecreation.auctionDate);
    helper.containsText(backendArticleCreation.homepageAuctionStatus,user.backendarticlecreation.auctionStatus);    
})

Then(/^I verify 8 tabs are displaying in the article form$/,()=>{
    helper.support(backendArticleCreation.categorydropdown).select('14',{force:true}).invoke("val").should('eq','14');
    helper.containsText(backendArticleCreation.contenttab,message.backendarticlecreation.contenttext);
    helper.containsText(backendArticleCreation.imgandlinktab,message.backendarticlecreation.imglinktext);
    helper.containsText(backendArticleCreation.optiontab,message.backendarticlecreation.optionstext);
    helper.containsText(backendArticleCreation.fieldtab,message.backendarticlecreation.fieldtext);
    helper.containsText(backendArticleCreation.homepageslidertab,message.backendarticlecreation.homepageslidertext);
    helper.containsText(backendArticleCreation.publishtab,message.backendarticlecreation.publishtext);
    helper.containsText(backendArticleCreation.configeditscreentab,message.backendarticlecreation.configeditscrntext);
    helper.containsText(backendArticleCreation.permissiontab,message.backendarticlecreation.permissiontext);
})

Then(/^I click at Save button without entering any value to the article form$/,()=>{
    helper.clickOnButton(Backendlogin.save);
})

Then(/^I verify error message are display to the user on article creation$/,()=>{
    helper.containsText(backendArticleCreation.titleerror.replace('\n\t',' '),message.backendauctioncreation.titleerrormsg)
})

Then(/^I fill all mandotarty fields in the article form$/,()=>{
    article.enterfieldinarticle();
})

Then(/^I search article by Search field$/,()=>{
    helper.enterText(backendArticleCreation.articlesearch,user.backendarticlecreation.searcharticle);
    helper.clickOnButton(backendArticleCreation.searchsymbolarticle);
})

Then(/^I clear search article result when click on Clear button$/,()=>{
    helper.containsText(backendArticleCreation.cleararticlesearch,message.backendarticlecreation.clearbutton);
    helper.clickOnButton(backendArticleCreation.cleararticlesearch);
})

Then(/^I verify search tool options for article$/,()=>{
    helper.clickOnButton(backendArticleCreation.searchtoolarticle);
    helper.containsText(backendArticleCreation.selectstatustext,message.backendarticlecreation.selectstatustxt);
    helper.containsText(backendArticleCreation.selectlangtext,message.backendarticlecreation.selectlangtxt);
    helper.containsText(backendArticleCreation.selectmaxleveltext,message.backendarticlecreation.selectmaxleveltxt);
})

Then(/^I click on Search Tool option for article$/,()=>{
    helper.clickOnButton(backendArticleCreation.searchtoolarticle);
})

Then(/^I click on '([^"]*)' menu on the Select Status dropdown and check it open the correct page$/,async(redirectstatus:string)=>{
     article.verifystatus(redirectstatus);
})

Then(/^I click on '([^"]*)' menu on the Select Language dropdown and check it open the correct page$/,async(redirectlang:string)=>{
    article.verifylanguage(redirectlang);
})

Then(/^I click on '([^"]*)' menu on the Select Category dropdown and check it open the correct page$/,async(redirectcat)=>{
    article.verifycategoryarticle(redirectcat);
})

Then(/^I click on '([^"]*)' menu on the Select Access dropdown and check it open the correct page$/,async(redirectaccess:string)=>{
    article.verifyaccessaricle(redirectaccess);
})

Then(/^I click on '([^"]*)' menu on the Select Author dropdown and check it open the correct page$/,async(redirectauthor:string)=>{
    article.verifyauthor(redirectauthor);
})

Then(/^I click on '([^"]*)' menu on the Select Tag dropdown and check it open the correct page$/,async(redirecttag:string)=>{
    article.verfiytag(redirecttag);
})

Then(/^I select searched article and click on unpublish button$/,()=>{
    helper.clickOnButton(backendArticleCreation.selectarticle);
    helper.clickOnButton(backendArticleCreation.unpublisharticlebutton);
    helper.containsText(backendArticleCreation.alertmsgarticle,message.backendarticlecreation.unpublisharticle);
})

Then(/^I select searched article and click on publish button$/,()=>{
    helper.clickOnButton(backendArticleCreation.selectarticle);
    helper.clickOnButton(backendArticleCreation.publisharticlebutton);
    helper.containsText(backendArticleCreation.alertmsgarticle,message.backendarticlecreation.publisharticle);
})

Then(/^I click on Trash button for trash article$/,()=>{
    helper.enterText(backendArticleCreation.articlesearch,user.backendarticlecreation.title);
    helper.clickOnButton(backendArticleCreation.searchsymbolarticle);
    helper.clickOnButton(backendArticleCreation.selectarticle);
    helper.clickOnButton(backendArticleCreation.trasharticle);
    helper.containsText(backendArticleCreation.alertmsgarticle,message.backendarticlecreation.articletrash);
})

Then(/^Enter article name in search box$/,()=>{
    helper.enterText(backendArticleCreation.articlesearch,user.backendarticlecreation.searcharticle);
    helper.clickOnButton(backendArticleCreation.searchsymbolarticle);
})

Then(/^I click on article name$/,()=>{
    helper.clickOnButton(backendArticleCreation.searcharticleclick);
})

Then(/^I click on Save and Close button on article form$/,()=>{
    helper.clickOnButton(backendArticleCreation.saveandclosebtn);
})

Then(/^I verfiy success message display on the article form$/,()=>{
    helper.containsText(backendArticleCreation.alertmsgarticle,user.backendarticlecreation.articlesavemsg);
})

Then(/^I click on Save and New button on article form$/,()=>{
    helper.clickOnButton(backendArticleCreation.savenewarticle);
})

Then(/^I click on Close button on the article form$/,()=>{
    helper.clickOnButton(backendArticleCreation.cancelarticle);
})