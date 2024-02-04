FROM ubuntu:latest
ENV NODE_VERSION=17.8.0
ENV NVM_DIR=/root/.nvm
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN apt-get update &&  \
    apt-get upgrade -y &&  \
    apt-get install -y curl &&  \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

RUN . "$NVM_DIR/nvm.sh" &&  \
    nvm install ${NODE_VERSION} &&  \
    . "$NVM_DIR/nvm.sh" &&  \
    nvm use v${NODE_VERSION} &&  \
    . "$NVM_DIR/nvm.sh" &&  \
    nvm alias default v${NODE_VERSION} && \
    npm install -g serve &&  \
    node --version &&  \
    npm --version

COPY /build /app
WORKDIR /app
ENTRYPOINT ["serve"]
CMD ["-s", ".", "-l", "4322"]
EXPOSE 4322