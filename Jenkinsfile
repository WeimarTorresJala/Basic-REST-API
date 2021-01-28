pipeline {
    agent {
        label 'Dell Windows'
    }

    stages {
        stage('build') {
            steps {
                echo 'Install dependencies with npm'
                bat 'npm install'

                echo 'Build with webpack'
                bat 'npm run build'
            }
        }
    }
}