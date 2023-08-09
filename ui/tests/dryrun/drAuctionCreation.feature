Feature: As a backend user able to create auction

@dryrun @qaBackend
Scenario: D_R_A_C_1: BE-Login to backend with super user account
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page

@dryrun @qaBackend
Scenario: D_R_A_C_2: BE-Redirect to auction creation
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I verify system redirect in Auction page
And I click at New button on auction list page
Then I verify system redirect to new form auction

@dryrun @qaBackend
Scenario: D_R_A_C_3: BE-Create auction with current system time +20 min as a start  time,end time  with current system time +30 min,Fill all mandatory fields,save the auction(moden India fine art)
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at Components Menu from backend dropdown open
And I click at Auction Menu from Components menu
Then I verify system redirect in Auction page
And I click at New button on auction list page
Then I verify system redirect to new form auction
Then I fill fields in the form with auction current date

@dryrun @qaBackend
Scenario: D_R_L_C_4: BE-Click at lot menu
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu

@dryrun @qaBackend
Scenario: D_R_L_C_5: BE-Click at lot new button 
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I Click at 'New' button on user list page

@dryrun @qaBackend
Scenario: D_R_L_C_6: Senario : BE-Select the above created auction on lot form
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I Click at 'New' button on user list page
Then select the perticulate created auction

@dryrun @qaBackend
Scenario: D_R_L_C_7: Senario : BE-select the date and time as per the created auction for start, end , extender date and time field and Fill all mandatory field and submit the lot form, create multipal lots
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
And I click at 'Lots' Menu after clicking at components then click at lot side menu
Then I Click at 'New' button on user list page
And I enter all mandotary field with auction related dates

@dryrun @qaBackend
Scenario: D_R_L_C_8: Senario : BE-Search the created auction on auction list page
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
Then I search the created auction

@dryrun @qaBackend
Scenario: D_R_L_C_9: Senario : BE-move the auction to cateloge uploaded stage
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
Then I search the created auction
Then I change the status to cateloge uploaded stage and save the auction

@dryrun @qaBackend
Scenario: D_R_L_C_10: Senario : FE-Login to frontend with bidder
Given I am on the derivaz and Ives homepage of Preview
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page

@dryrun @qaBackend
Scenario: D_R_L_C_11: Senario : FE-Click at all auction 
Given I am on the derivaz and Ives homepage of Preview
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
And I click on accept cookie button
When I click on View All link on homepage and All Auction page get open
Then I see all auction in grid view which is already selected on auction page

@dryrun @qaBackend
Scenario: D_R_L_C_12: Senario : FE-Click the respective created auction
Given I am on the derivaz and Ives homepage of Preview
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
And I click on accept cookie button
When I click on View All link on homepage and All Auction page get open
Then I see the auction number '999' available in 'Catalogue Uploaded' stage in auction page
When I click on auction number '999' then their respective lot list page gets open

@dryrun @qaBackend
Scenario: D_R_L_C_13: Senario : FE-Check the auction is in cateloge stage
Given I am on the derivaz and Ives homepage of Preview
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
And I click on accept cookie button
When I click on View All link on homepage and All Auction page get open
Then I see the auction number '999' available in 'Catalogue Uploaded' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify auction is in cateloge uploaded stage

@dryrun @qaBackend
Scenario: D_R_L_C_14: Senario : FE-Check the lot have lot title,Artist, lot number, lot detail link, size, antiquity, estimation,mediam , year of art work on lot list page
Given I am on the derivaz and Ives homepage of Preview
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
And I click on accept cookie button
When I click on View All link on homepage and All Auction page get open
Then I see the auction number '999' available in 'Catalogue Uploaded' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify on lot list page all caption which are added from backend for lot number '1'

@dryrun @qaBackend
Scenario: D_R_L_C_15: Senario : FE-Check the detail page and verify lot number, artist name, title, antiquity, medium,date, signature, size provinance, lot description
Given I am on the derivaz and Ives homepage of Preview
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
And I click on accept cookie button
When I click on View All link on homepage and All Auction page get open
Then I see the auction number '999' available in 'Catalogue Uploaded' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I click on View Details link at lot no '1'
Then I verify the captions on detail page

@dryrun @qaBackend
Scenario: D_R_L_C_16: Senario : FE-Logout from frontend 
When I am on the derivaz and Ives homepage of Preview
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
And I click on accept cookie button
And I log out from the website

@dryrun @qaBackend
Scenario: D_R_L_C_17: Senario : FE-Login to backend 
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page

@dryrun @qaBackend
Scenario: D_R_L_C_18: Senario : FE-Click on auction menu >> search the created auction
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
Then I search the created auction

