Feature: Authentication of the user
    As a user
    I should be able to see register to bid button, and bidder registration is pending message

    @regression @login @high @QA
    Scenario: UM_SU_UR_3: Verify Register user should get register to bid message in profile page
        Given I am on the derivaz and Ives homepage
        When I click on the 'Login' link from homepage
        And I type valid email and password on the login page for register pending user
        And I click on the 'Login' button on the login page
        Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
        When I go to profile page from homepage
        Then I verify message is displayed on profile page
                
    @regression @login @high @QA
    Scenario:Scenario 1: UM_SU_BR_11: Verify user able to Edit Profile | Scenario 2: verify that user is able to update the fields in edit profile page 
        Given I am on the derivaz and Ives homepage
        When I click on the 'Login' link from homepage
        And I type valid bidder email and password on the login page
        And I click on the 'Login' button on the login page
        Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
        When I go to profile page from homepage
        And I click on the 'Edit' link from profile page
        Then I verify 'Edit Details' message is displayed on profile page
        And I updated data for each field on profile page
        Then I verify 'Profile Succesfully Updated' message is displayed in the pop up on the login page
        When I go to logout from profile page

    @regression @login @high @QA
    Scenario: UM_SU_UR_4: FE: Verify that user email and log into the website with newly updated account
        Given I am on the derivaz and Ives homepage
        When I click on the 'Login' link from homepage
        And I type valid bidder email and password on the login page to update the mail id
        And I click on the 'Login' button on the login page
        Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
        When I go to profile page from homepage
        And I click on the 'Edit' link from profile page
        Then I verify 'Edit Details' message is displayed on profile page
        And I updated username on profile page
        Then I verify 'Profile Succesfully Updated' message is displayed in the pop up on the login page
        And I verify user name is update at the place of display name at the top
        When I go to logout from profile page

    @regression @login @high @QA
    Scenario: UM_SU_BR_10: verify user not able to login with old email
        Given I am on the derivaz and Ives homepage
        When I click on the 'Login' link from homepage
        And I type old bidder user and password on the login page system did't allow to login
        And I click on the 'Login' button on the login page
        Then I verify 'Username and password do not match or you do not have an account yet.' message is displayed in the pop up on the login page

 @regression @login @high @QA
 Scenario: UM_SU_BR_18: verify user able to login with new updated email
        Given I am on the derivaz and Ives homepage
        When I click on the 'Login' link from homepage
        And I type valid bidder username and password on the login page with the update the mail id
        And I click on the 'Login' button on the login page
        When I go to profile page from homepage
        And I click on the 'Edit' link from profile page
        And I undo the updated username on profile page
        Then I verify 'Profile Succesfully Updated' message is displayed in the pop up on the login page
        When I go to logout from profile page

@regression @login @high @QA
 Scenario: UM_SU_BR_8: verify user able to login with new updated email
  Given I am on the derivaz and Ives homepage
        When I click on the 'Login' link from homepage
        And I type valid bidder email and password on the login page to update the mail id
        And I click on the 'Login' button on the login page
        When I go to profile page from homepage
        And I click on the 'Edit' link from profile page
        And I updated username on profile page with a exist username
        Then I verify 'Username in use.' message is displayed in the pop up on the login page