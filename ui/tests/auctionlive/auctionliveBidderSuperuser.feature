Feature: To check bidding flow on auction live stage
    As a user
    I should be able to bid and use all the bid related features

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_17: FE: verify user able to see total bid count is available in totalbids section on lot cart
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify total bid count is available in totalbids section on lot cart

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_18: FE: verify user able to see Lot closes in section on lot cart
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify Lot closes in section for lot number '1' on lot cart

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_19: FE: verify user able to see lot closing time is available on lot carts
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify Lot closes in section for lot number '1' on lot cart
    Then I verify lot closing time is available on lot carts

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_20: FE: verify user able to place bid successfully from lot list page
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

    @regression @high @qastaging
    Scenario: SM_AL_LLP_22: I verify Place Bid mail from YOPmail
    Given I launch the YOPmail website to check Auction live email notification
    Then I verify place bid mail on yopmail

    @regression @high @qastaging
    Scenario: SM_AL_LLP_23: I verify Counter Bid mail from YOPmail
    Given I launch the YOPmail website to check Auction live email notification
    And I verify counter bid mail on yopmail

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_24: FE: verify user able to see total bid count get increased when user places bid
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
    Then I verify total bids count get increased by one on successfull bid placed

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_25: FE: verify user able to see bid get placed at correct amount by verifying next bid amount before bid and current bid amount after bid get equals
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
    Then I verify bid get placed at correct amount by verifying next bid amount before bid and current bid amount after bid get equals

    