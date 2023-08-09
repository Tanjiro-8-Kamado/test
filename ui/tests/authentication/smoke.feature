Feature: Smoke test cases of project
    As a user
    I should be able to execute all critical test cases to have 100% pass result
    I should be able to add new critical test case in this file

    @regression @registeration @critical @smoke
    Scenario: UM_SU_UR_1: I create a new account from sign up page
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I create a new account

    @regression @registeration @critical @qa @smoke
    Scenario: UM_SU_UR_2: I get verification link from mailinator
    Given I launch YOPmail website
    Then I fetch the verification link from YOPmail

    @regression @registeration @high @smoke
    Scenario: UM_SU_UR_3: I try to login without verifying the email
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I input newly created username and password
    And I click on the 'Login' button on the login page
    Then I verify 'Email Verification Pending.' message is displayed in the pop up on the login page

    @regression @registeration @critical @qa @smoke
    Scenario: UM_SU_UR_4: I verify my email and log into the website with newly created account
    Given I open the verification link
    And I click on accept cookie button
    And I input newly created username and password
    And I click on the 'Login' button on the login page 
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page

    