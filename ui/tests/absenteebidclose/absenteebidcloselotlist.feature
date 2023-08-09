Feature: user able to see the auction and auction related lots available in 'Absentee Bidding Closed' stage

@regression @high @live
Scenario: SM_ABC_ABCLLP_1: FE:Verify that  user able to see All Auctions section available on Home page
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
Then  I see All Auctions section available on homepage
And I click on View All link on homepage and All Auction page get open

@regression @high  @live
Scenario: SM_ABC_ABCLLP_2: FE:Verify that user able to see all auction in grid view which is already selected
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
Then I click on View All link on homepage and All Auction page get open
And I see all auction in grid view which is already selected on auction page

@regression  @high  @live
Scenario: SM_ABC_ABCLLP_3: FE - Verify that user able to see the auction number '111' available in 'Absentee Bid Close' stage in auction page
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
And I click on View All link on homepage and All Auction page get open
Then I see the auction number '111' available in 'Absentee Bidding Closed' stage in auction page

@regression @high  @live
Scenario: SM_ABC_ABCLLP_4: FE -Verify that user is able to see lot in 'Absentee Bid Close' stage
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
And I click on View All link on homepage and All Auction page get open
Then I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page

@regression @high  @live
Scenario: SM_ABC_ABCLLP_5: FE:Verify that user click on Save to My Auctions button for any auction then it navigate to login page
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
When I click on View All link on homepage and All Auction page get open
Then I click on Save to my auction for auction number '111' then it navigate to homepage


@regression @high  @live
Scenario: SM_ABC_ABCLLP_6: FE:Verify that user click on Save to My Auctions then auction get saved
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the login page
And I click on the 'Login' button on the login page 
Then I click on View All link on homepage and All Auction page get open
And I click on Save to my auction for auction number '111' of Absentee Bidding Closed stage then auction get saved on auction page

@regression @high  @live
Scenario: SM_ABC_ABCLLP_7: FE:Verify that user can check auction saved in View My Auction tab
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the login page
And I click on the 'Login' button on the login page 
Then I click on View All link on homepage and All Auction page get open
And I click on Save to my auction for auction number '111' of Absentee Bidding Closed stage then auction get saved on auction page
And I see View My Auction button available on auction page
And I click on View My Auction button on auction page
And I see auction number '111' available on auction page 

@regression @high @live
Scenario: SM_ABC_ABCLLP_8: FE:Verify that user can click on toggle button then lot display in list view
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the login page
And I click on the 'Login' button on the login page
Then I click on View All link on homepage and All Auction page get open
And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
And I click on toggle button then lot display in list view on auction page

@regression @high  @live
Scenario: SM_ABC_ABCLLP_9: FE: Verify that user click on View Details button for any lot then lot description get open
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the login page
And I click on the 'Login' button on the login page
And I click on View All link on homepage and All Auction page get open
Then I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
And I click on View Details link for lot number '2' then lot description get open on auction page

@regression @high @live
Scenario: SM_ABC_ABCLLP_10,11,12: FE - Verify user able to see 'Your Absentee Bid' text and absnetee bid amount section
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the login page
And I click on the 'Login' button on the login page
And I click on View All link on homepage and All Auction page get open
And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
Then I verify Your Absentee Bid available for lot number '2' on auction page
And I verfiy absenteebid amount in rupee for lot number '2' on auction page
And I verfiy absenteebid amount in dollar for lot number '2' on auction page


@regression @high @live
Scenario: SM_ABC_ABCLLP_13: FE:Verify that user can see aution start time on right side top corner
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the login page
And I click on the 'Login' button on the login page
And I click on View All link on homepage and All Auction page get open
And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
Then I see aution start time on right side top corner on auction page

@regression @high @live
Scenario: SM_ABC_ABCLLP_14: FE:Verify that user can check saved lots in  My Lots filter
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the login page
And I click on the 'Login' button on the login page
And I click on View All link on homepage and All Auction page get open
And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
And I check mylots filter selected on auction page
Then I check lots number '1' available in My Lots filter on auction page

@regression @high @live
Scenario: SM_ABC_ABCLLP_15: FE:Verify that user can check all lots when click on All Lots filer
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the login page
And I click on the 'Login' button on the login page
And I click on View All link on homepage and All Auction page get open
And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
And I click on all lots filter then I see all lots shows on auction page

@regression @high @live
Scenario: SM_ABC_ABCLLP_16: FE:Verify that user able to go to specific lot when enter number in Go to Lot
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the login page
And I click on the 'Login' button on the login page
And I click on View All link on homepage and All Auction page get open
And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
Then I enter number '5' in Go to lot and click on arrow symbol




