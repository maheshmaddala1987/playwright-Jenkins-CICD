pipeline {
    agent {
        docker {
            // Use the Playwright Docker image corresponding to your local Playwright version
            image 'mcr.microsoft.com/playwright:v1.44.0-jammy'
            // Run as root to avoid container permission issues with writing reports
            args '-u root'
        }
    }

    environment {
        // Enforce CI flag for clean headless outputs and optimized logs
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull source code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // 'npm ci' is preferred over 'npm i' for stable and predictable CI builds
                sh 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Execute tests. If a test fails, the stage fails but post-actions will still run.
                sh 'npx playwright test'
            }
            post {
                always {
                    // 1. Publish JUnit test results (ensure your playwright.config.ts has a junit reporter)
                    junit allowEmptyResults: true, testResults: 'test-results/results.xml'
                    
                    // 2. Publish HTML report via the HTML Publisher plugin
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'playwright-report',
                        reportFiles: 'index.html',
                        reportName: 'Playwright HTML Report'
                    ])
                }
            }
        }
    }
    
    post {
        always {
            // Clean up workspace after execution to prevent disk space issues
            cleanWs()
        }
    }
}
