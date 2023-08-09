Feature: As a backend user able to create auction

@regression @qaBackend
Scenario: CM_COMP_AC_1: BE-Verify that user able to click on Components menu then dropdown get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I verify system redirect in Auction page

@regression @qaBackend
Scenario: CM_COMP_AC_2: BE-Verify that user able to click on New button then auction form get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click at New button on auction list page
Then I verify system redirect to new form auction

@regression @qaBackend
Scenario: CM_COMP_AC_3: BE-Verify that user able to see 5 tabs on auction form
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click at New button on auction list page
Then I verify 5 tabs are displaying in the auction form

@regression @qaBackend
Scenario: CM_COMP_AC_4: BE-Verify that user should be not be able to submit from until all mandotarty fields are fill in the form
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click at New button on auction list page
When I click at Save button without entering any value to the form
Then I verify all error messages are display to the user on auction creation

@regression @qaBackend
Scenario: CM_COMP_AC_5: BE-Verify that user able to get success message once the all mendatory field are fill and form is submited
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click at New button on auction list page
Then I fill all mandotarty fields in the form

@regression @qaBackend
Scenario: CM_COMP_AC_6: BE-Verify that user able to click on 'Save and Close ' button then form get saved and closed
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then Enter auction name in search box
And I click on auction name
Then I click on Save and Close button
And I verfiy success message display on the form

@regression @qaBackend
Scenario: CM_COMP_AC_7: BE-Verify that user able to click on 'Save and New' button then form get saved and open new form
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then Enter auction name in search box 
And I click on auction name
Then I click on Save and New button
And I verfiy success message display on the form

@regression @qaBackend
Scenario: CM_COMP_AC_8: BE-Verify that user able to click on 'Close' button then form get closed
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then Enter auction name in search box 
And I click on auction name
Then I click on Close button

@regression @qaBackend
Scenario: CM_COMP_AC_9: BE-Verify that user able to search auction by Search field
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I search auction by Search field

@regression @qaBackend
Scenario: CM_COMP_AC_10:BE-Verify that user able to see  below options Auction name, Select Category, state, auction stage when click on search tools
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I verify search tool options

@regression @qaBackend
Scenario: CM_COMP_AC_11: BE-Verify that user able to search auction by auction name searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I select auction from Auction Name dropdown

@regression @qaBackend
Scenario: CM_COMP_AC_12: BE-Verify that user able to search auction by auction number searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I select auction number form Auction Number dropdown



