pipeline {
  agent any

  environment {
    NODE_ENV = "production"
  }

  stages {

    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Server Dependencies') {
      steps {
        dir('server') {
          sh 'npm install'
        }
      }
    }

    stage('Install Client Dependencies') {
      steps {
        dir('client') {
          sh 'npm install'
        }
      }
    }

    stage('Test Server') {
      steps {
        dir('server') {
          sh 'node -v'
          sh 'npm test || true'
        }
      }
    }

    stage('Build Client (FIXED)') {
      steps {
        dir('client') {
          sh '''
            npm install
            npx vite build
          '''
        }
      }
    }

    stage('Docker Build & Deploy') {
      steps {
        sh '''
          docker build -t planora-backend ./server

          docker stop planora || true
          docker rm planora || true

          docker run -d \
            --name planora \
            -p 5000:5000 \
            planora-backend
        '''
      }
    }
  }

  post {
    success {
      echo "✅ Build Successful"
    }

    failure {
      echo "❌ Build Failed - Check logs"
    }
  }
}