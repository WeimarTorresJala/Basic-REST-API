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
            node {
                checkout scm
            }
            steps {
                echo 'Install package from Nexus'
                sh 'touch .npmrc'
                sh 'pwd'
            }
        }
    }
}