//utility.ts
import domain from '../fixtures/domains.json';

export class Utility {
  getBaseUrl() {
    let env: string = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
    globalThis.envValue = env;

    switch (env) {
      case 'prod':
        env = domain.prod.url;
        break;

      case 'qa':
        env = domain.qa.url;
        break;

      case 'preview':
        env = domain.preview.url;
        break;        

      default:
        env = domain.qa.url;
    }
    return env;
  }
}
