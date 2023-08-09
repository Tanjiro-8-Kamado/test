Feature: To check bidding flow on auction live stage
    As a user
    I should be able to bid and use all the bid related features

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_26: FE: verify bidder user able to see Bid Now button on lot list view of lot list page 
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
    When I click on toggle button from lot list page
    Then I verify user able to see lots in list view
    Then I verify Bid Now button is available in lot list view 

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_27: FE: verify bidder user able to see Place Bid button on lot list view of lot list page 
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
    When I click on toggle button from lot list page
    Then I verify user able to see lots in list view
    Then I verify Bid Now button is available in lot list view
    When I click on Bid Now button
    Then I verify Place Bid appears in popup

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_28: FE: verify bidder user able to place bid from lot list view
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
    When I click on toggle button from lot list page
    Then I verify user able to see lots in list view
    Then I verify Bid Now button is available in lot list view
    When I click on Bid Now button
    Then I verify Place Bid appears in popup
    When I click on Place Bid button in required lot

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_29: FE: verify lot are saved by verifying background color of save button from lot list page
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
    Then I fetched the background color of save button

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_30: FE: verify user able click on view my lots button from lot list page and page redirects to my lots page
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
    Then I fetched the background color of save button
    When I click on view my lots button from lot list page

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_31: FE: verify Super user able to see bid count
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
    Then I Verify Super user able to see bid count