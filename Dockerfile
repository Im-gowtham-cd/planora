FROM jenkins/jenkins:lts

USER root

RUN apt update && apt install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt install -y nodejs

USER jenkins