FROM ubuntu

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
RUN dpkg-reconfigure locales; apt-get update ; apt-get install language-pack-en curl -y ; curl https://install.meteor.com/ | sh

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD "meteor"
