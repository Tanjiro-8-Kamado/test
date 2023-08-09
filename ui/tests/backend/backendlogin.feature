Feature: Backend login 
    As a backend user
    Autorised user should be login and unautorised user should not be able to login
    

    @regression @qaBackend
    Scenario: BM_LOGN_BEL1: Senario 1: BE - Verify that user able to open backend link
     Given I am on the derivaz and Ives backend
    
    @regression @qaBackend
    Scenario: BM_LOGN_BEL_2: Senario 1: BE - BE-Verify that user not able to login when any of required field is empty and get error validation message  when any field is empty 
      Given I am on the derivaz and Ives backend
      And I input admin username and click at login
      Then I verify 'Username and password do not match or you do not have an account yet.' error message is displayed in the pop up on the login page
      And I input admin password and click at login
      Then I verify 'Username and password do not match or you do not have an account yet.' error message is displayed in the pop up on the login page
   
    @regression @qaBackend
    Scenario: BM_LOGN_BEL_3: Senario 1: Verify that user not able to login with invalid credentials
      Given I am on the derivaz and Ives backend
      And I input invalid username and password and click at login


     @regression @qaBackend
     Scenario: BM_LOGN_BEL_4: Senario 1: BE - Verify that user able to type username/ password in respective textbox
      Given I am on the derivaz and Ives backend 
      And I input admin username and password

    @regression @qaBackend
     Scenario: BM_LOGN_BEL_5: Senario 1: BE-Verifty that bidder user not able to login for backend and it gives warning message
     Given I am on the derivaz and Ives backend 
     And I input bidder user username and password to login in backend
     And I click on the 'Log in' button on login page
     Then I verify 'You do not have access to the Administrator section of this site.' error message is displayed in the pop up on the login page 

     @regression @qaBackend
     Scenario: BM_LOGN_BEL_6: Senario 1: BE-Verify that registered user not able to login for backend and it gives warning message
     Given I am on the derivaz and Ives backend 
     And I input register user username and password
     And I click on the 'Log in' button on login page
     Then I verify 'You do not have access to the Administrator section of this site.' error message is displayed in the pop up on the login page

     @regression @qaBackend
     Scenario: BM_LOGN_BEL_8: Senario 1: BE-Verify that user able to login with valid superuser credentials
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     
     @regression @qaBackend
     Scenario: BM_LOGN_BEL_9: Senario 1: BE-Verify that user able to see backend home page after user get login
     Given I am on the derivaz and Ives backend 
     And I input admin username and password
     And I click on the 'Log in' button on login page
     Then I verify Control Panel is displaying in dashboard

