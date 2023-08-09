Feature: As a backend user able to see lot report

@regression @qaBackend
Scenario: CM_COMP_LR_1: BE-Verify that user able to click on Components menu then dropdown get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I verify system redirect in Auction page

@regression @qaBackend
Scenario: CM_COMP_LR_2: BE-Verify that user able to click on Lot report option on left side
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I click on Lot Report menu

@regression @qaBackend
Scenario: CM_COMP_LR_3: BE-Verify that user able to see Lot Title, Auction Title, Start Price, User, Bid Amount, Bid Date, Sold, Estimates Low, Estimates High, Start date this fields shows on Lots report
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Lot Report menu
Then I verfiy lot report header

@regression @qaBackend
Scenario: CM_COMP_LR_4: BE-Verify that user able to search lot by its name on search box
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Lot Report menu
Then I enter lot name in search box 
And I click on search 
And I verfiy with Lot Title to check correct lot search

@regression @qaBackend
Scenario: CM_COMP_LR_5: BE-Verify that user able to search lot by auction name on search box
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Lot Report menu
Then I Enter auction name in search box
And I click on search
And I verify with Auction Title to check correct auction search

@regression @qaBackend
Scenario: CM_COMP_LR_6: BE-Verify that user able to see below option- Select User, Select Auction Title, State, Select Lot status when click on search tool
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Lot Report menu
Then I verfiy search tool on Lot Report

@regression @qaBackend
Scenario: CM_COMP_LR_7: BE-Verify that user able to search lot by users
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Lot Report menu
Then I search lot by user
And I verfiy with User field to check correct user related lot open

@regression @qaBackend
Scenario: CM_COMP_LR_8: BE-Verify that user able to search lots by auction name 
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Lot Report menu
Then I search lot by auction name
And I verfiy with Auction Title field to check correct auction related lot open

@regression @qaBackend
Scenario: CM_COMP_LR_9: BE-Verify that user able to search lots by its state
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Lot Report menu
When I click on Searchtool
And I click on 'Published' menu on the State dropdown on lot report and check it open the correct page
And I click on 'Trashed' menu on the State dropdown on lot report and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_LR_10: BE-Verify that user able to search lots by lot status
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Lot Report menu
When I click on Searchtool
And I click on 'Upcoming' menu on the Lot Status dropdown on lot report and check it open the correct page
And I click on 'Live' menu on the Lot Status dropdown on lot report and check it open the correct page
And I click on 'Sold' menu on the Lot Status dropdown on lot report and check it open the correct page
And I click on 'Brought In' menu on the Lot Status dropdown on lot report and check it open the correct page
And I click on 'Withdrawn' menu on the Lot Status dropdown on lot report and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_LR_11: BE-Verify that user able to clear search result when click on Clear button
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Lot Report menu
Then I clear search lot result when click on Clear button

@regression @qaBackend
Scenario: CM_COMP_LR_12: BE-Verify that user able to check how many lots on search auction
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Lot Report menu
Then I search lot by auction name 
Then I check total lots in search auction

