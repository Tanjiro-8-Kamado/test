import Helper from '../common/helper';
import { backendArticleCreation } from '../../../../ui/locators/objectsRepository';
import * as user from '../../../../ui/fixtures/backendauctiondetails.json';
import message from '../../../../ui/fixtures/message.json';


const helper=new Helper();

class backendcreatearticle{
      enterfieldinarticle(){
        helper.enterText(backendArticleCreation.articletitle,user.backendarticlecreation.title);
        helper.support(backendArticleCreation.categorydropdown).select('14',{force:true}).invoke("val").should('eq','14');

        helper.forceclick(backendArticleCreation.imgandlinktab);
        helper.clickOnButton(backendArticleCreation.imgselect)        
        helper.containsText(backendArticleCreation.asertheader,message.backendarticlecreation.changeimg);
        cy.iframe(backendArticleCreation.insertimgarticle).find(backendArticleCreation.imgurltextbox).click();
        cy.iframe(backendArticleCreation.insertimgarticle).find(backendArticleCreation.imgurltextbox).type(user.backendarticlecreation.introimg)
        cy.iframe(backendArticleCreation.insertimgarticle).find(backendArticleCreation.insertbutton).should('be.visible').click()

        cy.get(backendArticleCreation.homepageslidertab).click();
        helper.clickOnButton(backendArticleCreation.searchauctiondropdwn);
        helper.enterText(backendArticleCreation.searchauction,user.backendarticlecreation.searchauction);
        helper.clickOnButton(backendArticleCreation.searchresultauc);
        helper.clickOnButton(backendArticleCreation.save);

        cy.get(backendArticleCreation.publishtab).click();
        helper.enterText(backendArticleCreation.startpublish,user.backendarticlecreation.startpublish);
        helper.enterText(backendArticleCreation.createdate,user.backendarticlecreation.createdate);
        helper.clickOnButton(backendArticleCreation.createbyuserarticle);
        helper.containsText(backendArticleCreation.assertselectuserheader,message.backendarticlecreation.selectuserarticle);
        cy.iframe(backendArticleCreation.insertimgarticle).find(backendArticleCreation.searchboxarticle).click();
        cy.iframe(backendArticleCreation.insertimgarticle).find(backendArticleCreation.searchboxarticle).type(user.backendarticlecreation.searcharticleuser);
        cy.iframe(backendArticleCreation.insertimgarticle).find(backendArticleCreation.searchuserartilce).should('be.visible').click();
        cy.iframe(backendArticleCreation.insertimgarticle).find(backendArticleCreation.searchselectuserarticle).should('be.visible').click({force:true});
        helper.clickOnButton(backendArticleCreation.saveandclosebtn);
        helper.containsText(backendArticleCreation.alertmsgarticle,message.backendarticlecreation.articlesave)

      }

      verifystatus(stat:string){
        let statlocator:string;
        helper.clickOnButton(backendArticleCreation.selectstatusdropdwn)

        switch(stat){
          case 'Trashed':
            statlocator=backendArticleCreation.trashstatus;
            break;

          case 'Unpublished':
            statlocator=backendArticleCreation.unpublishstatus;
            break;

          case 'Published':
            statlocator=backendArticleCreation.publishstatus;
            break;
          
          case 'Archived':
            statlocator=backendArticleCreation.archivestatus;
            break;

          case 'All':
            statlocator=backendArticleCreation.allstatus;
            break;          

            default:
              throw Error('no test case')
        }
        helper.clickOnButton(statlocator)
        helper.support(backendArticleCreation.selectstatusdropdwn).then(stattext=>{
          expect(stattext.text()).to.contains(stat)
        })
      }

      verifylanguage(lang:string){
        let langlocator:string;
        helper.clickOnButton(backendArticleCreation.selectlanguagedropdwn);

        switch(lang){
          case 'All':
            langlocator=backendArticleCreation.alllanguage;
            break;

          case 'English (en-GB)':
            langlocator=backendArticleCreation.englishlanguage;
            break;

          default:
            throw Error('no test case')
        }
        helper.clickOnButton(langlocator)
        helper.support(backendArticleCreation.selectlanguagedropdwn).then(langtext=>{
          expect(langtext.text()).to.contains(lang)
        })
      }

      verifycategoryarticle(cat:string){
        let catlocator:string;
        // helper.clickOnButton(backendArticleCreation.selectcatdropdwnarticle);

        switch(cat){
          case 'Uncategorised':
            helper.clickOnButton(backendArticleCreation.selectcatdropdwnarticle);
            catlocator=backendArticleCreation.uncategorisedcat;
            break;

          case 'Footer Articles':
            catlocator=backendArticleCreation.footerarticlecat;
            break;

            case 'news':
              catlocator=backendArticleCreation.newscat;
              break;

            case 'homepage-slider':
            catlocator=backendArticleCreation.hompepageslidercat;
            break;

            case 'Featured Carousel':
            catlocator=backendArticleCreation.featuredcarouselcat;
            break;

            case 'Registration Slider':
            catlocator=backendArticleCreation.regislidercat;
            break;

            default:
            throw Error('no test case')          
        }
        helper.clickOnButton(catlocator)
        cy.get(backendArticleCreation.selectcatactivetextbox).click();
      }

      verifyaccessaricle(access:string){
        let accesslocator:string;

        switch(access){
          case 'Public':
            helper.clickOnButton(backendArticleCreation.selectaccessdropdwnarticle);
            accesslocator=backendArticleCreation.publicaccess;
            break;

          case 'Guest':
            accesslocator=backendArticleCreation.guestaccess;
            break;

          case 'Registered':
            accesslocator=backendArticleCreation.registeredaccess;
            break;

          case 'Special':
            accesslocator=backendArticleCreation.specialaccess;
            break;

          case 'Super Users':
            accesslocator=backendArticleCreation.superuseraccess;
            break;

          default:
            throw Error('no test case') ;
        }
        helper.clickOnButton(accesslocator);
        cy.get(backendArticleCreation.selectaccessactivetextbox).click();
      }

    verifyauthor(author:string){
      let authorlocator:string;

      switch(author){
        case 'priyanka_s1':
          helper.clickOnButton(backendArticleCreation.selectauthordropdwn);
          authorlocator=backendArticleCreation.priyankaauthor;
          break;

        case 'sayali':
          authorlocator=backendArticleCreation.sayaliauthor;
          break;

        case 'sharayu_y':
          authorlocator=backendArticleCreation.sharayuathor;
          break;

        case 'tushar_s':
          authorlocator=backendArticleCreation.tusharauthor;
          break;

        default:
          throw Error('no test case') ;
      }
      helper.clickOnButton(authorlocator);
      cy.get(backendArticleCreation.selectauthoractivetextbox).click();
    }

    verfiytag(tag:string){
      let taglocator:string;

      switch(tag){
        case 'News':
          helper.clickOnButton(backendArticleCreation.selecttagdropdown);
          taglocator=backendArticleCreation.newstag;
          break;

        case 'Finance':
          taglocator=backendArticleCreation.financetag;
          break;

        default:
          throw Error('no test case') ;
      }
      helper.clickOnButton(taglocator);
      cy.get(backendArticleCreation.selecttagdropdwnactive).click();
    }

    }

export default backendcreatearticle;