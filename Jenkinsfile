pipeline {
    agent any

    stages {

        // stage('Clone') {
        //     steps {
        //         git 'https://github.com/parthSnippet/Repo.git'
        //     }
        // }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Run') {
            steps {
                bat 'node index.js &'
            }
        }
    }
}