Feature: Authentication of the user
  As a user
  I should be able to interact with authentication
  I should be able to log into the site

  @regression @login @high @live
  Scenario: UM_LOGN_FEL_1: Verify user able to click on 'login' button
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage    
    Then I verify 'Login form' is displayed on the login page

  @regression @login @high @live
  Scenario: UM_LOGN_FEL_2: Verify user able to type text in Email/username textbox
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I type 'username' in the username text field on the login page

  @regression @login @high @live
  Scenario: UM_LOGN_FEL_3: Verify user able to type text in password textbox
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I type 'password' in the password text field on the login page

  @regression @login @high @live
  Scenario: UM_LOGN_FEL_4: Verify user not able to login when any of required field is empty
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I type 'username' in the username text field on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'Please Enter Valid Details.' message is displayed in the pop up on the login page

  @regression @login @high @live
  Scenario: UM_LOGN_FEL_5: Verify user not able to login with invalid credentials
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I type 'invalid username' in the username text field on the login page
    And I type 'password' in the password text field on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'Username and password do not match or you do not have an account yet.' message is displayed in the pop up on the login page

  @regression @login @high @live
  Scenario: UM_LOGN_FEL_6: Verify user able to login with valid username and password
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I type valid username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    And I log out from the website

  @regression @login @high @live 
  Scenario: UM_LOGN_FEL_7: Verify admin user able to login
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I type valid admin username and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    And I log out from the website

  @regression @login @high @live
  Scenario: UM_LOGN_FEL_8: Verify user able to login with email ID and password credentials
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I type valid email and password on the login page
    And I click on the 'Login' button on the login page
    Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
    And I log out from the website





