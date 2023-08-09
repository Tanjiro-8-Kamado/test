Feature: To check bidding flow from Lot Detail page on auction live stage
    As a user
    I should be able to bid and use all the bid related features

 @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_12: FE: Verify user able to see Estimates amount in rupee is available on nextbid section in lot details page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify Estimates section is available in lot details page
    Then I verify Estimates amount in rupee is available on nextbid section in lot details page

     @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_13: FE: Verify user able to see Estimates amount in dollar is available on nextbid section in lot details page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify Estimates section is available in lot details page
    Then I verify Estimates amount in dollar is available on nextbid section in lot details page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_14: FE: Verify user able to see Lot closes in section on lot cart
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify Lot closes in section on lot details page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_15: FE: Verify user able to see lot closing time is available on lot carts
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify Lot closes in section on lot details page
    Then I verify lot closing time is available on lot details page

    @regression @smoke @high @qastaging @auctionlive @critical
    Scenario: SM_AL_LLP_16: FE: Verify bidder user able to Place Bid from lot detail page in auction live stage 
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

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_17: FE: Verify user able to see Next Lot button is available on lot detail page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify Next Lot button is available on lot detail page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_18: FE: Verify user able to click on Next Lot button and page should redirect to next lot page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify Next Lot button is available on lot detail page
    When I click on Next Lot button page should redirect to next lot page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_19: FE: Verify user able to see Previous Lot button is available on lot detail page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify Previous Lot button is available on lot detail page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_20: FE: Verify user able to click on Previous Lot button and page should redirect to Previous lot page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify Previous Lot button is available on lot detail page
    When I click on Previous Lot button page should redirect to Previous lot page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_21: FE: Verify user able to land on lot detail page from lot list view of lot list page 
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on toggle button from lot list page
    Then I verify user able to see lots in list view
    When I click view details on required lots from lot list view