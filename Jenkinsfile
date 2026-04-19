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

    stage('Install & Test') {
      agent {
        docker {
          image 'node:20'
        }
      }
      steps {
        dir('server') {
          sh 'node -v'
          sh 'npm install'
          sh 'npm test || true'
        }
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t planora-backend ./server'
      }
    }

    stage('Deploy Container') {
      steps {
        sh 'docker stop planora || true && docker rm planora || true && docker run -d --name planora -p 5000:5000 planora-backend'
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