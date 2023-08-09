Feature: To check bidding flow on auction live stage
    As a user
    I should be able to bid and use all the bid related features

    @regression @high @qastaging 
    Scenario: SM_AL_LLP_1: FE: verify user able to see auction available in auction live stage in all auction page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_2: FE: verify user able to click on live auction and should redirect to lot list page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_3: FE: verify guest user not able to see bid now button in auction live stage 
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify guest user should able to see register to bid button
    
    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_4: FE: verify guest user when click on register to bid button should redirects to register to bid form page
    Given I am on the derivaz and Ives homepage
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    Then I verify guest user should able to see register to bid button
    When I click on ' Register To Bid ' button
    Then I verify current page is register to bid form page

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_23: FE: verify user able to see list view of lot list page 
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on toggle button from lot list page
    Then I verify user able to see lots in list view

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_24: FE: verify guest user able to see register to bid button in list view of lot list page 
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on toggle button from lot list page
    Then I verify user able to see lots in list view
    Then I verify Register to bid button is available in lots instead of bid now button

    @regression @high @qastaging @auctionlive
    Scenario: SM_AL_LLP_25: FE: verify guest user able to redirect on registeration form page when clicks on register to bid button in list view of lot list page 
    Given I am on the derivaz and Ives homepage 
    When I click on accept cookie button
    When I click on viewall link of all auction section
    Then I verify '060817' Auction Live stage is available in all auction page
    When I click on auction number '060817' then their respective lot list page gets open
    Then I verify same auction gets open in lot list page by validating auction '060817'
    Then I verify auction is available on auction live stage in lot list page
    When I click on toggle button from lot list page
    Then I verify user able to see lots in list view
    Then I verify Register to bid button is available in lots instead of bid now button
    When I click on Register to bid button from list view
    Then I verify current page is register to bid form page

    






    
    











    











    





















   


    






































