Feature: To check header menus
    As a user
    I should be able to see all menus and it should be clickable

    @regression @header @high 
    Scenario: verify user able to see and click on Departments menu
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      Then I verify Departments text is displayed on the header
      And I click on 'Departments' menu on the header
     

    @regression @header @high
    Scenario Outline: verify user able to click on menus and and should be redirect to their respective page
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      Then I verify Departments text is displayed on the header
      And I click on 'Departments' menu on the header
      When I click on '<submenu>' submenu from departments header
      Then I verify '<submenubreadcrum>' text is present in the breadcrum of the page
      Examples:
          | submenu                                            | submenubreadcrum                                   |
          | Modern Indian Fine Arts                            | Modern Indian Fine Arts                            |
          | Contemporary Indian Fine Arts                      | Contemporary Indian Fine Arts                      | 
          | Vintage & Classic Automobiles and Travel Heritage  | Vintage & Classic Automobiles and Travel Heritage  |
          | Indian & Asian Antiquities                         | Indian & Asian Antiquities                         | 
          | Antiquarian Books & Prints                         | Antiquarian Books & Prints                        |
          | Photography                                        | Photography                                        |
          | Indian Film Memorabilia                            | Indian Film Memorabilia                            |
          | Hollywood & World Film Memorabilia                 | Hollywood & World Film Memorabilia                 |
          | Football, Cricket & Other Sporting Memorabilia     | Football, Cricket & Other Sporting Memorabilia     |

    @regression @header @high
    Scenario: verify Editorial menu is available in header menu and it is clickable
      Given I am on the derivaz and Ives homepage 
      And I click on accept cookie button 
      And I verify Editorial text is available in the header menus
      When I click on 'Editorial' menu in the header
      Then I verify user redirects in correct page

    @regression @header @high
    Scenario: verify user able to see and click on Auctions menu in header
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      Then I verify Auctions text is displayed on the header
      And I click on 'Auctions' menu on the header

    @regression @header @high
    Scenario Outline: verify user able to click on Auctions menus and their submenus and it be should be redirect to their respective page
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      Then I verify Auctions text is displayed on the header
      And I click on 'Auctions' menu on the header
      When I click on '<auctionsubmenu>' submenu from Auctions header
      Then I verify "<allauctionsubmenu>" text is present as header of the page
      Examples:
          | auctionsubmenu | allauctionsubmenu        |
          | All Auctions   | All Auctions             | 
          | Current        | - Current                | 
          | Upcoming       | - Upcoming               |
          | Archived       | - Archived               |

          
    @regression @header @high
    Scenario: verify user able to see and click on More menu
      Given I am on the derivaz and Ives homepage
      And I click on accept cookie button
      Then I verify More text is displayed on the header
      When I click on 'More' menus on the header

    @regression @header @high
    Scenario Outline: verify user able to see and click on More menu 
     Given I am on the derivaz and Ives homepage
     And I click on accept cookie button
     Then I verify More text is displayed on the header 
     When I click on 'More' menus on the header
     When I click on '<submenu>' submenu from more menu
     Examples:
       | submenu     |
       | About Us    | 
       | Contact Us  | 


                    
      

      


          



     
      
      
