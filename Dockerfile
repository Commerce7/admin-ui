FROM public.ecr.aws/amazonlinux/amazonlinux:latest

#Install aws cli
RUN yum -y install aws-cli

#Receive Arguments for aws cli to work
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_SESSION_TOKEN 
ARG NPM_TOKEN

#Update yum repos
RUN yum -y update

#Install Curl
RUN yum -y install curl

#Install SSH
RUN yum -y install -y openssh-server
RUN yum -y install openssh-clients

#Install Vim
RUN yum -y install -y vim

#Install gcc-c++
RUN yum -y install gcc-c++ make

#Install tar and gzip
RUN yum -y install tar
RUN yum -y install gzip

# Install NVM to manage Node
# NVM environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 16.17.1
RUN mkdir /usr/local/nvm

# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Install NODE and NPM
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install global NPM packages
RUN npm install -g nodemon
RUN npm install -g mocha
RUN npm install -g lerna

# Add docker-compose-wait tool to support waiting for MYSQL for continuous integration tests
ENV WAIT_VERSION 2.7.3
RUN curl -SL -o /wait https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait
RUN chmod +x /wait

# Set Working Directory
WORKDIR /var/www/admin-ui

# Copy contents of this folder into WORKDIR for production
# Docker Compose overrides this when it mounts your local host directory in development
COPY . .

#Install new modules
RUN npm ci

#Set terminal options
ENV ENV="/root/.bashrc"
RUN echo 'alias ll="ls -lhat"' >> /root/.bashrc
RUN echo 'export PS1="\[\e[0;32m\][COMMERCE7_ADMIN_UI] \w\$\[\e[0m\] "' >> /root/.bashrc
RUN echo 'echo -en "\e]0;api\a"' >> /root/.bashrc

# Run NPM Publish
RUN npm config set '//registry.npmjs.org/:_authToken="${NPM_TOKEN}"'
RUN npm run build
RUN npm publish --access public

# Run Storybook Docs build and sync to S3
RUN npm run build-storybook
RUN aws s3 sync storybook-static/ s3://admin-ui-docs.commerce7.com --delete
RUN aws s3 cp s3://admin-ui-docs.commerce7.com/index.html s3://admin-ui-docs.commerce7.com/index.html --metadata-directive REPLACE --cache-control no-cache,must-revalidate --expires -1 --content-type text/html

