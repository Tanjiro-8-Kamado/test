Feature: User is able to check saved lots in My Lots page

@regression @high @live
  Scenario: UM_ML_FEML_1 FE:Verify that user able to click on right side top profile name button then dropdown get open and My lots option display
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     And I see profile name available on homepage
     When I click on profile name from homepage

@regression @high @live
  Scenario: UM_ML_FEML_2 FE:Verify that user able to click on My Lots option from dropdown then My Lots page get open
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     Then I select My Lots option from homepage

@regression @high  @live
    Scenario: UM_ML_FEML_3: FE:Verify that user able to see all lots in grid view which is already selected
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      And I click on the 'Login' link from homepage
      And I type valid email and password on the login page
      And I click on the 'Login' button on the login page
      When I click on profile name from homepage
      Then I select My Lots option from homepage
      And I see all lots in grid view which is already selected on mylots page

@regression @high @live
  Scenario: UM_ML_FEML_4 FE:Verify that user able to select auction from Select Auction dropdown then respective Auction get open
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     And I select My Lots option from homepage
     Then I select auction name on select auction dropdown and click on go to auction from mylots page

@regression  @high @live
  Scenario: UM_ML_FEML_5 FE:Verify that user able to click on View Details link for any lot then lot details get open   
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     And I select My Lots option from homepage
     Then I click on View Details for lot number then lot description get open on auction page

@regression  @high @live
  Scenario: UM_ML_FEML_6 FE:Verify that user able to click on list view then lots get opened in list view
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     And I select My Lots option from homepage
     Then I click on list view for lots then lots should be display in list view on mylots page
