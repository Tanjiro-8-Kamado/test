Feature: Authentication of the user
    As a user
    I should be able to see register to bid button, and bidder registration is pending message

    @regression @login @high @live
    Scenario: UM_LOGN_FEL_11: Verify registered user able to see 'register to bid' button and header message as 'bidder registration pending'
        Given I am on the derivaz and Ives homepage
        When I click on the 'Login' link from homepage
        And I type valid username and password on the login page
        And I click on the 'Login' button on the login page
        Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
        And I verify username is diplayed on homepage