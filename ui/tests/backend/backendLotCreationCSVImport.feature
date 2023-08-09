Feature: Backend login 
    As a superuser
    Autorised user should login and should be able to import CSV for auction

@regression @qaBackend
Scenario:CM_COMP_LCI_1: Senario 1: BE - User should be able to click on Components menu and dropdown get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
        
@regression @qaBackend
Scenario: CM_COMP_LCI_2: Senario : BE-Verify that user able to click on Auction option from dropdown
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components

@regression @qaBackend
Scenario: CM_COMP_LCI_3: Senario : BE-Verify that user able to click on Lot option on left side then lot related option get display
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu

@regression @qaBackend
Scenario: CM_COMP_LCI_4: Senario : BE-Verify that user able to select auction from Select Auction Title dropdown
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I select auction from Select Auction Title dropdown

@regression @qaBackend
Scenario: CM_COMP_LCI_5: Senario : BE-Verify that user able to see popup when click on Import CSV button
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I select auction from Select Auction Title dropdown
Then I click on Import CSV btn on lot dashboard


@regression @qaBackend
Scenario: CM_COMP_LCI_5: Senario : BE-Verify that user able to import CSV when click on Import CSV button
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I select auction from Select Auction Title dropdown
Then I click on Import CSV btn on lot dashboard
And I click on Choose file button & import CSV on lot dashboard

@regression @qaBackend
Scenario: CM_COMP_LCI_6 : Senario : BE-Verify that user able to trash lot after CSV import
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I select auction from Select Auction Title dropdown
And I select all lot under the selected auction
Then I click on trash button on lot dashboard

@regression @qaBackend
Scenario: CM_COMP_LCI_7 : Senario : BE-Verify that user not able to import CSV when not select any file for import 
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I select auction from Select Auction Title dropdown
Then I click on Import CSV btn on lot dashboard
And I click on Import CSV button without selecting the CSV file