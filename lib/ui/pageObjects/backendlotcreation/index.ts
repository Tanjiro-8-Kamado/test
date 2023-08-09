import Helper from '../common/helper';
import {Backendlots} from '../../../../ui/locators/objectsRepository';

const helper=new Helper();

class backendcreatelot{
    
    verifystate(lot:string){
    let statelocator:string
    helper.clickOnButton(Backendlots.statedropdwnlot);

    switch(lot){
        case "Published":
            statelocator=Backendlots.publishstatelot;
            break;

        case "Trashed":
            statelocator=Backendlots.trashstatelot;
            break;

        default:
            throw Error('no test case')
    }
    cy.get(statelocator).scrollIntoView().click({force:true});
    helper.support(Backendlots.statedropdwnlot).then(statetext=>{
        expect(statetext.text()).to.contains(lot)
    })
    }

    verifylotstatus(lotstatus:string){
        let lotstatuslocator:string;
        helper.clickOnButton(Backendlots.lotstatusdrop);

        switch(lotstatus){
            case "Upcoming":
                lotstatuslocator=Backendlots.upcominglot;
                break;
            
            case "Live":
                lotstatuslocator=Backendlots.livelot;
                break;

            case "Sold":
                lotstatuslocator=Backendlots.soldlot;
                break;

            case "Brought In":
                lotstatuslocator=Backendlots.broughtinlot;
                break;

            case "Withdrawn":
                lotstatuslocator=Backendlots.withdrawn;
                break;

            default:
                throw Error('no test case')
        }
        cy.get(lotstatuslocator).scrollIntoView().click({force:true});
        helper.support(Backendlots.lotstatusdrop).then(lotstatustext=>{
            expect(lotstatustext.text()).to.contains(lotstatus)
        })
    }

}

export default backendcreatelot;