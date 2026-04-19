pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        IMAGE_NAME = 'planora-backend'
        CONTAINER_NAME = 'planora'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // This pulls from your GitHub repo configured in the Job
                checkout scm
            }
        }

        stage('Install Dependencies') {
            // Instead of using 'agent docker', we run inside the main agent
            // because your Jenkins container now has root access.
            steps {
                dir('server') {
                    // Use a Docker container to run npm install so you don't need Node on Jenkins
                    sh 'docker run --rm -v ${WORKSPACE}/server:/app -w /app node:20 npm install'
                }
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    // This builds the image using your laptop's Docker engine
                    sh "docker build -t ${IMAGE_NAME} ./server"
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    // Removes old container if exists and starts new one
                    sh """
                        docker rm -f ${CONTAINER_NAME} || true
                        docker run -d --name ${CONTAINER_NAME} -p 5000:5000 ${IMAGE_NAME}
                    """
                }
            }
        }
    }

    post {
        success {
            echo '✅ Planora Backend Deployed Successfully'
        }
        failure {
            echo '❌ Deployment Failed - Check Console Output'
        }
    }
}
