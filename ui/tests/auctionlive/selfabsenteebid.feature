Feature: To check bidding flow on absentee bid open stage in detail page
    As a user
    I should be able to see self absente bid and can verify the self absentee bid related features


    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_23 - FE:Verify that bidder should be able to view self absentee bid
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '0226577' Auction Live stage is available in all auction page
    When I click on auction number '0226577' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '0226577'
    Then I verify self absentee bid is availability for bidder

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_24 - FE:Verify that selft absentee bid is displaying on live stage when the auctions are close 
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '0226577' Auction Live stage is available in all auction page
    When I click on auction number '0226577' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '0226577'
    Then I verify self absentee bid is availability for bidder

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_25 -FE:Verifiy that self absentee bid should e display in details page also when auction is in live stage and not close
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '0226577' Auction Live stage is available in all auction page
    When I click on auction number '0226577' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '0226577'
    Then I verify self absentee bid is availability on details page

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_26 -FE:Verifiy that self absentee bid should not display in details page when auction is in live stage and close
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '0226577' Auction Live stage is available in all auction page
    When I click on auction number '0226577' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '0226577'
    Then I verify self absentee bid is not availability on details page when lot is closed
    
    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_29 -FE:Verify that guest user should not be able to view absentee bid 
    Given I am on the derivaz and Ives homepage
    When I click on viewall link of all auction section
    Then I verify '0226577' Auction Live stage is available in all auction page
    When I click on auction number '0226577' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '0226577'
    Then I verify guest user not able to view absentee bid to check with Lot Closed status for lot number '1'

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_27 -FE:Verify that self absentee bid is displaying on result stage 
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid admin username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '060820' Auction Result stage is available in all auction page
    When I click on auction number '060820' then their respective lot list page gets open
    Then I verify same results auction gets open in lot list page by validating auction '060820'
    And I click on Lot tab and verify self absentee bid for lot number '1' display on results stage

     @regression @high @live
    Scenario: SM_AB_ABPLLP_28: FE:Verify that superuser should be able to view self absentee bid 
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid admin username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    Then I click on View All link on homepage and All Auction page get open
    And I click on auction number '350' and able to see lot in 'Auction Results' stage and see Auction Results text in auction page
    Then I click at lots tab
    Then I verify the self absentee bid for the superuser