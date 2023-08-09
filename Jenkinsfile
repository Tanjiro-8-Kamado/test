pipeline {
  agent {
    // this image provides everything needed to run Cypress
    any {
      image 'cypress/base:10'
    }
  }

  
  stages {
    stage('Regression Test') {
      
      steps {
        sh 'npm i'
        sh 'npm install @reportportal/agent-js-cypress'
        sh "npx cypress run --env ENV='qa'"
        sh "npx cypress run TAGS='@smoke and @critical' --env ENV='qa' --spec 'ui/tests/**/*.feature'"
      }
    }
  }
}
