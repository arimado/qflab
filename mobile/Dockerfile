###############
# Dockerfile for the mobile app
###############
FROM node:4-onbuild

ENV VERSION="master"

MAINTAINER "The A-Team!"

# Install basic applications

RUN apt-get update -y && apt-get install -y git wget unzip
RUN sudo npm install -g ionic

# Download the code
RUN git clone -b $VERSION --single-branch https://github.com/tonybaloney/qflab
ADD qflab qflab
WORKDIR qflab/mobile/qfapp

EXPOSE 8100
EXPOSE 35729

CMD ionic serve --all