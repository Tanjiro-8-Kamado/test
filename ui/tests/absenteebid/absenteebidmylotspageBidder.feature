Feature: To check bidding flow on absentee bid open stage in detail page
    As a user
    I should be able to bid and use all the absentee bid related features

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_11 FE - Verify user able to see list view of mylots page in absentee bid open stage
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
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    When I click on toggle button in my lots page
    Then I verify list view appears in my lots page
    Then I verify user able to see place absentee bid button in list view of my lots page
    When I click on place absentee bid button user able to place absentee bid in list view of my lots page

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_12 FE - Verify user able to see Place Absentee Bid button in list of my lots page
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
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    When I click on toggle button in my lots page
    Then I verify list view appears in my lots page
    Then I verify user able to see place absentee bid button in list view of my lots page

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_13 FE - Verify user able to place absentee bid  in list view of my lots page
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
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    When I click on toggle button in my lots page
    Then I verify list view appears in my lots page
    Then I verify user able to see place absentee bid button in list view of my lots page
    When I click on place absentee bid button user able to place absentee bid in list view of my lots page

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_14 FE - Verify user able to see 'Delete'  button after placing absentee bid from my lots grid view page
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
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    Then I verify the current amount in bid value
    Then I verify availability of Delete button in grid view of my lots page
    Then I verify availability of Revise button in grid view of my lots page
    When I click on Delete button in my lots page i verify the placed absentee bid gets deleted
    When I click on Revise button in placed absentee bid lot in my lot page , i verify absentee bid gets revised 

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_15 FE - Verify user able to see 'Revise'  button after placing absentee bid from my lots grid view page
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
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    Then I verify the current amount in bid value
    Then I verify availability of Revise button in grid view of my lots page


    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_16 FE - Verify user able to cancel placed absentee bid  in my lots grid view page
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
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    When I click on Delete button in my lots page i verify the placed absentee bid gets deleted
    
    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_17 FE - Verify user able to revise placed absentee bid  in my lots grid view page
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
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    When I click on Revise button in placed absentee bid lot in my lot page , i verify absentee bid gets revised
 
    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_6 FE - Verify user able to increase amount by clicking up-arrow button in my lots page
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
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    Then I increase the amount by clicking up-arrow button on my lot page

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_7 FE - Verify user able to decrease amount by clicking down-arrow button in my lots page
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
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    Then I increase the amount by clicking up-arrow button on my lot page
    Then I decrease the amount by clicking down-arrow button on my lot page

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_9 FE - Verify user able to increase amount by clicking up-arrow button in list view of my lots page
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
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    When I click on toggle button in my lots page
    Then I verify list view appears in my lots page
    Then I increase the amount by clicking up-arrow button in list view of my lots page

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_10 FE - Verify user able to decrease amount by clicking down-arrow button in list view of my lots page
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
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    When I click on toggle button in my lots page
    Then I verify list view appears in my lots page
    Then I increase the amount by clicking up-arrow button in list view of my lots page
    Then I decrease the amount by clicking down-arrow button in list view of my lots page