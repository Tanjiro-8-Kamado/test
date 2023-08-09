Feature: user able to see the auction and lots details available in 'Absentee Bidding Closed' stage on Lot Details page

@regression @high @live
  Scenario: SM_ABC_ABCLDP_1: FE:Verify that  user able to see All Auctions section available on Home page
  Given I am on the derivaz and Ives homepage
  And I click on accept cookie button
  Then  I see All Auctions section available on homepage
  And I click on View All link on homepage and All Auction page get open

@regression @high  @live
  Scenario: SM_ABC_ABCLDP_2: FE:Verify that user able to see all auction in grid view which is already selected
  Given I am on the derivaz and Ives homepage
  And I click on accept cookie button
  Then I click on View All link on homepage and All Auction page get open
  And I see all auction in grid view which is already selected on auction page

@regression  @high  @live
  Scenario: SM_ABC_ABCLDP_3: FE - Verify that user able to see the auction number '111' available in 'Absentee Bid Close' stage in auction page
  Given I am on the derivaz and Ives homepage
  And I click on accept cookie button
  And I click on View All link on homepage and All Auction page get open
  Then I see the auction number '111' available in 'Absentee Bidding Closed' stage in auction page

@regression @high  @live
  Scenario: SM_ABC_ABCLDP_4: FE -Verify that user is able to see lot in 'Absentee Bid Close' stage
  Given I am on the derivaz and Ives homepage
  And I click on accept cookie button
  And I click on View All link on homepage and All Auction page get open
  Then I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page

@regression @high  @live
  Scenario: SM_ABC_ABCLDP_5: FE - Verify that guest user able to see 'Register to bid' button 
  Given I am on the derivaz and Ives homepage
  And I click on accept cookie button
  And I click on View All link on homepage and All Auction page get open
  And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
  Then I Verify guest user able to see Register to bid button in absenteebidclose stage from lot list page

@regression @high  @live
  Scenario: SM_ABC_ABCLDP_6: FE - Verify that user should be able to redirect to 'Register to bid' form page when clicking on "Register to bid' button
  Given I am on the derivaz and Ives homepage
  And I click on accept cookie button
  And I click on View All link on homepage and All Auction page get open
  And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
  And I Verify guest user able to see Register to bid button in absenteebidclose stage from lot list page
  Then I click on Register to Bid button
  And I verify current page is register to bid form page

@regression @high  @live
  Scenario: SM_ABC_ABCLDP_7: FE - Verify user able to click on view details for lot then lot details page get open
  Given I am on the derivaz and Ives homepage
  And I click on accept cookie button
  When I click on the 'Login' link from homepage
  And I type valid email and password on the login page
  And I click on the 'Login' button on the login page 
  And I click on View All link on homepage and All Auction page get open
  And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
  Then I click on View Details link for lot number '2' then lot description get open on auction page


@regression @high  @live
  Scenario: SM_ABC_ABCLDP_8,9,10: FE - Verify user able to see 'Your Absentee Bid' text and absnetee bid amount section
  Given I am on the derivaz and Ives homepage
  And I click on accept cookie button
  When I click on the 'Login' link from homepage
  And I type valid email and password on the login page
  And I click on the 'Login' button on the login page 
  And I click on View All link on homepage and All Auction page get open
  And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
  Then I click on View Details link for lot number '2' then lot description get open on auction page
  And I verify Your Absentee Bid section available on view details page
  And I verfiy absenteebid amount in rupee on view details page
  And I verfiy absenteebid amount in dollar on view details page

@regression @high  @live
  Scenario: SM_ABC_ABCLDP_11: FE - Verify that user can see auction start time in lot details page
  Given I am on the derivaz and Ives homepage
  And I click on accept cookie button
  When I click on the 'Login' link from homepage
  And I type valid email and password on the login page
  And I click on the 'Login' button on the login page 
  And I click on View All link on homepage and All Auction page get open
  And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
  Then I click on View Details link for lot number '2' then lot description get open on auction page
  And I verify auction start time on view details page

@regression @high  @live
  Scenario: SM_ABC_ABCLDP_12: FE -Verify that user able to click on Next lot when user click on View Details
  Given I am on the derivaz and Ives homepage
  And I click on accept cookie button
  When I click on the 'Login' link from homepage
  And I type valid email and password on the login page
  And I click on the 'Login' button on the login page 
  And I click on View All link on homepage and All Auction page get open
  And I click on auction number '111' and able to see lot in 'Absentee Bidding Closed' stage and see Absentee Bidding Closed text in auction page
  Then I click on View Details link for lot number '2' then lot description get open on auction page
  And I click on Next Lot on auction page



