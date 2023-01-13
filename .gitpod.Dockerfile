# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.233.0/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT="18-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

RUN which sudo || apt install sudo --yes

RUN curl https://nodejs.org/dist/v18.13.0/node-v18.13.0-linux-x64.tar.xz -LOs && tar -xf node-v18.13.0-linux-x64.tar.xz && \
    rm -rf node-v18.13.0-linux-x64.tar.xz node-v18.13.0-linux-x64/{README.md,LICENSE,CHANGELOG.md} && \
    rsync -Ha node-v18.13.0-linux-x64/** /usr/local/ && rm -rf node-v18.13.0-linux-x64

RUN npm install -g npm@latest yarn@latest
