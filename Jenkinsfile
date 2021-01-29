pipeline {
    agent {
        label 'Ubuntu'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Install dependencies with npm'
                sh 'npm install'

                echo 'Build with webpack'
                sh 'npm run build'
            }
        }
        stage('Publish') {
            steps {
                echo 'Publish with npm'
                sh 'npm publish'
            }
        }
    }
}