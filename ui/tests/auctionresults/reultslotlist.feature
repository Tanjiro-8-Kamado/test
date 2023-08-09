Feature: user able to see the auction in 'Auction Results' stage

@regression @high @live
Scenario: SM_AR_RP_1: FE:Verify that  user able to see All Auctions section available on Home page
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
Then  I see All Auctions section available on homepage
And I click on View All link on homepage and All Auction page get open

@regression @high  @live
Scenario: SM_AR_RP_2: FE:Verify that user able to see all auction in grid view which is already selected
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
Then I click on View All link on homepage and All Auction page get open
And I see all auction in grid view which is already selected on auction page

@regression  @high  @live
Scenario: SM_AR_RP_3: FE - Verify that user able to see the auction number '350' available in 'Auction Results' stage in auction page
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
And I click on View All link on homepage and All Auction page get open
Then I click on auction number '350' and able to see lot in 'Auction Results' stage and see Auction Results text in auction page

@regression @high @live
Scenario: SM_AR_RP_4: FE:Verify that user can click on toggle button then lot display in list view
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
Then I click on View All link on homepage and All Auction page get open
And I click on auction number '350' and able to see lot in 'Auction Results' stage and see Auction Results text in auction page
And I click on toggle button then lot display in list view of result on auction page

@regression @high @live
Scenario: SM_AR_RP_5: FE - Verify that user able to see total Sale amount of lots in auctionresults page
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
And I click on View All link on homepage and All Auction page get open
And I click on auction number '350' and able to see lot in 'Auction Results' stage and see Auction Results text in auction page
Then I see Total Sale amount of lots in auctionresults page

@regression @high @live
Scenario: SM_AR_RP_6: FE -Verify that user is able to see lot sold amount on auction results page
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
And I click on View All link on homepage and All Auction page get open
And I click on auction number '350' and able to see lot in 'Auction Results' stage and see Auction Results text in auction page
Then I see sold lots in auctionresults page

@regression @high @live
Scenario: SM_AR_RP_7: FE:Verify that user able to see top three selling price on auction results page
Given I am on the derivaz and Ives homepage
And I click on accept cookie button
And I click on View All link on homepage and All Auction page get open
And I click on auction number '350' and able to see lot in 'Auction Results' stage and see Auction Results text in auction page
Then I see top three selling price in auctionresults page


