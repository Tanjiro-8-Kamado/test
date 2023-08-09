Feature: To check lot details and description along with features for Admin user in Live with result page 
    As a Admin user
    I should be able to use and see the details and functionalities that comes up in Live with result page

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_12 FE - Verify user able to see change in current bid amount when bid gets placed
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
    Then I verify user able to see change in current bid amount when bid gets placed
   
    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_13 FE - Verify user able to see change in Next bid amount when bid gets placed
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
    Then I verify user able to see change in Next bid amount when bid gets placed

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_14 FE - Verify user able to see change in Total Bids count when bid gets placed
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
    Then I Verify user able to see change in Total Bids count when bid gets placed

    @regression @high @qastaging 
    Scenario: SM_AB_ABPLLP_15 FE - Verify user able to see change in Highest bidder name when places bid
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
    Then I Verify user able to see change in Highest bidder name when places bid