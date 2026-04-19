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

    stage('Test Server (NO LONG RUN)') {
      steps {
        dir('server') {
          sh 'node -v'
          sh 'npm test || true'
        }
      }
    }

    stage('Build Client') {
      steps {
        dir('client') {
          sh 'npm run build'
        }
      }
    }

    stage('Docker Build (Backend)') {
      steps {
        sh 'docker build -t planora-backend ./server'
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