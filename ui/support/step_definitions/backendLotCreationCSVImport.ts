import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import Helper from '../../../lib/ui/pageObjects/common/helper';
import { Backendlots,LotcreateCSVImport} from '../../locators/objectsRepository';
import message from '../../fixtures/message.json';
import * as details from '../../fixtures/backendauctiondetails.json';

const helper = new Helper();

Then(/^I select auction from Select Auction Title dropdown$/,()=>{
     helper.clickOnButton(Backendlots.selectauctintitledropdwn);
     helper.enterText(Backendlots.searchauctiontitle,details.backendlotcreation.option);
     helper.clickOnButton(Backendlots.searchauctionlot);
})

Then(/^I click on Import CSV btn on lot dashboard$/,()=>{
    helper.xpath(`//a[normalize-space()='Import CSV']`).click();
})

Then(/^I click on Choose file button & import CSV on lot dashboard$/,()=>{
    const csv='automationlot.csv';
    cy.get(LotcreateCSVImport.choosefile).attachFile(csv);
    cy.get(LotcreateCSVImport.importcsv).click();
})

Then(/^I click on Import CSV button without selecting the CSV file$/,()=>{
    helper.clickOnButton(LotcreateCSVImport.importcsv);
    helper.containsText(LotcreateCSVImport.alertmsglotcsv,message.backend.csvimporterror);
})

Then(/^I select all lot under the selected auction$/,()=>{
    helper.clickOnButton(LotcreateCSVImport.selectalllots);
})

Then(/^I click on trash button on lot dashboard$/,()=>{
    helper.clickOnButton(LotcreateCSVImport.trashlot);
})