@dryrun @qaBackend
Scenario: D_R_F_A_19: Senario : BE-Move the auction to absentee bid open
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
Then I search the created auction
Then I change the status to absentee bid open stage and save the auction

@dryrun @qaBackend
Scenario: D_R_20: Senario :Check the bidder get the absentee bid open stage notification mail
Given I launch YOPmail website for subscribe
Then I verify absentee bid open stage notification mail on yopmail

@dryrun @qaBackend
Scenario: D_R_21 FE - Check auction name, lot tiltle, number, artist,  lot number, lot detail link, size, antiquity, estimation,mediam , year of art work, place absentee bid on absentee bid open stage
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I see the auction number '999' available in 'Absentee Bidding Open' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify on lot list page all caption which are added from backend for lot number '1'
Then I verify on lot list page all caption which are added from backend on absentee bid open stage for lot number '1'

@dryrun @qaBackend
Scenario: D_R_22 FE - check the caption  auction name, lot tiltle, number, artist,  lot number, lot detail link, size, antiquity, estimation,mediam , year of art work, place absentee bid on detail page on absentee bid open stage
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I see the auction number '999' available in 'Absentee Bidding Open' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I click on View Details link at lot no '1'
Then I verify the captions on detail page
Then I verify the captions on detail page buttons on absentee bid open stage

@dryrun @qaBackend
Scenario: D_R_23 FE - Verify user able to place absentee bid on created auction
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I see the auction number '999' available in 'Absentee Bidding Open' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I Verify bidder user able to see 'Place Absentee Bid' button for lot number '2' in grid view of lot list page
When I click on the Place Absentee Bid button for lot number '2' in grid view of lot list page

@dryrun @qaBackend
Scenario: D_R_24: I check email notification for absenetee bid place mail from YOPmail
Given I launch YOPmail website for subscribe
Then I verify placed absentee bid mail on yopmail for preview

@dryrun @qaBackend
Scenario: D_R_25 FE - Verify user able to Reviese the place bid on created auction
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I see the auction number '999' available in 'Absentee Bidding Open' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify user able to see Revise button for lot number '2' available on lot cart in absentee bid stage
When I increase the amount of placed absentee bids on lot cart for lot number '2'
Then I verify user able to revise placed absentee bids for lot number '2'

@dryrun @qaBackend
Scenario: D_R_26: I Check the mail notification for revise absentee bid from YOPmail
Given I launch YOPmail website for subscribe
Then I verify revise absentee bid mail on yopmail for preview

@dryrun @qaBackend
Scenario: D_R_27: FE - Verify user able to delete the place bid on created auction
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I see the auction number '999' available in 'Absentee Bidding Open' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify user able to see delete button available for lot number '2' on absentee bid placed lots
Then I verify user able to delete placed absentee bids for lot number '2'

@dryrun @qaBackend
Scenario: D_R_28: I Check the mail notification for delete the place bid from YOPmail
Given I launch YOPmail website for subscribe
Then I verify delete absentee bid mail on yopmail for preview

@dryrun @qaBackend
Scenario: D_R_29 FE - Verify user able to place absentee bid on created auction to check My Absentee Bid on Auction Live stage
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I see the auction number '999' available in 'Absentee Bidding Open' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I Verify bidder user able to see 'Place Absentee Bid' button for lot number '3' in grid view of lot list page
When I click on the Place Absentee Bid button for lot number '3' in grid view of lot list page

@dryrun @qaBackend
Scenario: D_R_30 FE - Verify user able to place absentee bid in grid view of lot list page by 2 bidder user and check email notification
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I see the auction number '999' available in 'Absentee Bidding Open' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I Verify bidder user able to see 'Place Absentee Bid' button for lot number '2' in grid view of lot list page
When I click on the Place Absentee Bid button for lot number '2' in grid view of lot list page by 2 bidder user

@dryrun @qaBackend
Scenario: D_R_31: login to backend
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page

@dryrun @qaBackend
Scenario: D_R_32: Senario : FE-Click on auction menu >> search the created auction
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
Then I search the created auction

@dryrun @qaBackend
Scenario: D_R_33: Senario : BE-Move the auction to absentee bid close
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
Then I search the created auction
Then I change the status to absentee bid close stage and save the auction

@dryrun @qaBackend
Scenario: D_R_34 FE - check the caption   auction name, lot tiltle, number, artist,  lot number, lot detail link, size, antiquity, estimation,mediam , year of art work on lot list page on absentee bid close stage
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I see the auction number '999' available in 'Absentee Bidding Close' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify on lot list page all caption which are added from backend for lot number '1'

