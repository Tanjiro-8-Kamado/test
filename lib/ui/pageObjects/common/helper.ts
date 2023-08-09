/// <reference types="cypress" />
type Comparison = 'eq' | 'be.gt' | 'be.gte' | 'be.lt' | 'be.lte';
const isVisible = 'be.visible';
const wait2k = 2000;
import 'cypress-xpath';
import moment from 'moment';

class Helper {
  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
     | Date:        June 2022                                                           |
     | Method:      isVisible                                                           |
     | Description: This method allows you to check if an element is visible or not.    | 
      */
  isVisible(locator: string, timeout?: number) {
    if (timeout !== undefined) {
      cy.get(locator, { timeout: timeout }).should(isVisible);
    } else {
      cy.get(locator).should(isVisible);
    }
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
     | Date:        June 2022                                                           |
     | Method:      clickOnButton                                                       |
     | Description: This method lets you click on any button.                           | 
      */
  clickOnButton(locator: string, option?: string) {
    if (typeof option !== 'undefined') {
      cy.get(locator).should(isVisible).contains(option).scrollIntoView().click();
    } else {
      cy.get(locator).should(isVisible).scrollIntoView().click();
    }
  }


  forceclick(locator: string, option?: string) {
    if (typeof option !== 'undefined') {
      cy.get(locator).should(isVisible).contains(option).scrollIntoView().click({force:true});
    } else {
      cy.get(locator).should(isVisible).scrollIntoView().click({force:true});
    }
  }
  
  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |
     | Date:        June 2022                                                           |
     | Method:      enterText                                                           |
     | Description: This method lets you type values into the text field or text box.   | 
      */
  enterText(locator: string, value: any, option?: any) {
    cy.get(locator).should(isVisible).clear({ force: true }).type(value, option).should('have.value', value);
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |
     | Date:        June 2022                                                           |
     | Method:      uncheckElement                                                      |
     | Description: This method lets you uncheck the Radio box or Checkbox.             | 
     | It takes option as an optional parameter and based on that performs action.      | 
      */
  uncheckElement(locator: string, option?: any) {
    if (typeof option !== 'undefined') {
      cy.get(locator).uncheck(option).should('not.be.checked');
    } else {
      cy.get(locator).uncheck().should('not.be.checked');
    }
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |
     | Date:        June 2022                                                           |
     | Method:      checkElement                                                        |
     | Description: This method lets you check the Radio box or Checkbox.               | 
     | It takes option as an optional parameter and based on that performs action.      | 
      */
  checkElement(locator: string, option?: any) {
    if (typeof option !== 'undefined') {
      cy.get(locator).check(option).should('be.checked');
    } else {
      cy.get(locator).check().should('be.checked');
    }
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |
     | Date:        June 2022                                                           |
     | Method:      verifyText                                                          |
     | Description: This method verify the text.                                        | 
      */
  verifyText(locator: string, message: any) {
    cy.get(locator).should(isVisible).invoke('text').should('eq', message);
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |
     | Date:        June 2022                                                           |
     | Method:      openWebPage                                                         |
     | Description: This method calls the website.                                      | 
     | It takes option as an optional parameter and based on that performs action.      | 
      */
  openWebPage(url: string, option?: any) {
    if (typeof option !== 'undefined') {
      cy.visit(url, option);
    } else {
      cy.visit(url);
    }
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |
     | Date:        June 2022                                                           |
     | Method:      selectDropdown                                                      |
     | Description: This lets you select value from a dropdown                          | 
     | It takes option as an optional parameter and based on that performs action.      | 
      */
  selectDropdown(locator: string, value: string, option?: any) {
    if (typeof option !== 'undefined') {
      cy.get(locator).select(value, option);
    } else {
      cy.get(locator).select(value);
    }
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |
     | Date:        June 2022                                                           |
     | Method:      verifyUrl                                                           |
     | Description: This lets you validate url based on inputs                          |
      */
  verifyCurrentUrl(condition: string, value: string) {
    cy.url().should(condition, value);
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
     | Date:        June 2022                                                           |
     | Method:      clickWithContains                                                   |
     | Description: This method lets you click based on text.                           | 
      */
  clickWithContains(text: string, option?: any) {
    if (typeof option !== 'undefined') {
      cy.contains(text).click(option);
    } else {
      cy.contains(text).click();
    }
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
     | Date:        June 2022                                                           |
     | Method:      isPrefilled                                                         |
     | Description: This method checks whether a field is pre-populated or not.         | 
      */
  isPrefilled(locator: string, value: any) {
    cy.get(locator).should('have.value', value);
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
     | Date:        June 2022                                                           |
     | Method:      isEmpty                                                             |
     | Description: This method checks whether a field is empty or not.                 | 
      */
  isEmpty(locator: string) {
    cy.get(locator).should('be.empty');
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
     | Date:        June 2022                                                           |
     | Method:      isSelected                                                          |
     | Description: This method checks whether a field is selected or not.              | 
      */
  isSelected(locator: string, option?: any) {
    if (typeof option !== 'undefined') {
      cy.get(locator).contains(option).should('be.selected');
    } else {
      cy.get(locator).should('be.selected');
    }
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
     | Date:        June 2022                                                           |
     | Method:      isChecked                                                           |
     | Description: This method checks whether a radio or checkbox is checked or not.   | 
      */
  isChecked(locator: string) {
    cy.get(locator).should('be.checked');
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
     | Date:        June 2022                                                           |
     | Method:      isChecked                                                           |
     | Description: This method checks whether a radio or checkbox is checked or not.   | 
      */
  containsText(locator: string, text: any, option?: any) {
    if (typeof option !== 'undefined') {
      cy.get(locator).contains(text, option);
    } else {
      cy.get(locator).contains(text);
    }
  }

  /*  
   | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
   | Date:        June 2022                                                           |
   | Method:      clickIfVisible                                                      |
   | Description: This method click if element is visible, conditional click.         | 
    */
  clickIfVisible(locator: string) {
    cy.get('body').then(body => {
      if (body.find(locator).length > 0 && body.find(locator).is(':visible')) {
        cy.get(locator).click();
      }
    });
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |
     | Date:        June 2022                                                           |
     | Method:      typeIfVisible                                                       |
     | Description: This method type if element is visible, conditional type.           |
      */
  typeIfVisible(locator: string, text: string) {
    cy.get('body').then(body => {
      if (body.find(locator).length > 0) {
        cy.get(locator).type(text);
      }
    });
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
     | Date:        June 2022                                                           |
     | Method:      isNotVisible                                                        |
     | Description: This method allows you to check if an element is not visible.       | 
      */
  isNotVisible(locator: string) {
    cy.get(locator).should('not.be.visible');
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
     | Date:        June 2022                                                           |
     | Method:      support                                                             |
     | Description: This method helps to work efficiently.                              | 
      */
  support(locator: string, option?: number) {
    if (typeof option !== 'undefined') {
      return cy.get(locator, { timeout: option });
    } else {
      return cy.get(locator);
    }
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |     
     | Date:        June 2022                                                           |
     | Method:      getIframe                                                           |
     | Description: This method returns the iframe.                                     | 
      */
  getIframe(iframe: string, option?: any) {
    if (typeof option !== 'undefined') {
      return cy.get(iframe, option).its('0.contentDocument.body').should(isVisible).then(cy.wrap);
    } else {
      return cy.get(iframe).its('0.contentDocument.body').should(isVisible).then(cy.wrap);
    }
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |
     | Date:        June 2022                                                           |
     | Method:      getCurrentUrl                                                       |
     | Description: This return current url                                             |
      */
  getCurrentUrl() {
    return cy.url();
  }

  /*  
     | Author:      Aasim Anwar (aasim_anwar@outlook.com)                               |
     | Date:        June 2022                                                           |
     | Method:      waitForApiToFinish                                                  |
     | Description: This method wait for loader to disappear based on API               |
      */
  waitForApiToFinish(apiType: string, apiAlias: string, apiName?: string) {
    if (typeof apiName !== 'undefined') {
      cy.intercept(apiType, apiAlias).as(apiName);
      cy.wait(`@${apiName}`);
    } else {
      cy.intercept(apiType, apiAlias).as('waitForApiToFinish');
      cy.wait('@waitForApiToFinish');
    }
  }

  /*
   | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                 |
   | Date:        June 2022                                                             |
   | Method:      haveClass                                                             |
   | Description: This method assert class attribute of an element                      |
    */
  haveClass(locator: string, className: string) {
    cy.get(locator).should('have.class', className);
  }

  /*
   | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                 |
   | Date:        June 2022                                                             |
   | Method:      notExist                                                              |
   | Description: This method assert that element not exist                             |
    */
  notExist(locator: string) {
    cy.get(locator).should('not.exist');
  }

  /*
   | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                 |
   | Date:        June 2022                                                             |
   | Method:      dragToElement                                                         |
   | Description: drags 'dragLocator' element to the 'doprLocator'                      |
    */
  dragToElement(dragLocator: string, dropLocator: string) {
    const dataTransfer = new DataTransfer();
    cy.get(dragLocator).first().trigger('dragstart', { dataTransfer });

    cy.get(dropLocator).trigger('drop', { dataTransfer });
  }

  /*
   | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                 |
   | Date:        June 2022                                                             |
   | Method:      dragToPosition                                                        |
   | Description: This method drags element to specific position on the page            |
    */
  dragToPosition(dragLocator: string, positionX: number, positionY: number) {
    cy.get(dragLocator)
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { which: 1, pageX: positionX, pageY: positionY })
      .trigger('mouseup', { force: true });
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                   |
  | Date:        June 2022                                                               |
  | Method:      onShadowClick                                                           |
  | Description: This method clicks a visible element in a modal with shadow             |
  */
  onShadowClick(parentLocator: string, childLocator: string) {
    cy.get(parentLocator).shadow().find(childLocator).scrollIntoView().click();
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                    |
  | Date:        June 2022                                                                |
  | Method:      onShadowClickIfVisible                                                   |
  | Description: This method clicks if visible element in a modal with shadow             |
  */
  onShadowClickIfVisible(parentLocator: string, childLocator: string) {
    cy.get('body')
      .wait(wait2k)
      .then(body => {
        if (body.find(parentLocator).length > 0 && body.find(parentLocator).is(':visible')) {
          this.onShadowClick(parentLocator, childLocator);
        }
      });
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                      |
  | Date:        June 2022                                                                  |
  | Method:      onShadowIsVisible                                                          |
  | Description: This method checks if an element is visible in a modal with shadow         |
  */
  onShadowIsVisible(parentLocator: string, childLocator: string) {
    cy.get(parentLocator).shadow().find(childLocator).should(isVisible);
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                       |
  | Date:        June 2022                                                                   |
  | Method:      getShadowElement                                                            |
  | Description: This method returns the element with .find                                  |
  */
  getShadowElement(parentLocator: string, childLocator: string) {
    return cy.get(parentLocator).shadow().find(childLocator);
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                       |
  | Date:        June 2022                                                                   |
  | Method:      onShadowContainsText                                                        |
  | Description: This method validates if element contains wished text                       |
  */
  onShadowContainsText(parentLocator: string, childLocator: string, text: string) {
    this.getShadowElement(parentLocator, childLocator).contains(text);
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                       |
  | Date:        June 2022                                                                   |
  | Method:      capitalizeFirstLetter                                                       |
  | Description: This method returns a text, where first letter is capitalized               |
  */
  capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                       |
  | Date:        June 2022                                                                   |
  | Method:      onShadowSupport                                                             |
  | Description: This method helps to work efficiently on shadow                             |
  */
  onShadowSupport(parentLocator: string) {
    return cy.get(parentLocator).shadow();
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                       |
  | Date:        June 2022                                                                   |
  | Method:      convertToNumber                                                             |
  | Description: This method helps to convert the string value in number                     |
  */
  convertToNumber(input: string) {
    return Number(input.replace(/[$,€,£,INR,+]/g, ''));
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                       |
  | Date:        June 2022                                                                   |
  | Method:      getText                                                                     |
  | Description: This method helps to get the text of locator                                |
  */
  getText(input: JQuery<HTMLElement>) {
    return input.text().trim().replace(/\n/g, '');
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                                |
  | Date:        June 2022                                                                            |
  | Method:      assertLength                                                                         |
  | Description: This method asserts that length of locator is equal, greater, lower etc. than value  |
  */
  assertLength(locator: string, comparison: Comparison, value: number) {
    cy.get(locator).its('length').should(comparison, value);
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                                       |
  | Date:        June 2022                                                                                   |
  | Method:      openNewUrlAsPop                                                                             |
  | Description: This method helps to launch the new url as pop up and then we can intract with the dom      |
  */
  openNewUrlAsPop() {
    cy.window().then(win => {
      cy.stub(win, 'open', url => {
        win.location.href = url;
      }).as('popup');
    });
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                      |
  | Date:        June 2022                                                                  |
  | Method:      openNewUrl                                                                 |
  | Description: This method helps to launch the new url                                    |
  */
  openNewUrl(newUrl: string) {
    cy.window().then(win => win.open(newUrl, '_self'));
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                      |
  | Date:        June 2022                                                                  |
  | Method:      waitFor                                                                    |
  | Description: This method is used for static wait                                        |
  */
  waitFor(waitTime: number) {
    cy.wait(waitTime);
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                      |
  | Date:        June 2022                                                                  |
  | Method:      waitFor                                                                    |
  | Description: This method is used for static wait                                        |
  */
  writeFile(path: string, value: string) {
    cy.writeFile(path, value);
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                      |
  | Date:        June 2022                                                                  |
  | Method:      waitFor                                                                    |
  | Description: This method is used for static wait                                        |
  */
  readFile(path: string, encoding?: string) {
    let mydata = cy.readFile(path);
    return mydata;
  }

  /*
  | Author:      Aasim Anwar (aasim_anwar@outlook.com)                                      |
  | Date:        June 2022                                                                  |
  | Method:      getEnvironment                                                             |
  | Description: This method is usefull to get the env                                      |
  */
  getEnvironment() {
    let env = 'qa';
    if (Cypress.env('ENV').toString().includes('prod')) {
      env = 'prod';
    }
    if (Cypress.env('ENV').toString().includes('preview')) {
      env = 'preview';
    }
    return env;
  }

  xpath(locator:string) {
    return cy.xpath(locator)
  }

  systemCurrentDateTime(){
    const currentstartTime = moment();
    const startDateTime = currentstartTime.add(17, 'minutes').format("YYYY-MM-DD HH:mm");
    const currenendtime = moment();
    const endDateTime = currenendtime.add(22, 'minutes').format("YYYY-MM-DD HH:mm");
    return { startDateTime, endDateTime };
}


}
export default Helper;
