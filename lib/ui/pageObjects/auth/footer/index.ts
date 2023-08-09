import Helper from '../../common/helper';
import { Footer as _Footer } from '../../../../../ui/locators/objectsRepository';
const helper = new Helper();

class Footer {
    verifyFooter(msg: string) {
    let locator: string;   
    
    switch (msg) {
      case 'Modern Indian Fine Arts':
        locator = _Footer.modernIndianFineArts;
        break;

      case 'Contemporary Indian Fine Arts':
        locator = _Footer.contemporaryIndianFineArts;
        break;

        case 'Vintage & Classic Automobiles and Travel Heritage':
        locator = _Footer.vintageClassicAutomobiles;
        break;

        case 'Indian & Asian Antiquities':
        locator = _Footer.indianAsianAntiquities;
        break;

        case 'Antiquarian Books & Prints':
        locator = _Footer.antiquarianBookPrints;
        break;

        case 'Photography':
        locator = _Footer.photography;
        break;
        
        case 'Indian Film Memorabilia':
        locator = _Footer.indianFilmMemorabilia;
        break;

        case 'Hollywood & World Film Memorabilia':
        locator = _Footer.hollywoodWorldFilmMemorabilia;
        break;

        case 'Sporting Memorabilia':
        locator = _Footer.footballCricketOther;
        break;
        
        case 'Auctions':
        locator = _Footer.auction;
        break;

        case 'All Auctions':
        locator = _Footer.allAuction;
        break;

        case 'Current':
        locator = _Footer.currentAuction;
        break;

        case 'Upcoming':
        locator = _Footer.upcommingAuction;
        break;

        case 'Archived':
        locator = _Footer.archiveAuction;
        break;

        case 'About D&I':
        locator = _Footer.aboutUs
        break;
        
        case 'Editorial':
        locator = _Footer.editorial
        break;
        
        case 'Terms and Conditions':
        locator = _Footer.termsandconditions
        break;

        case 'Privacy Policy':
        locator = _Footer.privacypolicy
        break;

        case 'Terms of Use':
        locator = _Footer.termsofuse
        break;

        case 'Contact Us':
        locator=_Footer.contactUs
        break;
        
        case 'Consigning To Auctions':
        locator=_Footer.consigningToAuctions
        break; 

        case 'PFI & Delivery':
        locator=_Footer.delivery
        break; 

        case 'Client Relations':
        locator=_Footer.clientRelations
        break;

        case 'Careers':
        locator=_Footer.careerf
        break; 

        case 'Help':
        locator=_Footer.help
        break;

        default:
        throw Error('No case found');
    }

    helper.clickOnButton(locator, msg);
    helper.support(locator).then(text=>{
      const mytext = helper.getText(text)
       expect(mytext).to.contains(msg) 
    })


}
}
export default Footer;