@dryrun @qaBackend
Scenario: D_R_35 FE - check the caption on  auction name, lot tiltle, number, artist,  lot number, lot detail link, size, antiquity, estimation,mediam , year of art work lot detail page on absentee bid close stage
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I see the auction number '999' available in 'Absentee Bidding Close' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I click on View Details link at lot no '1'
Then I verify the captions on detail page

@dryrun @qaFrontend
Scenario: D_R_36 FE - Verify user should wait till auction get live
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I see the auction number '999' available in 'Absentee Bidding Close' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I wait till the auction gets live

@dryrun @qaFrontend
Scenario: D_R_37: FE: verify user able to place bid successfully from lot list page
Given I am on the derivaz and Ives homepage of Preview 
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I verify '999' Auction Live stage is available in all auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify auction is available on auction live stage in lot list page
Then I verify availability of bid now button for dryrun
Then I verify bidder user able see 'Bid Now' button is available on lot list page
When I click on 'Bid Now' button from lot list page
Then I verify 'Place Bid' button gets appear in the popup
When I click on Place Bid button
Then I verify bid gets placed successfully 

@dryrun @qaFrontend
Scenario: D_R_38: I verify Place Bid mail from YOPmail
Given I launch the YOPmail website to check Auction live email notification
Then I verify place bid mail on yopmail

@dryrun @qaFrontend
Scenario: D_R_39: FE: verify user able to check availability of highest bidder from lot list page
Given I am on the derivaz and Ives homepage of Preview 
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I verify '999' Auction Live stage is available in all auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify auction is available on auction live stage in lot list page
Then I check availability of highest bidder for dryrun
Then I verify bidder user able see 'Bid Now' button is available on lot list page
When I click on 'Bid Now' button from lot list page
Then I verify 'Place Bid' button gets appear in the popup
When I click on Place Bid button
Then I verify bid gets placed successfully 

@dryrun @qaFrontend
Scenario: D_R_40 : I verify Counter Bid mail from YOPmail
Given I launch the YOPmail website to check Auction live email notification
And I verify counter bid mail on yopmail for preview

@dryrun @qaFrontend
Scenario: D_R_41: FE: verify user able to place bid successfully from lot list page to check selling price
Given I am on the derivaz and Ives homepage of Preview 
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I verify '999' Auction Live stage is available in all auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify auction is available on auction live stage in lot list page
Then I verify availability of bid now button for selling price
Then I verify bidder user able see 'Bid Now' button is available on lot list page for selling price
When I click on 'Bid Now' button from lot list page for selling price
Then I verify 'Place Bid' button gets appear in the popup for selling price
When I click on Place Bid button for selling price
Then I verify bid gets placed successfully for selling price

@dryrun @qaFrontend
Scenario: D_R_42: FE: verify user able to place bid successfully from lot list page for min reserve price
Given I am on the derivaz and Ives homepage of Preview 
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I verify '999' Auction Live stage is available in all auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify auction is available on auction live stage in lot list page
Then I verify availability of bid now button for min reserve price
Then I verify bidder user able see 'Bid Now' button is available on lot list page for min reserve price
When I click on 'Bid Now' button from lot list page for min reserve price
Then I verify 'Place Bid' button gets appear in the popup for min reserve price
When I click on Place Bid button for min reserve price
Then I verify bid gets placed successfully for min reserve price

@dryrun @qaFrontend
Scenario: D_R_43 FE: verify user able to check My absentee bid on lot list page
Given I am on the derivaz and Ives homepage of Preview 
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I verify '999' Auction Live stage is available in all auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify auction is available on auction live stage in lot list page
Then I check My Absentee Bid text in lot list page
Then I check My Absentee Bid value on popup

@dryrun @qaBackend
Scenario: D_R_44 FE - check the caption   auction name, lot tiltle, number, artist,  lot number, lot detail link, size, antiquity, estimation,mediam , year of art work on lot list page on auction live stage
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I verify '999' Auction Live stage is available in all auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify on lot list page all caption which are added from backend for lot number '1'
Then I verify on lot list page all buttons for live stage lot number '1'

@dryrun @qaBackend
Scenario: D_R_45 FE - check the caption on  auction name, lot tiltle, number, artist,  lot number, lot detail link, size, antiquity, estimation,mediam , year of art work lot detail page on auction live stage
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I verify '999' Auction Live stage is available in all auction page
When I click on auction number '999' then their respective lot list page gets open
Then I verify same auction gets open in lot list page by validating auction '999'
Then I click on View Details link at lot no '1'
Then I verify the captions on detail page

