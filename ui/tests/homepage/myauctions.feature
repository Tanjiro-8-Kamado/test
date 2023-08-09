Feature: User is able to check saved auction in My Auction page

@regression @high @live
  Scenario: UM_MA_FEMA_1 Verify that user able to click on right side top profile name button then dropdown get open and My Auction option display
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     And I see profile name available on homepage
     When I click on profile name from homepage

@regression @high @live
  Scenario: UM_MA_FEMA_2 FE:Verify that user able to click on My Auction option from dropdown then My Auction page get open
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     Then I select My Auctions option from homepage

@regression @high  @live
    Scenario: UM_MA_FEMA_3: FE:Verify that user able to see all auction in grid view which is already selected
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      And I click on the 'Login' link from homepage
      And I type valid email and password on the login page
      And I click on the 'Login' button on the login page
      When I click on profile name from homepage
      Then I select My Auctions option from homepage
      And I see all auction in grid view which is already selected on auction page

@regression @high @live
  Scenario: UM_MA_FEMA_4 FE:Verify that user able to see Auction which is saved by user
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     Then I select My Auctions option from homepage
     And I see auction number '124' available on auction page

@regression  @high @live
  Scenario: UM_MA_FEMA_5 FE:Verify that user able to click on list view for auction then auction should be display in list view
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     Then I select My Auctions option from homepage
     And I click on list view for auction then auction should be display in list view on auction page

@regression  @high @live
  Scenario: UM_MA_FEMA_6 FE:Verify that user able to click on auction number then related lots get open
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     Then I select My Auctions option from homepage
     And I click on list view for auction then auction should be display in list view on auction page
     And I click on auction number '08' then related lots get open
   