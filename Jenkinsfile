pipeline{
    agent any
    stages{
        stage('Clone'){
            steps{
                git branch: 'main',
                url: 'https://github.com/Sathvik33/doc-jen'
            }
        }
        stage('Build Docker Image'){
            steps{
                bat 'docker build -t my-node-app .'
            }
        }
        stage('Run Docker Container'){
            steps{
                bat '''
                    docker stop my-node-container
                    docker rm my-node-container

                    docker run -d -p 3000:3000 --name my-node-container my-node-app
                '''
            }
        }
        stage('Test Application'){
            steps{
                bat '''
                        curl http://localhost:3000
                    '''
            }
        }

    }
    post{
        success{
            echo 'Docker Pipeline Executed Successfully'
        }

        failure{
            echo 'Docker Pipeline Failed'
        }
    }
}