@dryrun @qaBackend
Scenario: D_R_46 FE - Verify user should wait till auction get closed
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I see the auction number '999' available in 'Auction Live' stage in auction page
When I click on auction number '999' then their respective lot list page gets open
Then I wait till the auction gets closed

@dryrun @qaBackend
Scenario: D_R_47: Senario : BE-Login to backend with super user account 
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page

@dryrun @qaBackend
Scenario: D_R_48: Senario : BE-Search auction and move the auction to result stage 
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
Then I search the created auction
Then I change the status to result stage and save the auction

@dryrun @qaBackend
Scenario: D_R_49: FE - Verify that user able to see total Sale amount of lots in auctionresults page
Given I am on the derivaz and Ives homepage of Preview
And I click on accept cookie button
And I click on View All link on homepage and All Auction page get open
And I click on auction number '999' and able to see lot in 'Auction Results' stage and see Auction Results text in auction page
Then I see Total Sale amount of lots in auctionresults page for preview

@dryrun @qaBackend
Scenario: D_R_50: FE -Verify that user is able to see lot sold amount on auction results page
Given I am on the derivaz and Ives homepage of Preview
And I click on accept cookie button
And I click on View All link on homepage and All Auction page get open
And I click on auction number '999' and able to see lot in 'Auction Results' stage and see Auction Results text in auction page
Then I see sold lots in auctionresults page for preview

@dryrun @qaBackend
Scenario: D_R_51: FE:Verify that user able to see top three selling price on auction results page
Given I am on the derivaz and Ives homepage of Preview
And I click on accept cookie button
And I click on View All link on homepage and All Auction page get open
And I click on auction number '999' and able to see lot in 'Auction Results' stage and see Auction Results text in auction page
Then I see top three selling price in auctionresults page for preview

@dryrun @qaFrontend
Scenario: D_R_52 : I verify lot-won-notification mail from YOPmail
Given I launch the YOPmail website to check auction results stage notification
And I verify lot-won-notification mail on yopmail for preview

@dryrun @qaFrontend
Scenario: D_R_53 : I verify lot-lost-notification mail from YOPmail
Given I launch the YOPmail website to check auction results stage notification
And I verify lot-lost-notification mail on yopmail for preview

@dryrun @qaFrontend
Scenario: D_R_54 : I verify minimum reserve not met-notification mail from YOPmail
Given I launch the YOPmail website to check auction results stage notification
And I verify minimum reserve not met notification mail on yopmail for preview

@dryrun @qaBackend
Scenario: D_R_55 FE - check the caption   auction name, lot tiltle, number, artist,  lot number, lot detail link, size, antiquity, estimation,mediam , year of art work on lot list page on result stage
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I verify '999' Auction on result stage is available in all auction page
When I click on auction number '999' then their respective lot list page gets open
Then I click at lot tab
Then I verify same auction gets open in lot list page by validating auction '999'
Then I verify on lot list page all caption which are added from backend for lot number in result stage '1'

@dryrun @qaBackend
Scenario: D_R_56 FE - check the caption on  auction name, lot tiltle, number, artist,  lot number, lot detail link, size, antiquity, estimation,mediam , year of art work lot detail page on auction result stage
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I verify '999' Auction on result stage is available in all auction page
When I click on auction number '999' then their respective lot list page gets open
Then I click at lot tab
Then I verify same auction gets open in lot list page by validating auction '999'
Then I click on View Details link at lot no '1'
Then I verify the captions on detail page on result page

@dryrun @qaBackend
Scenario: D_R_57 FE - check the result on result tab and verify the captions
Given I am on the derivaz and Ives homepage of Preview
When I click on accept cookie button
When I click on the 'Login' link from homepage
And I type valid email and password on the preview login page
And I click on the 'Login' button on the login page
Then I verify 'You have successfully Logged In' message is displayed in the pop up on the login page
When I click on viewall link of all auction section
Then I verify '999' Auction on result stage is available in all auction page
When I click on auction number '999' then their respective lot list page gets open
Then I check all captions on result tab

@dryrun @qaBackend
Scenario: D_R_58: Senario : BE-Login to backend with super user account 
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page

@dryrun @qaBackend
Scenario: D_R_L_C_59: Senario : BE-Search the auction and detete from list and then from trash
Given I am on the derivaz and Ives Preview backend
And I input admin username and password for preview
And I click on the 'Log in' button on login page
And I click at 'Components' Menu from backend dropdown
And I click at 'Auction' Menu after clicking at components
Then I change click at selected auction and click at trash button