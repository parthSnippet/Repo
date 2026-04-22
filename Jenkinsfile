pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/YOUR-USERNAME/jenkins-ci-demo.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Run') {
            steps {
                sh 'node index.js &'
            }
        }
    }
}