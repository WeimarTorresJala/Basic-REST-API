pipeline {
    agent none
    stages {
        stage('Build') {
            agent {
                label 'build'
            }
            steps {
                echo 'Install dependencies with npm'
                sh 'npm install'

                echo 'Run unit test'
                sh 'npm run test'

                echo 'Build with webpack'
                sh 'npm run build'
                
                echo 'Publish with npm'
                sh 'npm publish'
            }
        }
        stage('Test') {
            agent {
                label 'test'
            }           
            options {
                skipDefaultCheckout true
            }
            steps {
                echo 'Install package from Nexus'
                sh 'touch .npmrc'
                sh 'echo registry=http://192.168.56.102:8081/repository/basic-REST-API-group/ > .npmrc'
                sh 'echo _authToken=NpmToken.d768fbd7-5b86-388d-9092-fdb558c0e850 >> .npmrc'
                sh 'npm install basic-rest-api'
                
                echo 'Running...'
                sh 'npm run start'
            }
        }
    }
}