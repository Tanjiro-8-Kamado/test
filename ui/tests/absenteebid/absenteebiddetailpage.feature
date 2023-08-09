Feature: To check bidding flow on absentee bid open stage in detail page
    As a user
    I should be able to bid and use all the absentee bid related features


    @regression @high @qastaging
    Scenario: SM_AB_ABPLDP_1 FE - Verify guest user able to see 'Register to bid' button in lot detail page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    When I click on lotdetail link for lot number '2' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button
    Then I Verify guest user able to see Register to bid button in lot detail page

    @regression @high @qastaging
    Scenario: SM_AB_ABPLDP_2 FE - Verify user should be able to redirect to 'Register to bid' form page when clickinng on "Register to bid' button from lot detail page 
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    When I click on lotdetail link for lot number '2' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button
    Then I Verify guest user able to see Register to bid button in lot detail page
    When I click on Register to Bid button in lot detail page
    Then I Verify when user clicks on Register to bid button from lot detail page it redirects to registeration form

    @regression @high @qastaging
    Scenario: SM_AB_ABPLDP_3 FE - Verify user able to see 'Estimates' text ,Estimates amount in rupee,Estimates amount in dollar in Estimate amount section  in lot detail page 
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    When I click on lotdetail link for lot number '2' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button
    Then I verify estimates text is available in lot detail page
    Then I verify estimates amount in rupee is available in lot detail page
    Then I verify estimates amount in dollar is available in lot detail page

    @regression @high @qastaging
    Scenario: SM_AB_ABPLDP_4 FE - Verify user able to see 'Starting bid' text,starting bid amount in rupee,starting bid amount in rupee  in starting amount amount section  in lot detail page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    When I click on lotdetail link for lot number '2' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button
    Then I verify starting bid text is available in lot detail page 
    Then I verify starting bid amount in rupee is available in lot detail page
    Then I verify starting bid amount in dollar is available in lot detail page

    @regression @high @qastaging
    Scenario: SM_AB_ABPLDP_5 FE - Verify bidder user able to see 'Place Absentee Bid' button in lot detail page
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
    When I click on lotdetail link for lot number '2' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button
    Then I Verify bidder user able to see Place Absentee Bid button in lot detail page

    @regression @high @qastaging
    Scenario: SM_AB_ABPLDP_8 FE - Verify user able to place absentee bid in lot detail page
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
    When I click on lotdetail link for lot number '2' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button
    Then I Verify bidder user able to see Place Absentee Bid button in lot detail page
    When I click on place absentee bid button from lot detail page

    @regression @high @qastaging
    Scenario: SM_AB_ABPLDP_10 FE - Verify user able to revise placed absentee bid in lot detail page
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
    When I click on lotdetail link for lot number '2' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button
    Then I verify Revise button is available in lot detail page
    When I click on increment amount button
    When I click on Revise button on lot detail page

    @regression @high @qastaging
    Scenario: SM_AB_ABPLDP_9 FE - Verify user able to cancel placed absentee bidsin lot detail page
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
    When I click on lotdetail link for lot number '2' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button
    Then I verify availability of delete button in lot detail page
    When I click on the delete button on lot detail page

@regression @high @qastaging
    Scenario: SM_AB_ABPLDP_6 FE - Verify user able to increase amount by clicking up-arrow button in lot details page
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
    When I click on lotdetail link for lot number '5' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button
    Then I increase the amount clicking on up-arrow button in lot details page

@regression @high @qastaging
    Scenario: SM_AB_ABPLDP_7 FE - Verify user able to decrease amount by clicking down-arrow button in lot details page
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
    When I click on lotdetail link for lot number '5' on lot cart from lot list page grid view
    Then I verify clicking on lotdetail link from list view redirects on lot detail page by asserting previous button
    Then I increase the amount clicking on up-arrow button in lot details page
    Then I decrease the amount clicking on down-arrow button in lot details page



