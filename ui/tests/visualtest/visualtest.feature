Feature: To check content are not broken
    As a user
    I should be able to see all the data contents are not broken and should be able to recognize the changes


    @regression @header @high
    Scenario: VM_SPS_VTC_1 : verify Editorial page has image and content are not broken
      Given I am on the production environment of derivaz and Ives homepage
      And I click on accept cookie button 
      And I verify Editorial text is available in the header menus
      When I click on 'Editorial' menu in the header
      Then I verify user redirects in correct page
      Then I take the actual snapshots and expected snapshots of the editorial page

   @regression @login @high 
   Scenario: VM_SPS_VTC_2 : verify login form page does not have anything broken
    Given I am on the production environment of derivaz and Ives homepage
    Given I am on the derivaz and Ives homepage
    When I click on the 'Login' link from homepage    
    Then I verify 'Login form' is displayed on the login page
    Then I verify login form page does not have anything broken
  
  @regression @login @high
   Scenario: VM_SPS_VTC_3 : verify snapshot of signup page with blank data , I verify same visuals comes for all users
    Given I am on the production environment of derivaz and Ives homepage
    When I click on 'Register to Bid' button to land on sign up page
    Then I take snapshot of signup page with blank data , i verify same visuals comes for all users

@regression @login @high
   Scenario: VM_SPS_VTC_4 : verify snapshot of about us page, I verify same visuals comes for all users
    Given I am on the production environment of derivaz and Ives homepage
    When I click on More menu on homepage
    And I click on About us menu
    Then I take the snapshots of the page and verify the contents,data and image are unchanged and not broken

@regression @login @high
   Scenario: VM_SPS_VTC_5 : verify snapshot contact us, I verify same visuals comes for all users
    Given I am on the production environment of derivaz and Ives homepage
    When I click on More menu on homepage
    And I click on Contact us menu
    Then I take the snapshots of the Contact us page and verify the contents,data and image are unchanged and not broken    

@regression @footer @high
    Scenario: VM_SPS_VTC_6 : FE - verify 'Terms and Condition' page does not have anything broken
      Given I am on the production environment of derivaz and Ives homepage
      And I click on accept cookie button 
      And I click on 'Terms and Conditions' menu on the footer and check it redirect to correct page
      Then I take the actual snapshots and expected snapshots of the terms and condition page

@regression @footer @high
    Scenario: VM_SPS_VTC_7 : FE - verify 'Privacy Policy' page does not have anything broken
      Given I am on the production environment of derivaz and Ives homepage
      And I click on accept cookie button 
      And I click on 'Privacy Policy' menu on the footer and check it redirect to correct page
      Then I take the actual snapshots and expected snapshots of the Privacy Policy page

@regression @footer @high
    Scenario: VM_SPS_VTC_8 : FE - verify 'Terms of Use' page does not have anything broken
      Given I am on the production environment of derivaz and Ives homepage
      And I click on accept cookie button 
      And I click on 'Terms of Use' menu on the footer and check it redirect to correct page
      Then I take the actual snapshots and expected snapshots of the Terms of Use page      