Feature: Registeration of the user
    As a user
    I should be able to interact with authentication
    I should be able to register into the site

    @regression @registeration @critical
    Scenario: UM_SU_UR_1: I create a new account from sign up page
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I create a new account

    @regression @registeration @critical @qa
    Scenario: UM_SU_UR_2: I get verification link from YOPmail
    Given I launch YOPmail website
    Then I fetch the verification link from YOPmail

    @regression @registeration @high
    Scenario: UM_SU_UR_3: I try to login without verifying the email
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I input newly created username and password
    And I click on the 'Login' button on the login page
    Then I verify 'Email Verification Pending.' message is displayed in the pop up on the login page

    @regression @registeration @critical @qa
    Scenario: UM_SU_UR_4: I verify my email and log into the website with newly created account
    Given I open the verification link
    And I click on accept cookie button
    And I input newly created username and password
    And I click on the 'Login' button on the login page 
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page

    @regression @registeration @critical @qa
    Scenario: UM_SU_UR_5: Verify that user is not able to submit the signup form when any required fields are not filled
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    Then I try to create a new account by keeping blank mandatory fields

    @regression @registeration @critical @qa
    Scenario: UM_SU_UR_6: Verify register user is display in backend 
    Given I am on the derivaz and Ives backend
    And I input admin username and password
    And I click on the 'Log in' button on login page
    And I click at 'Users' Menu from backend dropdown open
    And I click at 'management' Menu in user menu
    Then I verify register user is display in backend 

    @regression @registeration @critical @live
    Scenario: UM_SU_UR_7: Verify that user able to delete the register user
    Given I am on the derivaz and Ives backend
    And I input admin username and password
    And I click on the 'Log in' button on login page
    And I click at 'Users' Menu from backend dropdown open
    And I click at 'management' Menu in user menu
    Then I delete the register user