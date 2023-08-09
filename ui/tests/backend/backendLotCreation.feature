Feature: Backend login 
    As a superuser
    Autorised user should login and should be able to create, Edit, Delete Lot
    

@regression @qaBackend
Scenario: CM_COMP_LCM_1: Senario 1: BE - User should be able to click on Components menu and dropdown get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
        
@regression @qaBackend
Scenario: CM_COMP_LCM_2: Senario : BE-Verify that user able to click on Auction option from dropdown
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components

@regression @qaBackend
Scenario: CM_COMP_LCM_3: Senario : BE-Verify that user able to click on Lot option on left side then lot related option get display
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu

@regression @qaBackend
Scenario: CM_COMP_LCM_4: Senario : BE-Verify that User able to click New button then lot form get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I Click at 'New' button on user list page

@regression @qaBackend
Scenario: CM_COMP_LCM_5: Senario : BE-Verfiy that user able to see 4 tabs on lot form
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I Click at 'New' button on user list page
Then I verify '4' tabs are displaying in the lot form

@regression @qaBackend
Scenario: CM_COMP_LCM_6: Senario : BE-Verify that user not able to create lot when mandotary field are not provided
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I Click at 'New' button on user list page
Then I Click at 'Save' button without entering anything
Then I verify all error messages are display on lot form

@regression @qaBackend
Scenario: CM_COMP_LCM_7: Senario : BE-Verify that user not able to create lot when lot date give after auction closed
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I Click at 'New' button on user list page
Then I enter title field and dates 
Then I Click at 'Save' button without entering anything
Then I verify date error msg

@regression @qaBackend
Scenario: CM_COMP_LCM_8: Senario :BE-Verify that user not able to create lot when end date and extended date is not same
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I Click at 'New' button on user list page
Then I enter diffrent extended and end dates
Then I Click at 'Save' button without entering anything
Then I verify extended date should not be more then end date

@regression @qaBackend
Scenario: CM_COMP_LCM_9: Senario :BE-Verify that user not able to create lot when 'Lower Estimate INR' is greater than 'Higher Estimate INR' 
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I Click at 'New' button on user list page
Then I enter data to check lower should not be more the higher estimate
Then I Click at 'Save' button without entering anything
Then I verify lower should not be more the higher estimate

@regression @qaBackend
Scenario: CM_COMP_LCM_10: Senario :BE-Verify that user able to fill all mandotary details on Lot Details tab
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I Click at 'New' button on user list page
And I enter all mandotary field
Then I Click at Save button on lot form

@regression @qaBackend
Scenario: CM_COMP_LCM_11: BE-Verify that user able to click on 'Save and Close ' button then lot form get saved and closed
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I search lot by Search field on lot
And I click on search lot name
Then I click on Save and Close button on lot form
And I verfiy success message display on the lot form

@regression @qaBackend
Scenario: CM_COMP_LCM_12: BE-Verify that user able to click on 'Save and New' button then lot form get saved and open new lot form
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I search lot by Search field on lot
And I click on search lot name
Then I click on Save and New button on lot form
And I verfiy success message display on the lot form

@regression @qaBackend
Scenario: CM_COMP_LCM_13: BE-Verify that user able to click on 'Close' button then lot form get closed
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I search lot by Search field on lot
And I click on search lot name
And I click on Close button on lot form

@regression @qaBackend
Scenario: CM_COMP_LCM_14: BE-Verify that user able to trash the lot
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I click on Trash button for trash lot

@regression @qaBackend
Scenario: CM_COMP_LCM_15: BE-Verify that user able to search auction by Search field on lot
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I search auction by Search field on lot

@regression @qaBackend
Scenario: CM_COMP_LCM_16: BE-Verify that user able to see below options Select Auction Title, State, Select Lot Status when click on search tools
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I verify search tool options on lot

@regression @qaBackend
Scenario: CM_COMP_LCM_17: BE-Verify that user able to select auction title by Select Auction Title searching tool option on lot form
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I select auction title from Select Auction Title dropdown on lot

@regression @qaBackend
Scenario: CM_COMP_LCM_18: BE-Verify that user able to select state from State dropdown by using searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
When I click on Searchtool on lot
And I click on 'Published' menu on the State dropdown on lot and check it open the correct page
And I click on 'Trashed' menu on the State dropdown on lot and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_LCM_19: BE-Verify that user able to select lot status from select lot status dropdown by using searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
When I click on Searchtool on lot
And I click on 'Upcoming' menu on the Lot Status dropdown on lot and check it open the correct page
And I click on 'Live' menu on the Lot Status dropdown on lot and check it open the correct page
And I click on 'Sold' menu on the Lot Status dropdown on lot and check it open the correct page
And I click on 'Brought In' menu on the Lot Status dropdown on lot and check it open the correct page
And I click on 'Withdrawn' menu on the Lot Status dropdown on lot and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_LCM_20: BE-Verify that user able to clear search result when click on Clear button on lot
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I clear search result when click on Clear button on lot