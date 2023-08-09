Feature: Smoke test cases of project
    As a user
    I should be able to execute all critical test cases to have 100% pass result
    I should be able to add new critical test case in this file

    @regression @login @high @live @smoke
    Scenario: UM_LOGN_FEL_6: Verify user able to login with valid username and password
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    And I log out from the website

    @regression @login @high @live @smoke
    Scenario: UM_LOGN_FEL_7: Verify user able to login with email ID and password credentials
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I type valid email and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    And I log out from the website

    @regression @high @qastaging @auctionlive @critical @smoke
    Scenario: SM_AL_LLP  verify bidder user able to Place Bid from lot detail page in auction live stage 
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify availability of bid now button
    Then I verify bidder user able see 'Bid Now' button is available on lot list page
    When I click on viewdetails of lot
    When I click on 'Bid Now' button from lot detail page
    Then I verify 'Place Bid' button gets appear in the popup on lot detail page
    And I click on 'Place Bid' button on lot detail page

    @regression @high @qastaging @auctionlive @critical @smoke
    Scenario: SM_AL_LLP  verify user able to place bid successfully from lot list page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify availability of bid now button
    Then I verify bidder user able see 'Bid Now' button is available on lot list page
    When I click on 'Bid Now' button from lot list page
    Then I verify 'Place Bid' button gets appear in the popup
    When I click on Place Bid button
    Then I verify bid gets placed successfully