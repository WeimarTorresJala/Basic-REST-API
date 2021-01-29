pipeline {
    agent {
        label 'Ubuntu'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Install dependencies with npm'
                bat 'npm install'

                echo 'Build with webpack'
                bat 'npm run build'
            }
        }
        // stage('Test') {
        //     steps {
        //         echo 'Publish with npm'
        //         bat 'npm publish'
        //     }
        // }
    }
}