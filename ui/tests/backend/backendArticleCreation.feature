Feature: As a backend user able to create article

@regression @qaBackend
Scenario: CM_COMP_ArtC_1 : BE-Verify that user able to click on Content menu then dropdown get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
Then I verify system redirect in Article page

@regression @qaBackend
Scenario: CM_COMP_ArtC_2 : BE-Verify that user able to click on New button then article form get open
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
And I click at New button on article list page
Then I verify system redirect to new form

@regression @qaBackend
Scenario: CM_COMP_ArtC_3 : BE-Verify that user able to see 8 tabs on article form
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
And I click at New button on article list page
Then I verify 8 tabs are displaying in the article form

@regression @qaBackend
Scenario: CM_COMP_ArtC_4 : BE-Verify that user should be not be able to submit form until all mandotarty fields are fill in the article form
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
And I click at New button on article list page
When I click at Save button without entering any value to the article form
Then I verify error message are display to the user on article creation

@regression @qaBackend
Scenario: CM_COMP_ArtC_5 : BE-Verify that user able to fll all mandotary details for article creation
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
And I click at New button on article list page
Then I fill all mandotarty fields in the article form

@regression @qaBackend
Scenario: CM_COMP_ArtC_6: BE-Verify that user able to click on 'Save and Close ' button then artcile form get saved and closed
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
Then Enter article name in search box
And I click on article name
Then I click on Save and Close button on article form
And I verfiy success message display on the article form

@regression @qaBackend
Scenario: CM_COMP_ArtC_7: BE-Verify that user able to click on 'Save and New' button then article form get saved and open new article form
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
Then Enter article name in search box
And I click on article name
Then I click on Save and New button on article form
And I verfiy success message display on the article form

@regression @qaBackend
Scenario: CM_COMP_AC_8: BE-Verify that user able to click on 'Close' button then article form get closed
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
Then Enter article name in search box
And I click on article name
Then I click on Close button on the article form

@regression @qa @frontend
Scenario: CM_COMP_ArtC_9 : FE- Verifyed that created aucton should be created and diplay on frontend 
Given I am on the derivaz and Ives homepage
Then I verify Home page slider is displaying on frontend as per the created ariticle

@regression @qaBackend
Scenario: CM_COMP_ArtC_10: BE-Verify that user able to trash article which was created
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
Then I click on Trash button for trash article

@regression @qaBackend
Scenario: CM_COMP_ArtC_11: BE-Verify that user able to search article by Search field
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
Then I search article by Search field

@regression @qaBackend
Scenario: CM_COMP_ArtC_12: BE-Verify that user able to clear search result when click on Clear button
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
Then I search article by Search field
And I clear search article result when click on Clear button

