Feature: Footer menu 
    As a user
    I should be redirect to the clicked menu
    

    @regression @footerMenu @qa
    Scenario: FMM_FM_D_1: Senario 1: FE - Checked all footer menu under depatment should redirect to the pages
        Given I am on the derivaz and Ives homepage
        And I click on accept cookie button
        Then I verify Departments text is displayed on the footer
        And I click on 'Modern Indian Fine Arts' menu on the footer and check it redirect to correct page
        And I click on 'Contemporary Indian Fine Arts' menu on the footer and check it redirect to correct page
        And I click on 'Vintage & Classic Automobiles and Travel Heritage' menu on the footer and check it redirect to correct page
        And I click on 'Indian & Asian Antiquities' menu on the footer and check it redirect to correct page
        And I click on 'Antiquarian Books & Prints' menu on the footer and check it redirect to correct page
        And I click on 'Photography' menu on the footer and check it redirect to correct page
        And I click on 'Indian Film Memorabilia' menu on the footer and check it redirect to correct page
        And I click on 'Hollywood & World Film Memorabilia' menu on the footer and check it redirect to correct page
        And I click on 'Sporting Memorabilia' menu on the footer and check it redirect to correct page

     @regression @footerMenu @qa
     Scenario: FMM_FM_A_2: Senario 1: FE - Checked all footer menu under Auction should redirect to the pages
        Given I am on the derivaz and Ives homepage
        And I click on accept cookie button
        Then I verify Auctions text is displayed on the footer
        And I click on 'Auctions' menu on the footer and check it redirect to correct page
         And I click on 'All Auctions' menu on the footer and check it redirect to correct page
        And I click on 'Current' menu on the footer and check it redirect to correct page
        And I click on 'Upcoming' menu on the footer and check it redirect to correct page
        And I click on 'Archived' menu on the footer and check it redirect to correct page

     @regression @footerMenu @qa
     Scenario: FMM_FM_C_3: Senario 1: FE - Checked all footer menu under Company should redirect to the pages
        Given I am on the derivaz and Ives homepage
        And I click on accept cookie button
        Then I verify Company text is displayed on the footer
        And I click on 'About D&I' menu on the footer and check it redirect to correct page
        And I click on 'Editorial' menu on the footer and check it redirect to correct page
        
     @regression @footerMenu @qa
      Scenario: FMM_FM_C_4: Senario 1: FE - Checked all footer menu under Contact Us should redirect to the pages
        Given I am on the derivaz and Ives homepage
        And I click on accept cookie button
        And I click on 'Contact Us' menu on the footer and check it redirect to correct page
        And I click on 'Consigning To Auctions' menu on the footer and check it redirect to correct page
        And I click on 'PFI & Delivery' menu on the footer and check it redirect to correct page
        And I click on 'Client Relations' menu on the footer and check it redirect to correct page
        And I click on 'Careers' menu on the footer and check it redirect to correct page


      @regression @footerMenu @qa
      Scenario: FMM_FM_C_5: Senario 1: FE - Checked all footer menu under Legal should redirect to the pages
        Given I am on the derivaz and Ives homepage
        And I click on accept cookie button
        Then I verify Legal text is displayed on the footer
        And I click on 'Terms and Conditions' menu on the footer and check it redirect to correct page
        And I click on 'Privacy Policy' menu on the footer and check it redirect to correct page
        And I click on 'Terms of Use' menu on the footer and check it redirect to correct page

      @regression @footerMenu @qa
      Scenario: FMM_FM_C_5: Senario 1: FE - Checked Help menu should redirect to the pages
        Given I am on the derivaz and Ives homepage
        And I click on accept cookie button
        Then I verify Help text is displayed on the footer
        And I click on 'Help' menu on the footer and check it redirect to correct page
