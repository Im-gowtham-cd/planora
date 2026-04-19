FROM jenkins/jenkins:lts

USER root

# Install basic tools
RUN apt-get update && apt-get install -y \
    curl \
    git \
    docker.io

# Install Node.js (IMPORTANT FIX)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Give Jenkins access
RUN usermod -aG docker jenkins

USER jenkins