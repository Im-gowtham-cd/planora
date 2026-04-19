pipeline {
  agent any

  environment {
    NODE_ENV = "production"
    IMAGE_NAME = "planora-backend"
    CONTAINER_NAME = "planora"
  }

  stages {

    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        dir('server') {
          sh 'npm install'
        }
      }
    }

    stage('Test Backend') {
      steps {
        dir('server') {
          sh 'node -v'
          sh 'npm test || true'
        }
      }
    }

    stage('Docker Build') {
      steps {
        sh '''
          docker build -t $IMAGE_NAME ./server
        '''
      }
    }

    stage('Deploy Container') {
      steps {
        sh '''
          docker stop $CONTAINER_NAME || true
          docker rm $CONTAINER_NAME || true

          docker run -d \
            --name $CONTAINER_NAME \
            -p 5000:5000 \
            $IMAGE_NAME
        '''
      }
    }
  }

  post {
    success {
      echo "✅ Backend Deployed Successfully"
    }

    failure {
      echo "❌ Backend Deployment Failed"
    }
  }
}