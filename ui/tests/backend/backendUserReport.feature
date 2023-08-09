Feature: As a backend user able to see User report

@regression @qaBackend
Scenario: CM_COMP_UR_1: BE-Verify that user able to click on Components menu then dropdown get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I verify system redirect in Auction page

@regression @qaBackend
Scenario: CM_COMP_UR_2: BE-Verify that user able to click on User report option on left side
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I click on User Report menu

@regression @qaBackend
Scenario: CM_COMP_UR_3: BE-Verify that user able to see belows fields Name, User name , Mobile number, Billing name, Bid count, Absentee bid count,User Group on User report
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
Then I verify user report header

@regression @qaBackend
Scenario: CM_COMP_UR_4: BE-Verify that user able to click on Bid Count then new pop up get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
Then I click on Bid Count then new pop up get open

@regression @qaBackend
Scenario: CM_COMP_UR_5: BE-Verify that user able to see below fields- Bid Id, Bid amount, Bid Date, Lot Title, Auction Title on new pop up 
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
Then I click on Bid Count then new pop up get open
And I verfiy Bid Count modalpopup header

@regression @qaBackend
Scenario: CM_COMP_UR_6: BE-Verify that user able to see highest bid amount message with lot name, time, username
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
And I enter name in search box 
And I click on search
Then I click on Bid Count then new pop up get open
# And I verfiy highest bid amount message on modalpopup

@regression @qaBackend
Scenario: CM_COMP_UR_7: BE-Verify that user able to do close that popup window
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
Then I click on Bid Count then new pop up get open
And I closed the Bid Count modalpopup

@regression @qaBackend
Scenario: CM_COMP_UR_8: BE-Verify that user able to click on Absentee bid count then new popup get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
Then I click on Absentee bid count then new popup get open

@regression @qaBackend
Scenario: CM_COMP_UR_9: BE-Verify that user able to see below fields- Bid Id, Bid amount, Bid Date, Lot Title, Auction Title on Absentee Bid Count pop up BE-Verify that user able to see below fields- Bid Id, Bid amount, Bid Date, Lot Title, Auction Title on Absentee Bid Count pop up 
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
Then I click on Absentee bid count then new popup get open
And I verfiy Absentee Bid Count modalpopup header

@regression @qaBackend
Scenario: CM_COMP_UR_10: BE-Verify that user able to see highest bid amount message with lot name, Date-time, username
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
And I enter name in search box 
And I click on search
Then I click on Absentee bid count then new popup get open
And I verfiy highest bid amount message on Absentee Bid Count modalpopup

@regression @qaBackend
Scenario: CM_COMP_UR_11: BE-Verify that user able to do close that Absentee Bid Count popup window
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
Then I click on Absentee bid count then new popup get open
And I closed the Absentee Bid Count modalpopup

@regression @qaBackend
Scenario: CM_COMP_UR_12: BE-Verify that user able to search users by name 
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
Then I enter name in search box 
And I click on search 
And I verfiy with Name to check correct name related info open

@regression @qaBackend
Scenario: CM_COMP_UR_13: BE-Verify that user able to search users by user name
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
Then I enter username in search box 
And I click on search 
And I verfiy with User Name to check correct user name related info open

@regression @qaBackend
Scenario: CM_COMP_UR_14: BE-Verify that user able to see below option- Select Group when click on search tool
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
Then I verfiy search tool on User Report

@regression @qaBackend
Scenario: CM_COMP_UR_15: BE-Verify that user able to search users by select Group option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
When I click on Searchtool
And I click on '- Guest' menu on the Select Group dropdown on User report and check it open the correct page
And I click on '- - DerivazUser' menu on the Select Group dropdown on User report and check it open the correct page
And I click on '- Registered' menu on the Select Group dropdown on User report and check it open the correct page
And I click on '- - Bidders' menu on the Select Group dropdown on User report and check it open the correct page
And I click on '- Super Users' menu on the Select Group dropdown on User report and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_UR_16: BE-Verify that user able to clear search result when click on Clear button
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on User Report menu
Then I enter name in search box 
Then I clear search user result when click on Clear button