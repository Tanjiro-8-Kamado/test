Feature: Backend login 
    As a backend user
    I should be Able to create users from backend 
    

@regression @qaBackend
    Scenario: BM_UR_BUR_1: Scenario: Verify that user click on 'Users' menu then dropdown get open
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then I verify system redirect in Users page
      
@regression @qaBackend
     Scenario: BM_UR_BUR_2: Scenario: BE-Verify that user click on 'New' button then form get open
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then I Click at 'New' button on user list page
     Then I verify System redirect to new form

 @regression @qaBackend
     Scenario: BM_UR_BUR_3: Scenario: BE-Verify that user able to see 8 tabs on form
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then I Click at 'New' button on user list page
     Then I verify System redirect to new form
     Then I verify '8' tabs are displaying in the form

 @regression @qaBackend
     Scenario: BM_UR_BUR_4: Scenario: BE-Verify that user should be not be able to submit from untill all mandotarty fields are fill in the form
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then I Click at 'New' button on user list page
     Then I Click at 'Save' button without entering anything
     Then I verify all error messages are display to the user

@regression @qaBackend
     Scenario: BM_UR_BUR_5: Scenario: BE- Verify that user should get success message once the all mendatory field are fill and form is submited
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then I Click at 'New' button on user list page
     Then I Check all the necessary user group
   
@regression @qaBackend
     Scenario: BM_UR_BUR_6: Scenario: BE- Verify that user should get success message once the all mendatory field are fill and form is submited
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then I Click at 'New' button on user list page
     Then I fill the all required fields
     Then I verify success message is displaying on form

@regression @qaBackend
     Scenario: BM_UR_BUR_7: Scenario:BE-Verify that user able to 'Search Tools' then search tool related option get open
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then Enter username in serach box

@regression @qaBackend
     Scenario: BM_UR_BUR_8: Scenario:BE-Verify that user able to edit the user details
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then Enter username in serach box
     Then I click at username
     Then I edit the password and confirm password
     Then I verify success message is displaying on form

@regression @qaBackend
     Scenario: BM_UR_BUR_9: Scenario: BE- Verify that user should not be able to add user is username is already exist
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then I Click at 'New' button on user list page
     Then I fill the all required fields
     Then I verify user should not be able to save do to message is displaying on form     
     
  @regression @qaBackend
     Scenario: BM_UR_BUR_10: Scenario:BE-Verify that user able to click on 'Save and Close ' button then form get saved and closed
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then Enter username in serach box
     Then I click at username
     Then I click at save and close button
     Then I verify success message is displaying on form

    
  @regression @qaBackend
     Scenario: BM_UR_BUR_11: Scenario:BE-Verify that user able to click on 'Save and New' button then form get saved and new
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then Enter username in serach box
     Then I click at username
     Then I click at save and new button
     Then I verify success message is displaying on form

     @regression @qaBackend
     Scenario: BM_UR_BUR_12: Scenario:  BE-Verify that user able to click on 'Closed' button then form get closed
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then Enter username in serach box
     Then I click at username
     Then I click at closed button
       
    @regression @qaBackend
     Scenario: BM_UR_BUR_13: Scenario:  BE-Verify that user able to select 'Enabled' or'Disabled' option from 'Select State'dropdown and then related result shows
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then Enter username in serach box
     Then I click at enabled icon to disabled the user
     Then I verify the message displaying that user is disabled
     Then I click at disabled icone to enabled the user
     Then I verify the message displaying that user is enabled

@regression @qaBackend
     Scenario: BM_UR_BUR_19: Scenario:BE-Verify that user able to delete the user details
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     And I click at 'Users' Menu from backend dropdown open
     And I click at 'management' Menu in user menu
     Then Enter username in serach box
     Then I click at username checkbox and delete the user
  