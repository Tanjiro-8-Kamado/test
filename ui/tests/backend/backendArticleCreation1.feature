Feature: As a backend user able to create article

@regression @qaBackend
Scenario: CM_COMP_ArtC_12: BE-Verify that user able to see below options Select Status,Select Language,Select Max Levels when click on article Search Tool 
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
Then I verify search tool options for article

@regression @qaBackend
Scenario: CM_COMP_ArtC_13: BE-Verify that user able to check article status by Select Status searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
When I click on Search Tool option for article
And I click on 'Trashed' menu on the Select Status dropdown and check it open the correct page
And I click on 'Unpublished' menu on the Select Status dropdown and check it open the correct page
And I click on 'Published' menu on the Select Status dropdown and check it open the correct page
And I click on 'Archived' menu on the Select Status dropdown and check it open the correct page
And I click on 'All' menu on the Select Status dropdown and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_ArtC_14: BE-Verify that user able to select category from Select Category searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
When I click on Search Tool option for article
And I click on 'Uncategorised' menu on the Select Category dropdown and check it open the correct page
And I click on 'Footer Articles' menu on the Select Category dropdown and check it open the correct page
And I click on 'news' menu on the Select Category dropdown and check it open the correct page
And I click on 'homepage-slider' menu on the Select Category dropdown and check it open the correct page
And I click on 'Featured Carousel' menu on the Select Category dropdown and check it open the correct page
And I click on 'Registration Slider' menu on the Select Category dropdown and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_ArtC_15: BE-Verify that user able to check access from Select Access searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
When I click on Search Tool option for article
And I click on 'Public' menu on the Select Access dropdown and check it open the correct page
And I click on 'Guest' menu on the Select Access dropdown and check it open the correct page
And I click on 'Registered' menu on the Select Access dropdown and check it open the correct page
And I click on 'Special' menu on the Select Access dropdown and check it open the correct page
And I click on 'Super Users' menu on the Select Access dropdown and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_ArtC_16: BE-Verify that user able to check author from Select Author searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
When I click on Search Tool option for article
And I click on 'priyanka_s1' menu on the Select Author dropdown and check it open the correct page
And I click on 'sayali' menu on the Select Author dropdown and check it open the correct page
And I click on 'sharayu_y' menu on the Select Author dropdown and check it open the correct page
And I click on 'tushar_s' menu on the Select Author dropdown and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_ArtC_17: BE-Verify that user able to select langueage from Select Language searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
When I click on Search Tool option for article
And I click on 'All' menu on the Select Language dropdown and check it open the correct page
And I click on 'English (en-GB)' menu on the Select Language dropdown and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_ArtC_18: BE-Verify that user able to select tag from Select Tag searching tool option
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
When I click on Search Tool option for article
And I click on 'News' menu on the Select Tag dropdown and check it open the correct page
And I click on 'Finance' menu on the Select Tag dropdown and check it open the correct page

@regression @qaBackend
Scenario: CM_COMP_ArtC_19: BE-Verify that user able to unpublish article
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
Then I search article by Search field
And I select searched article and click on unpublish button

@regression @qaBackend
Scenario: CM_COMP_ArtC_20: BE-Verify that user able to publish article
Given I am on the derivaz and Ives backend
And I input admin username and password
And I click on the 'Log in' button on login page
And I click at Content Menu from backend dropdown open
And I click at Articles Menu from Content menu
Then I search article by Search field
And I select searched article and click on publish button

