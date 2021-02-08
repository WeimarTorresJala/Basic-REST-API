/* groovylint-disable DuplicateStringLiteral */
pipeline {
    agent none

    environment {
        NEXUS_REGISTRY_URL = 'http://192.168.56.102:8081/repository/basic-REST-API-group/'
        NEXUS_AUTH_TOKEN   = credentials('basic-REST-API-group')
    }

    stages {
        stage('Build') {
            agent {
                label 'build'
            }
            steps {
                withGradle {
                    echo 'Install node and registry nexus'
                    sh './gradlew registry -PregistryUrl=$NEXUS_REGISTRY_URL -PauthToken=$NEXUS_AUTH_TOKEN'

                    echo 'Install dependencies with npm'
                    sh './gradlew nodeSetup npmInstall'

                    echo 'Build with npm and webpack'
                    sh './gradlew npm_run_build'
                }
            }
        }

        stage('Publish') {
            agent {
                label 'build'
            }
            steps {
                withGradle {
                    echo 'Publish with npm'
                    sh './gradlew npm_publish'
                }
            }
        }
        // stage('Test') {
        //     agent {
        //         label 'test'
        //     }
        //     options {
        //         skipDefaultCheckout true
        //     }
        //     steps {
        //         echo 'Install package from Nexus'
        //         sh 'touch .npmrc'
        //         sh 'echo registry= > .npmrc'
        //         sh 'echo _authToken= >> .npmrc'
        //         sh 'npm install basic-rest-api'

        //         echo 'Running...'
        //         sh 'cd node_modules/basic-rest-api && npm run start'
        //     }
        // }
    }
}
