Feature: To check bidding flow on absentee bid open stage
    As a user
    I should be able to bid and use all the absentee bid related features

 @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_10 FE - Verify user able to place absentee bid in grid view of lot list page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    Then I Verify bidder user able to see 'Place Absentee Bid' button for lot number '2' in grid view of lot list page
    When I click on the Place Absentee Bid button for lot number '2' in grid view of lot list page

 @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_20: I verify absenetee bid place mail from YOPmail
    Given I launch YOPmail website for subscribe
    Then I verify placed absentee bid mail on yopmail

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_11 FE - Verify user able to see list view in lot list page 
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    When I click on toggle button from lot list page
    Then I verify user able to see lots in list view

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_14 FE - Verify user able to place absentee bid in list view of lot list page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    When I click on toggle button from lot list page
    Then I verify user able to see lots in list view
    When I click on Place Absentee Bid button in list view of lot list page

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_15 FE - Verify user able to cancel placed absentee bids
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    Then I verify user able to see delete button available for lot number '2' on absentee bid placed lots
    Then I verify user able to delete placed absentee bids for lot number '2'

@regression @high @qastaging
    Scenario: SM_AB_ABPLLP_21: I verify absenetee bid delete mail from YOPmail
    Given I launch YOPmail website for subscribe
    Then I verify delete absentee bid mail on yopmail

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_16 FE - Verify user able to revise placed absentee bid 
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    Then I verify user able to see Revise button for lot number '2' available on lot cart in absentee bid stage
    When I increase the amount of placed absentee bids on lot cart for lot number '2'
    Then I verify user able to revise placed absentee bids for lot number '2'
    When I click on lotdetail link for lot number '2' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button

@regression @high @qastaging
    Scenario: SM_AB_ABPLLP_22: I verify absenetee bid revise mail from YOPmail
    Given I launch YOPmail website for subscribe
    Then I verify revise absentee bid mail on yopmail

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_19 FE: Verify that user able to redirect on lot details page when clicked on lot details link from lot cart
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    When  I click on lotdetail link for lot number '2' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_18 FE - Verify user able to see auction gets saved after placing absentee bid
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    Then I Verify bidder user able to see 'Place Absentee Bid' button for lot number '2' in grid view of lot list page
    When I click on the Place Absentee Bid button for lot number '2' in grid view of lot list page
    Then I verify user able to see lot number '2' gets saved after placing absentee bid by verifying save button highlighted

 @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_08 FE - Verify user able to increase amount by clicking up-arrow button on grid view
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    Then I increase the amount for lot number '5' by clicking up-arrow button on grid view

@regression @high @qastaging
    Scenario: SM_AB_ABPLLP_09 FE - Verify user able to decrease amount by clicking down-arrow button on grid view
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    Then I increase the amount for lot number '5' by clicking up-arrow button on grid view
    Then I decrease the amount for lot number '5' by clicking down-arrow button on grid view

@regression @high @qastaging
    Scenario: SM_AB_ABPLLP_12 FE - Verify user able to increase amount by clicking up-arrow button in list view of lot list page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    When I click on toggle button from lot list page
    Then I verify user able to see lots in list view
    Then I increase the amount by clicking up-arrow button on lot list page

@regression @high @qastaging
    Scenario: SM_AB_ABPLLP_13 FE - FE - Verify user able to decrease amount by clicking down-arrow button in list view of lot list page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    When I click on toggle button from lot list page
    Then I verify user able to see lots in list view
    Then I increase the amount by clicking up-arrow button on lot list page
    Then I decrease the amount by clicking down-arrow button on lot list page

    