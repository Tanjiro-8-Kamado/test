Feature: user able to see the auction and auction related lots available in 'Private Preview' stage

@regression  @high  @live
    Scenario:SM_FLLSR_PP_1: FE:Verify that  user able to see All Auctions section available on Home page
      Given I am on the derivaz and Ives homepage
      Then  I see All Auctions section available on homepage
      And  I click on View All link on homepage and All Auction page get open

@regression @high  @live
    Scenario: SM_FLLSR_PP_2: FE:Verify that user able to see all auction in grid view which is already selected
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button 
      Then I click on View All link on homepage and All Auction page get open
      And I see all auction in grid view which is already selected on auction page

@regression  @high  @live
    Scenario: SM_FLLSR_PP_3: FE - Verify that user able to see the auction number '07' available in 'Private Preview' stage in auction page
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      And I click on View All link on homepage and All Auction page get open
      Then I see the auction number '005' available in 'Private Preview' stage in auction page

@regression  @high  @live
    Scenario: SM_FLLSR_PP_4: FE -Verify that user is able to see lot in 'Private Preview' stage
       Given I am on the derivaz and Ives homepage
       And I click on accept cookie button
       And I click on View All link on homepage and All Auction page get open
       Then I click on auction number '005' and able to see lot in 'Private Preview' stage and see Private Preview text in auction page

 @regression @high  @live
     Scenario: SM_FLLSR_PP_5: FE:Verify that user click on Save to My Auctions button for any auction then it navigate to login page
       Given I am on the derivaz and Ives homepage
       And I click on accept cookie button
       When I click on View All link on homepage and All Auction page get open
       Then I click on Save to my auction for auction number '005' then it navigate to homepage

@regression @high  @live
   Scenario: SM_FLLSR_PP_6: FE:Verify that user click on Save to My Auctions then auction get saved
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     When I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page 
     Then I click on View All link on homepage and All Auction page get open
     And I click on Save to my auction for auction number '005' of Private Preview stage then auction get saved on auction page

@regression @high  @live
   Scenario: SM_FLLSR_PP_7: FE:Verify that user can check auction saved in View My Auction tab
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     When I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page 
     Then I click on View All link on homepage and All Auction page get open
     And I click on Save to my auction for auction number '07' of Private Preview stage then auction get saved on auction page
     And I see View My Auction button available on auction page
     And I click on View My Auction button on auction page
     And I see auction number '005' available on auction page 
