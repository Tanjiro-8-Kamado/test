Feature: To check bidding flow from Lot Detail page on auction live stage
    As a user
    I should be able to bid and use all the bid related features

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_1: FE: verify guest user not able to see bid now button in auction live stage 
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify guest user should able to see register to bid button
    When I click on viewdetails of lot
    Then I verify guest user should able to see register to bid button in lot details page
    When I click on register to bid button from lot details page
    Then I verify guest user should able to redirect to 'register to bid' form page from lot details page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_2: FE: Verify guest user not able to see bid now button in auction live stage 
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify guest user should able to see register to bid button
    When I click on viewdetails of lot
    Then I verify guest user should able to see register to bid button in lot details page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_3: FE: Verify bidder user able to see bid now button available in lot details page
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
    When I click on viewdetails of lot
    Then I verify bidder user able see 'Bid Now' button is available on lot detail page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_4: FE: Verify bidder user able to see Place Bid button in lot detail page
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
    When I click on viewdetails of lot
    Then I verify bidder user able see 'Bid Now' button is available on lot detail page
    When I click on 'Bid Now' button from lot detail page
    Then I verify 'Place Bid' button gets appear in the popup on lot detail page

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_5: FE: Verify user able to see next bid text available in next bid section in lot detail page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify next bid section is available in lot details page

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_6: FE: Verify user able to see next bid amount in rupee is available on nextbid section in lot details page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify next bid section is available in lot details page
    Then I verify next bid amount in rupee is available on nextbid section in lot details page

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_7: FE: Verify user able to see next bid amount in dollar is available on nextbid section in lot details page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify next bid section is available in lot details page
    Then I verify next bid amount in dollar is available on nextbid section in lot details page

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_8: FE: Verify user able to see current bid text available in next bid section in lot detail page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open 
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify current bid section is available in lot details page

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_9: FE: Verify user able to see current bid amount in rupee is available on nextbid section in lot details page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify current bid section is available in lot details page
    Then I verify current bid amount in rupee is available on nextbid section in lot details page

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_10: FE: Verify user able to see current bid amount in dollar is available on nextbid section in lot details page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify current bid section is available in lot details page
    Then I verify current bid amount in dollar is available on nextbid section in lot details page

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_11: FE: Verify user able to see Estimates bid text available in next bid section in lot detail page
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on viewdetails of lot
    Then I verify Estimates section is available in lot details page

   





