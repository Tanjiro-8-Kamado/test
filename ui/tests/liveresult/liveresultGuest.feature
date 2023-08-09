Feature: To check lot details and description along with features for Admin user in Live with result page 
    As a Admin user
    I should be able to use and see the details and functionalities that comes up in Live with result page

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_1 FE - Verify guest user not be able to see Live with result page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    Then I verify user is visited as guest by verifying login button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify the un-availability of Live with Result tab in lot list page

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_2 FE - Verify registered user not be able to see Live with result page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type credential of user without having bidder access
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I go to profile page from homepage
    Then I verify user is logged in as registered user without having bidder access
    Then I verify user visits homepage of site
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify the un-availability of Live with Result tab in lot list page

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_3 FE - Verify bidder user not be able to see Live with result page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I go to profile page from homepage
    Then I verify user is logged in as bidder user with having bidder access
    Then I verify user visits homepage of site
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify the un-availability of Live with Result tab in lot list page

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_4 FE - Verify admin user able to see Live with result page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid admin username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify user is logged in as super user by verifying availability of Live with Result tab in lot list page

     @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_5 FE - Verify user able to see Lot No.,Title,Starting Bid,Current Bid,Next Bid,Reserve Price,Total Bids,Highest Bidder,Status columns under Lots section in 'Live with result' page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid admin username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify user is logged in as super user by verifying availability of Live with Result tab in lot list page
    When I click on Live with Result tab in lot list page
    Then I verify Live with Result page gets open by verifying Highest bidder column header
    Then I verify user able to see Bid Now button in lot carts
    Then I verify the availability of Lot No.,Title,Starting Bid,Current Bid,Next Bid,Reserve Price,Total Bids,Highest Bidder,Status in LivewithResult column header

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_6 FE - Verify user able click on lot title that must be clickable and it redirects to lot detail page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid admin username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify user is logged in as super user by verifying availability of Live with Result tab in lot list page
    When I click on Live with Result tab in lot list page
    Then I verify Live with Result page gets open by verifying Highest bidder column header
    When I click on lot details link in required lot
    Then I verify detail page gets open of that respective lot


    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_7 FE - Verify user able to see 'Live with result' tab in Auction live stage
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid admin username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify user is logged in as super user by verifying availability of Live with Result tab in lot list page

    

   

    








   
