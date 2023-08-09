Feature: To check bidding flow on auction live stage
    As a user
    I should be able to bid and use all the bid related features

@regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_5: FE: verify bidder user able to see bid now button available in lot list page
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

    @regression @high @qastaging @auctionlive @critical
    Scenario: SM_AL_LLP_6: FE: verify bidder user able to see Place Bid button in auction live stage 
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

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_7: FE: verify bidder user able to see next bid section is available in lot cart
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify next bid section for lot number '1' is available in lot cart

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_8: FE: verify bidder user able to see next bid amount in rupee is available on nextbid section in lot
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify next bid section for lot number '1' is available in lot cart
    Then I verify next bid amount in rupee for lot number '1' is available on nextbid section in lot

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_9: FE: verify bidder user able to see next bid amount in dollar is available on nextbid section in lot
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify next bid section for lot number '1' is available in lot cart
    Then I verify next bid amount in dollar for lot number '1' is available on nextbid section in lot

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_10: FE: verify bidder user able to see current bid section is available in lot cart
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify current bid section for lot number '1' is available in lot cart

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_11: FE: verify bidder user able to see current bid amount in rupee is available on nextbid section in lot
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify current bid section for lot number '1' is available in lot cart
    Then I verify current bid amount in rupee for lot number '1' is available on nextbid section in lot

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_12: FE: verify bidder user able to see current bid amount in dollar is available on nextbid section in lot
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify current bid section for lot number '1' is available in lot cart
    Then I verify current bid amount in dollar for lot number '1' is available on nextbid section in lot

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_13: FE: verify user able to see Estimates section is available in lot cart 
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify Estimates section for lot number '1' is available in lot cart

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_14: FE: verify user able to see  amount in rupee is available on Estimates section in lot 
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify Estimates section for lot number '1' is available in lot cart
    Then I verify Estimates amount in rupee for lot number '1' is available on nextbid section in lot

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_15: FE: verify user able to see  amount in dollar is available on Estimates section in lot 
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify Estimates section for lot number '1' is available in lot cart
    Then I verify Estimates amount in dollar for lot number '1' is available on nextbid section in lot

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_16: FE: verify user able to see totalbids text is available in totalbids section on lot cart
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify totalbids text for lot number '1' is available in totalbids section on lot cart