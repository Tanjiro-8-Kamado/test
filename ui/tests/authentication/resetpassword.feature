Feature: Valid user should be able to reset the password
    As a user
    I should be able to rest password with my valid email id 

    @regression @login @high @QA
    Scenario: UM_RNP_FP_1: Verify user able to click on 'Forgot' password button and redirect to 'Forgot Your Password?' page
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I click on accept cookie button
    When I click on the 'Forgot ?' link from login page
    When I verify Forgot Your Password text is present in the forgot password page
    
    @regression @login @high @QA
    Scenario: UM_RNP_FP_2,3,4,5,6 Scenario 1: Verify user able to type text in 'Email Address' field of the page 'Forgot Your Password?'| Scenario 2: Verify 'Email address' field does not accepting invalid emails |Scenario 3 :Verify user able to get error message when provided email are not in correct format | Scenario 4 : Verify user able to submit email address and redirects to user verification page | Senario 5 : Verify user able to move for next step in resetting password with valid username
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I click on accept cookie button
    When I click on the 'Forgot ?' link from login page
    And I type invalid Email id on forgot password page
    And I click on the 'Next' button on the login page
    Then system should display 'Invalid email address' error message 
    Then I type correct email id on forgot password page
    And I click on the 'Next' button on the login page
    
    @regression @login @high @QA                       
    Scenario: UM_RNP_FP_7  Verify user able to fetch the verification Code from mailinator
    Given I launch mailinator website for resetpassword
    Then I fetch the verification Code from mailinator

    @regression @login @high @QA                  
    Scenario: UM_RNP_FP_8,9  Scenario 1: Verify Verification code from mailinator and type Password and verify password on forgot password page | Scenario 2: Verify user should not able to reset password when 'password' field and 'Verify password' does not have same text 
    Given I open the verification code
    And  I click on the Next button on the forgetpwd page
    Then I type Password and invalid Verify Password on forgot password page 
    And I see Passwords did not match message on forgot password page
    Then I type Password and verify password on forgot password page
    And I click on Reset password button on forgot password page
    And I see successful Reset password message on forgot password page
        
    @regression @login @high @QA                       
    Scenario: UM_RNP_FP_10 Verify user not able to go to next page when 'Email Address' field in blank
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I click on accept cookie button
    When I click on the 'Forgot ?' link from login page
    Then I click on the email address textbox on the login page
    And I click on the Next button on the login page
    And I see Email Required message on forgot password page

    @regression @login @high @QA                       
    Scenario: UM_RNP_FP_11 Verify user not able to go to next page when 'Verification Code' field is blank
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I click on accept cookie button
    When I click on the 'Forgot ?' link from login page
    Then I type correct email id on forgot password page
    And I click on the 'Next' button on the login page
    Then I click on the verification code textbox on the login page
    And I Click on the Next button on the login page
    And I see Verification code required message on forgot password page

    @regression @login @high @QA                    
    Scenario: UM_RNP_FP_12 Verify super user is not able to request for Reset Password 
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage
    And I click on accept cookie button
    When I click on the 'Forgot ?' link from login page
    Then I type superuser email id on forgot password page
    And I click on the 'Next' button on the login page
    And I see validatation message on forgot password page
        