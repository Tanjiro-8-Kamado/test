Feature: User is not able see lot in Open for consignment stage
 
   @regression @high  @live
    Scenario: SM_FLLSR_OFC_1: FE:Verify that  user able to see All Auctions section available on Home page
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      Then  I see All Auctions section available on homepage
      And I click on View All link on homepage and All Auction page get open

   @regression @high  @live
    Scenario: SM_FLLSR_OFC_2: FE - Verify that user able to see the auction number '01' available in 'open for consignment' stage in auction page
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      And I click on View All link on homepage and All Auction page get open
      Then I see the auction number '001' available in 'Open For Consignment' stage in auction page

   @regression @high  @live
    Scenario: SM_FLLSR_OFC_3: FE -Verify that user is not able to see lot in 'Open for consignment' stage
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      And I click on View All link on homepage and All Auction page get open
      Then I click on auction number '001' and unable to see lot in 'Open For Consignment' stage and see Open For Consignment text in auction page

   @regression @high  @live
    Scenario: SM_FLLSR_OFC_4: FE:Verify that user click on Save to My Auctions button for any auction then it navigate to login page
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      When I click on View All link on homepage and All Auction page get open
      Then I click on Save to my auction for auction number '001' then it navigate to homepage

   @regression @high  @live
    Scenario: SM_FLLSR_OFC_5: FE:Verify that user click on Save to My Auctions then auction get saved
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      When I click on the 'Login' link from homepage
      And I type valid email and password on the login page
      And I click on the 'Login' button on the login page 
      Then I click on View All link on homepage and All Auction page get open
      And I click on Save to my auction for auction number '001' of open for consignment stage then auction get saved on auction page

  @regression  @high  @live
   Scenario: SM_FLLSR_OFC_6: FE:Verify that user can check auction saved in View My Auction tab
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     When I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page 
     Then I click on View All link on homepage and All Auction page get open
     And I click on Save to my auction for auction number '001' of open for consignment stage then auction get saved on auction page
     And I see View My Auction button available on auction page
     And I click on View My Auction button on auction page
     And I see auction number '01' available on auction page        
