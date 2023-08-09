Feature: Bidder access to Register user by superuser
    As a user
    I should be able to register into the site
    I should get the bidder access and view the notification on profile page
    As a superuser I should be able to view the created user 
    and I should give the bidder access to the user  

    @regression @registeration @critical
    Scenario: CBAFFE_1: Verify that user click at register button on fronend and create a new user 
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I create a new account

    @regression @registeration @critical @qa
    Scenario: CBAFFE_2: I get verification link from YOPmail
    Given I launch YOPmail website
    Then I fetch the verification link from YOPmail

    @regression @registeration @high
    Scenario: CBAFFE_3: I try to login without verifying the email
    Given I am on the derivaz and Ives homepage
    And I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I input newly created username and password
    And I click on the 'Login' button on the login page
    Then I verify 'Email Verification Pending.' message is displayed in the pop up on the login page

    @regression @registeration @critical @qa
    Scenario: CBAFFE_4: I verify my email and log into the website with newly created account
    Given I open the verification link
    And I click on accept cookie button
    And I input newly created username and password
    And I click on the 'Login' button on the login page 
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page

    @regression @registeration @critical @qa
    Scenario: CBAFFE_5: Verify register user is display in backend 
    Given I am on the derivaz and Ives backend
    And I input admin username and password
    And I click on the 'Log in' button on login page
    And I click at 'Users' Menu from backend dropdown open
    And I click at 'management' Menu in user menu
    Then I verify register user is display in backend 

    @regression @registeration @critical @qa
    Scenario: CBAFFE_6: Verify that user got the bidder acl by superuser 
    Given I am on the derivaz and Ives backend
    And I input admin username and password
    And I click on the 'Log in' button on login page
    And I click at 'Users' Menu from backend dropdown open
    And I click at 'management' Menu in user menu
    Then I verify register user is display in backend
    Then I give bidder access to the user and save the changes
    
    @regression @registeration @critical @qa
    Scenario: CBAFFE_7: I verify bidder get the proper message on profile page
    And I click on accept cookie button
    When I click on the 'Login' link from homepage
    And I input newly created username and password
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    When I go to profile page from homepage
    Then I verify 'Bidder Registration Approved.' message is displayed in the profile page

    @regression @registeration @critical
    Scenario: CBAFFE_8: Verify that user able to delete the register user
    Given I am on the derivaz and Ives backend
    And I input admin username and password
    And I click on the 'Log in' button on login page
    And I click at 'Users' Menu from backend dropdown open
    And I click at 'management' Menu in user menu
    Then I delete the register user