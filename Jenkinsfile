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

                echo 'Build with webpack'
                sh 'npm run build'
                
                echo 'Publish with npm'
                sh 'npm publish'
            }
        }
    }
}