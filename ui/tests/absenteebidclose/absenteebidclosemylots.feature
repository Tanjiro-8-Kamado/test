Feature: user able to see the auction and auction related lots available in 'Absentee Bidding Closed' stage on My Lots page

@regression @high @live
  Scenario: SM_ABC_ABCMLP_1 FE:Verify that user able to click on right side top profile name button then dropdown get open and My lots option display
     Given I am on the derivaz and Ives homepage
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     And I click on accept cookie button
     And I see profile name available on homepage
     When I click on profile name from homepage

@regression @high @live
  Scenario: SM_ABC_ABCMLP_2 FE:Verify that user able to click on My Lots option from dropdown then My Lots page get open
     Given I am on the derivaz and Ives homepage
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     Then I select My Lots option from homepage

@regression @high @live
  Scenario: SM_ABC_ABCMLP_3 FE: Verify that user able to select auction from select auction dropdown
     Given I am on the derivaz and Ives homepage
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     Then I select My Lots option from homepage
     And I select auction name on select auction dropdown on mylots page

@regression @login  @high  @live
    Scenario: SM_ABC_ABCMLP_4: FE:Verify that user able to see all lots in grid view which is already selected
      Given I am on the derivaz and Ives homepage
      And I click on the 'Login' link from homepage
      And I type valid email and password on the login page
      And I click on the 'Login' button on the login page
      When I click on profile name from homepage
      Then I select My Lots option from homepage
      And I select auction name on select auction dropdown on mylots page
      And I see all lots in grid view which is already selected on mylots page


@regression @login  @high  @live
    Scenario: SM_ABC_ABCMLP_5: FE: Verify that user click on toggle button then lot display in list view
      Given I am on the derivaz and Ives homepage
      And I click on the 'Login' link from homepage
      And I type valid email and password on the login page
      And I click on the 'Login' button on the login page
      When I click on profile name from homepage
      Then I select My Lots option from homepage
      And I select auction name on select auction dropdown on mylots page
      And I click on toggle button then lot display in list view on mylot page

@regression @high  @live
   Scenario: SM_ABC_ABCMLP_6,7,8: FE - Verify user able to see 'Your Absentee Bid' text and absnetee bid amount section
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     Then I select My Lots option from homepage
     And I select auction name on select auction dropdown on mylots page
     And I verify Your Absentee Bid section available on mylot page
     And I verfiy absenteebid amount in rupee on mylot page
     And I verfiy absenteebid amount in dollar on mylot page

@regression @high  @live
   Scenario: SM_ABC_ABCMLP_9: FE - Verify that user click on Go to Auction then redirect to respective auction
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     And I click on the 'Login' link from homepage
     And I type valid email and password on the login page
     And I click on the 'Login' button on the login page
     When I click on profile name from homepage
     Then I select My Lots option from homepage
     And I select auction name on select auction dropdown and click on Go to Auction button on mylots page


