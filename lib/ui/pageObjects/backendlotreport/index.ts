import Helper from '../../../ui/pageObjects/common/helper';
import {BackendAuctionCreation,BackendLotReport,backendUserReport} from '../../../../ui/locators/objectsRepository';

const helper=new Helper();

class lot{

    verfiystateforlotreport(lotstate:string){
        let lotstatelocator:string;
        helper.clickOnButton(BackendAuctionCreation.statedropdwn)

        switch(lotstate){
            case 'Published' :
                lotstatelocator=BackendAuctionCreation.aucpublishstate;
                break;

            case 'Trashed' :
                lotstatelocator=BackendLotReport.lottrashstate;
                break;

            default:
                throw Error('no case')
            }
            helper.forceclick(lotstatelocator);
            helper.support(BackendAuctionCreation.statedropdwn).then(statetext=>{
                expect(statetext.text()).to.contains(lotstate)
            })
    }

    verfiylotstatusforlotreport(lotstatus:string){
        let lotstatuslocator:string;
        helper.clickOnButton(BackendLotReport.lotstatusdropdwn)

        switch(lotstatus){
            case 'Upcoming' :
                lotstatuslocator=BackendLotReport.lotupcomingstatus;
                break;

            case 'Live' :
                lotstatuslocator=BackendLotReport.lotlivestatus;
                break;
            
            case 'Sold' :
                lotstatuslocator=BackendLotReport.lotsoldstatus;
                break;  
    
            case 'Brought In' :
                lotstatuslocator=BackendLotReport.lotbroughtinstatus;
                break; 
            
            case 'Withdrawn' :
                lotstatuslocator=BackendLotReport.lotwithdrawnstatus;
                break; 
            
            default:
                throw Error('no case');
                
        }
        helper.clickOnButton(lotstatuslocator)
        helper.support(BackendLotReport.lotstatusdropdwn).then(statustext=>{
            expect(statustext.text()).to.contains(lotstatus)
        })
    }

    verifyselectgrponuserrepo(grp:string){
        let grplocator:string;
        helper.clickOnButton(backendUserReport.userselectgrpreport);

        switch(grp){
            case '- Guest':
                grplocator=backendUserReport.guestuserreport;
                break;

            case '- - DerivazUser':
                grplocator=backendUserReport.derivazuserrepo;
                break;

            case '- Registered':
                grplocator=backendUserReport.userregisteredreport;
                break;

            case '- - Bidders':
                grplocator=backendUserReport.bidderuserreport;
                break;
            
            case '- Super Users':
                grplocator=backendUserReport.superuserreport;
                break;

            default:
                throw Error('no case');
                

        }
        cy.get(grplocator).scrollIntoView().click();
        helper.support(backendUserReport.userselectgrpreport).then(grptext=>{
            expect(grptext.text()).to.contains(grp);
        })

    }
}
export default lot;