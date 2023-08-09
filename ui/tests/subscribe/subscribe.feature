Feature: Authentication of the user
    As a user
    I should be able to land on subscribe page and should subscribe

    @regression @login @high @live
    Scenario: UM_SB_FSB_1:verify user should successfully able to subscribe
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I type email-address in subscribe field textbox
    Then I click on subscribe button
    And I verify You have subscribe notification
    
    @regression @registeration @critical @live
    Scenario: UM_SB_FSB_2: I get verification link from YOPmail
    Given I launch YOPmail website for subscribe
    Then I fetch the subscriptiontoken from YOPmail

    @regression @registeration @critical @live
    Scenario: UM_SB_FSB_3: I verify user email is verified from backend
    Given I am on the derivaz and Ives backend
    And I input admin username and password
    And I click on the 'Log in' button on login page
    And I click at 'Users' Menu from backend dropdown open
    And I click at 'management' Menu in user menu
    Then I verify user email exist in backend

    @regression @registeration @critical @live
    Scenario: UM_SB_FSB_4:  Verify that user able to delete the subscribe user
    Given I am on the derivaz and Ives backend
    And I input admin username and password
    And I click on the 'Log in' button on login page
    And I click at 'Users' Menu from backend dropdown open
    And I click at 'management' Menu in user menu
    Then I delete the subscribe user



