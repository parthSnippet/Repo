pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/parthSnippet/Repo.git'
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