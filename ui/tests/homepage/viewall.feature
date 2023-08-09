Feature: User is able to click on View All link and save to auction and lots

   @regression @login  @high  @live
    Scenario:UM_VA-AA_FEVA-AA_1: FE:Verify that  user able to see All Auctions section available on Home page
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    Then  I see All Auctions section available on homepage
    
   @regression @login  @high  @live
    Scenario: UM_VA-AA_FEVA-AA_2: FE:Verify that  user able to click on View All link and should be redirected on All Auction page
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on View All link on homepage and All Auction page get open
   
   @regression @login  @high  @live
    Scenario: UM_VA-AA_FEVA-AA_3: FE:Verify that user able to see all auction in grid view which is already selected
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      When I click on View All link on homepage and All Auction page get open
      Then I see all auction in grid view which is already selected on auction page

    @regression @login  @high  @live
    Scenario: UM_VA-AA_FEVA-AA_4: FE:Verify that user click on Save to My Auctions button for any auction then it navigate to login page
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on View All link on homepage and All Auction page get open
    Then I click on Save to my auction for auction number '08' then it navigate to homepage

   @regression @login  @high  @live
    Scenario: UM_VA-AA_FEVA-AA_5: FE:Verify that user able to entered valid username and password on login page and user get logged in 
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on View All link on homepage and All Auction page get open
    Then I click on Save to my auction for auction number '08' then it navigate to homepage
    And I type valid email and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    And I log out from the website

     @regression @login  @high  @live
     Scenario: UM_VA-AA_FEVA-AA_6: FE:Verify that user click on Save to My Auctions then auction get saved
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on View All link on homepage and All Auction page get open
     Then I click on Save to my auction for auction number '08' then auction get saved on auction page

@regression @login  @high  @live
   Scenario: UM_VA-AA_FEVA-AA_7: FE:Verify that user can check auction saved in View My Auction tab
   Given I am on the derivaz and Ives homepage
   And I click on accept cookie button
   When I click on the 'Login' link from homepage
   And I type valid email and password on the login page
   And I click on the 'Login' button on the login page 
   Then I click on View All link on homepage and All Auction page get open
   And I click on Save to my auction for auction number '08' then auction get saved on auction page
   And I see View My Auction button available on auction page
   And I click on View My Auction button on auction page
   And I see auction number '08' available on auction page
    
    @regression @login  @high  @live
    Scenario: UM_VA-AA_FEVA-AA_8: FE:Verify that user click on list view for auction then auction should be display in list view
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on View All link on homepage and All Auction page get open
    And I click on list view for auction then auction should be display in list view on auction page
   
   @regression @login  @high  @live
    Scenario: UM_VA-AA_FEVA-AA_9: FE:Verify that user click on auction number then related lots get open
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on View All link on homepage and All Auction page get open
    And I click on list view for auction then auction should be display in list view on auction page
    And I click on auction number '08' then related lots get open on auction page

  @regression @login  @high  @live
    Scenario: UM_VA-AA_FEVA-AA_10: FE: Verify that user click on View Details button for any lot then lot description get open
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on View All link on homepage and All Auction page get open
    And I click on list view for auction then auction should be display in list view on auction page
    And I click on auction number '08' then related lots get open on auction page
    And I click on View Details for lot number '5' then lot description get open on auction page

   @regression @login  @high  @live
    Scenario: UM_VA-AA_FEVA-AA_11: FE:Verify that user click on Save to My Lots button for lot number '4' then it navigate to login page
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on View All link on homepage and All Auction page get open
    And I click on list view for auction then auction should be display in list view on auction page
    And I click on auction number '08' then related lots get open on auction page
    Then I click on lot number '4' and Save to Lots then it navigate to homepage
   
    @regression @login  @high  @live
    Scenario: UM_VA-AA_FEVA-AA_12: FE:Verify that user able to entered valid username and password on login page and user get logged in 
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on View All link on homepage and All Auction page get open
    And I click on list view for auction then auction should be display in list view on auction page
    And I click on auction number '08' then related lots get open on auction page
    Then I click on lot number '4' and Save to Lots then it navigate to homepage
    And I type valid email and password on the login page
    And I click on the 'Login' button on the login page
    And I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    And I log out from the website

  @regression @login  @high  @live
    Scenario: UM_VA-AA_FEVA-AA_13:FE:Verify that user click on Save to My Lots then lots get saved
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    And I click on the 'Login' link from homepage
    And I type valid email and password on the login page
    And I click on the 'Login' button on the login page
    When I click on View All link on homepage and All Auction page get open
    And I click on list view for auction then auction should be display in list view on auction page
    Then I click on auction number '08' then related lots get open on auction page
    And I click on lot number '5' and Save to Lots then lots get saved on auction page 

   @regression @login  @high  @live
    Scenario: UM_VA-AA_FEVA-AA_14: FE:Verify that user can check lots saved in View My Lots tab
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    And I click on the 'Login' link from homepage
    And I type valid email and password on the login page
    And I click on the 'Login' button on the login page 
    And I click on View All link on homepage and All Auction page get open
    When I select auction number '08' from auction details page
    And I click on lot number '5' and Save to Lots then lots get saved on auction page 
    Then I see View My lots button available on auction page
    And I click on View My lots button on auction page
    And I see lots number '5' available on auction page


  