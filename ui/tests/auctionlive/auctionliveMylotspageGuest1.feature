Feature: To check bidding flow from My Lot page on auction live stage
    As a user
    I should be able to bid and use all the bid related features

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_9  verify user able to see estimate amount is available in rupee on required lot in my lots page
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
    When I select saved lots auction from dropdown in my lots page
    Then I verify estimate amount is available in rupee on required lot in my lots page
    
    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_10  verify user able to see estimate amount is available in dollar on required lot in my lots page
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
    When I select saved lots auction from dropdown in my lots page
    Then I verify estimate amount is available in dollar on required lot in my lots page

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_11  verify user able to see current bid text is available in current bid amount section on required lot in my lots page
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
    When I select saved lots auction from dropdown in my lots page
    Then I verify current bid text is available in current bid amount section on required lot in my lots page

    @regression @high @qastaging @auctionlive 
    Scenario: SM_AL_LLP_12  verify user able to see current bid amount is available in rupee on required lot in my lots page
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
    When I select saved lots auction from dropdown in my lots page
    Then I verify current bid amount is available in rupee on required lot in my lots page