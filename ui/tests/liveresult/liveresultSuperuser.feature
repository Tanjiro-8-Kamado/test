Feature: To check lot details and description along with features for Admin user in Live with result page 
    As a Admin user
    I should be able to use and see the details and functionalities that comes up in Live with result page

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_8 FE - Verify user able to see 'Live with result' tab in Auction Results stage 
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid admin username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '350' Auction Result stage is available in all auction page
    When I click on auction number '350' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction number '350'
    Then I verify auction is available on auction Result stage in lot list page
    Then I verify user is logged in as super user by verifying availability of Live with Result tab in lot list page

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_9 FE - Verify user able to see 'Bid Now' button in Live with Result page in Auction live stage
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

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_10 FE - Verify user able to see 'Place Bid' button in Live with Result page in Auction live stage
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
    When I click on Bid Now button in Live with Result page
    Then I verify Place Bid button gets appear in popup in Live with result page

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_11 FE - Verify user able to bid place successfully in Auction live stage
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
    When I click on Bid Now button in Live with Result page
    Then I verify Place Bid button gets appear in popup in Live with result page
    When I click on Place Bid button from Live With Result page
    Then I verify bid gets placed successfully from live with Result page

    