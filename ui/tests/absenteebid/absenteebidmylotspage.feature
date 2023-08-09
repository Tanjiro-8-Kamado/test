Feature: To check bidding flow on absentee bid open stage in detail page
    As a user
    I should be able to bid and use all the absentee bid related features

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_1 FE - Verify user able to redirect on My-lots page from lot list page in absentee bid open stage 
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

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_2 FE - Verify user able to select absentee bid open stage auction in my lots page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then  I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    
    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_3 FE - Verify user able to see 'Estimates' text,estimates amount in rupee,estimates amount in dollar in Estimate amount section  in my lots page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then  I see the auction number '05072023' available in 'Absentee Bidding Open' stage in auction page
    When I click on auction number '05072023' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '05072023'
    When I click on view my lots button from lot list page in absentee bid stage
    Then I verify page redirects on my lots page
    Then I verify Estimates text is available in estimate amount section on lot cart in My lots page
    Then I verify Estimates amount in rupee is available on estimates section in lot cart of absentee bid open stage in  my lots page
    Then I verify Estimates amount in dollar is available on estimates section in lot cart of absentee bid open stage in  my lots page

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_4 FE - Verify user able to see 'Starting bid' text,starting bid amount in rupee,starting bid amount in dollar in starting amount amount section   in my lots page
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
    Then I verify Starting bid text is available in Starting bid amount section on lot cart in My lots page
    Then I verify Starting bid amount in rupee is available on Starting bid amount section in lot cart of absentee bid open stage in  my lots page
    Then I verify Starting bid amount in dollar is available on Starting bid amount section in lot cart of absentee bid open stage in  my lots page

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_5 FE - Verify bidder user able to see 'Place Absentee Bid' button  in my lots page
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
    Then I verify user able to see Place Absentee Bid buttonon lot cart in my lots page

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_8 FE - Verify user able to place absentee bid in grid view in my lots page
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
    Then I verify user able to see Place Absentee Bid buttonon lot cart in my lots page
    When I click on place absentee bid button

    @regression @high @qastaging
    Scenario: SM_AB_ABPMLP_9 FE - Verify user able to see current amount in grid view in my lots page
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

    



    

