Feature: As a backend user able to create auction

@regression @qaBackend
Scenario: CM_COMP_AC_13: BE-Verify that user able to search auction by select category searching tool option
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
Scenario: CM_COMP_AC_14: BE-Checked all state menu under State dropdown should redirect to the page
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
Scenario: CM_COMP_AC_15: BE-Verify that user able to search auction by stage wise from auction stage dropdown
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
Scenario: CM_COMP_AC_16: BE-Verify that user able to clear search result when click on Clear button
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I clear search result when click on Clear button

@regression @qaBackend
Scenario: CM_COMP_AC_17: BE-Verify that user able to unpublish the auction
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I click on Unpublish button for unpublish auction

@regression @qaBackend
Scenario: CM_COMP_AC_18: BE-Verify that user able to publish the auction
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I click on Publish button for publish auction

@regression @qaBackend
Scenario: CM_COMP_AC_19: BE-Verify that user able to trash the auction
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I click on Trash button for trash auction
