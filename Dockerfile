FROM ubuntu
RUN apt-get update ; apt-get install language-pack-en curl -y

RUN mkdir /opt/dipor
WORKDIR /opt/dipor
RUN useradd -ms /bin/bash dipor
USER dipor
COPY . /opt/dipor
RUN curl https://install.meteor.com/ | sh
EXPOSE 3000
CMD "/home/dipor/.meteor/meteor"
