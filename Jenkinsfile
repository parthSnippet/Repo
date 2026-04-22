pipeline {
    agent any

    stages {

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t ci-demo .'
            }
        }

        stage('Docker Run') {
            steps {
                bat 'docker run -d -p 3000:5173 ci-demo'
            }
        }
    }
}