Feature: As a backend user able to see auction report

@regression @qaBackend
Scenario: CM_COMP_AR_1: BE-Verify that user able to click on Components menu then dropdown get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I verify system redirect in Auction page

@regression @qaBackend
Scenario: CM_COMP_AR_2: BE-Verify that user able to click on Auction report option on left side
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I click on Auctions Report menu

@regression @qaBackend
Scenario: CM_COMP_AR_3: BE-Verify that user able to see Auction Number, Name, Start Date, End Date, Category, Buyers Premium, Total Lots and ID for auction on Auction report
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Auctions Report menu
Then I verify report header

@regression @qaBackend
Scenario: CM_COMP_AR_4: BE-Verify that user able to click on auction name then open auction related lots
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Auctions Report menu
Then I search auction by Search field
And I click on search auction
Then I verify with the lot id to check the correct auction open

@regression @qaBackend
Scenario: CM_COMP_AR_5: BE-Verify that user click on total lot count then lots get open for respective auction
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Auctions Report menu
Then I search auction by Search field
And I click on Total lots on auction report
Then I verify with the lot id to check the correct auction open

@regression @qaBackend
Scenario: CM_COMP_AR_6: BE-Verify that user able to search auction by Search field
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Auctions Report menu
Then I search auction by Search field
And I verify with the auction name to check the correctly search auction

@regression @qaBackend
Scenario: CM_COMP_AR_7: BE-Verify that user able to see  below options Auction name, Select Category, state, auction stage when click on search tools
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Auctions Report menu
Then I verify search tool options

@regression @qaBackend
Scenario: CM_COMP_AR_8: BE-Verify that user able to search auction by auction name searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Auctions Report menu
Then I select auction from Auction Name dropdown

@regression @qaBackend
Scenario: CM_COMP_AR_9: BE-Verify that user able to search auction by auction number searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Auctions Report menu
Then I select auction number form Auction Number dropdown

@regression @qaBackend
Scenario: CM_COMP_AR_10: BE-Verify that user able to search auction by select category searching tool option
 Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
When I click on Searchtool
And I click on 'Modern Indian Fine Arts' menu on the Category dropdown and check it open the correct page
And I click on 'Contemporary Indian Fine Arts' menu on the Category dropdown and check it open the correct page
And I click on 'Vintage & Classic Automobiles and Travel Heritage' menu on the Category dropdown and check it open the correct page
And I click on 'Indian & Asian Antiquities' menu on the Category dropdown and check it open the correct page
And I click on 'Antiquarian Books & Prints' menu on the Category dropdown and check it open the correct page
And I click on 'Photography' menu on the Category dropdown and check it open the correct page
And I click on 'Indian Film Memorabilia' menu on the Category dropdown and check it open the correct page
And I click on 'Hollywood & World Film Memorabilia' menu on the Category dropdown and check it open the correct page
And I click on 'Football, Cricket & Other Sporting Memorabilia' menu on the Category dropdown and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_AR_11: BE-Checked all state menu under State dropdown should redirect to the page
 Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
When I click on Searchtool
And I click on 'Published' menu on the State dropdown and check it open the correct page
And I click on 'Unpublished' menu on the State dropdown and check it open the correct page
And I click on 'Draft' menu on the State dropdown and check it open the correct page
And I click on 'Trashed' menu on the State dropdown and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_AR_12: BE-Verify that user able to search auction by stage wise from auction stage dropdown
 Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
When I click on Searchtool
And I click on 'Open For Consignments' menu on the Stage dropdown and check it open the correct page
And I click on 'Closing For Consignment' menu on the Stage dropdown and check it open the correct page
And I click on 'Auction Highlights' menu on the Stage dropdown and check it open the correct page
And I click on 'Catalogue Uploaded' menu on the Stage dropdown and check it open the correct page
And I click on 'Private Preview' menu on the Stage dropdown and check it open the correct page
And I click on 'Absentee Bidding Open' menu on the Stage dropdown and check it open the correct page
And I click on 'Absentee Bidding Closed' menu on the Stage dropdown and check it open the correct page
And I click on 'Auction Live' menu on the Stage dropdown and check it open the correct page
And I click on 'Auction Results & Analysis' menu on the Stage dropdown and check it open the correct page
And I click on 'Post Auction Sale' menu on the Stage dropdown and check it open the correct page
And I click on 'Auction is Archived' menu on the Stage dropdown and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_AR_13: BE-Verify that user able to clear search result when click on Clear button
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
And I click on Auctions Report menu
Then I clear search result when click on Clear button



