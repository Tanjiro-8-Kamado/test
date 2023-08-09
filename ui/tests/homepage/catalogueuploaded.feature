Feature: user able to see the auction and auction related lots available in 'Catalogue Uploaded' stage

@regression  @high  @live
    Scenario: SM_FLLSR_CU_1: FE:Verify that  user able to see All Auctions section available on Home page
      Given I am on the derivaz and Ives homepage
       Then  I see All Auctions section available on homepage
      And I click on View All link on homepage and All Auction page get open

@regression  @high  @live
    Scenario: SM_FLLSR_CU_2: FE:Verify that user able to see all auction in grid view which is already selected
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      Then I click on View All link on homepage and All Auction page get open
      And I see all auction in grid view which is already selected on auction page

@regression  @high  @live
    Scenario: SM_FLLSR_CU_3: FE - Verify that user able to see the auction number '08' available in 'Catelogue Uploaded' stage in auction page
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      And I click on View All link on homepage and All Auction page get open
      Then I see the auction number '08' available in 'Catelogue Uploaded' stage in auction page
      
@regression  @high  @live
    Scenario: SM_FLLSR_CU_4: FE -Verify that user is able to see lot in 'Catelogue Uploaded' stage
       Given I am on the derivaz and Ives homepage
       And I click on accept cookie button
       And I click on View All link on homepage and All Auction page get open
       Then I click on auction number '08' and able to see lot in 'Catelogue Uploaded' stage and see Catelogue Uploaded text in auction page

 @regression @high  @live
     Scenario: SM_FLLSR_CU_5: FE:Verify that user click on Save to My Auctions button for any auction then it navigate to login page
       Given I am on the derivaz and Ives homepage
       And I click on accept cookie button
       When I click on View All link on homepage and All Auction page get open
       Then I click on Save to my auction for auction number '08' then it navigate to homepage
           
@regression  @high  @live
   Scenario: SM_FLLSR_CU_6: FE:Verify that user click on Save to My Auctions then auction get saved
     Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
     When I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page 
     Then I click on View All link on homepage and All Auction page get open
     And I click on Save to my auction for auction number '08' of Catelogue Uploaded stage then auction get saved on auction page

@regression  @high  @live
   Scenario: SM_FLLSR_CU_7: FE:Verify that user can check auction saved in View My Auction tab
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     When I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page 
     Then I click on View All link on homepage and All Auction page get open
     And I click on Save to my auction for auction number '08' of Catelogue Uploaded stage then auction get saved on auction page
     And I see View My Auction button available on auction page
     And I click on View My Auction button on auction page
     And I see auction number '08' available on auction page