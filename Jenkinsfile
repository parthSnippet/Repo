// pipeline {
//     agent any

//     stages {

//         stage('Install') {
//             steps {
//                 bat 'npm install'
//             }
//         }

//         stage('Build') {
//             steps {
//                 bat 'npm run build'
//             }
//         }

//         stage('Docker Build') {
//             steps {
//                 bat 'docker build -t ci-demo .'
//             }
//         }

//         stage('Docker Run') {
//             steps {
//                 bat 'docker run -d -p 3000:5173 ci-demo'
//             }
//         }

//         stage('Check Docker') {
//     steps {
//         bat 'docker --version'
//     }
// }
//     }
// }


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

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        //  YAHAN paste kar
        stage('Docker Build') {
            steps {
                bat 'docker build -t ci-demo .'
            }
        }

        stage('Docker Run') {
            steps {
                bat 'docker run -d -p 3000:80 ci-demo'
            }
        }

    }
}