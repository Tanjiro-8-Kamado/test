Feature: To check bidding flow on absentee bid open stage
    As a user
    I should be able to bid and use all the absentee bid related features

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_1  FE-Verify that  user able to see absentee bid open stage auction all auction section
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_2 FE-Verify that  user able to see absentee bid open stage auction in lot list page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    
    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_3 FE - Verify guest user able to see 'Register to bid' button 
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    Then I Verify guest user able to see Register to bid button in absenteebidopen stage from lot list page

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_4 FE - Verify user should be able to redirect to 'Register to bid' form page when clicking on "Register to bid' button
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    Then I Verify guest user able to see Register to bid button in absenteebidopen stage from lot list page
    When I click on Register to bid button
    Then I verify current page is register to bid form page

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_5 FE - Verify user able to see 'Estimates' text and Estimate amount section
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    Then I verify Estimates section is available in lot cart
    Then I verify Estimates amount in rupee is available on nextbid section in lot
    Then I verify Estimates amount in dollar is available on nextbid section in lot

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_6 FE - Verify user able to see 'Starting bid' text in starting amount amount section,amount in rupee and amount in dollar
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    Then I verify Starting bid text is available in starting bid amount section on lot cart
    Then I verify Starting bid amount available in rupee
    Then I verify Starting bid amount available in dollar

    @regression @high @qastaging
    Scenario: SM_AB_ABPLLP_7 FE - Verify bidder user able to see 'Place Absentee Bid' button in grid view of lot list page
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

   
    





    




    















