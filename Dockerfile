# Copyright 2020 Hippo B.V. (http://www.onehippo.com)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

FROM node:alpine

ARG SDK_REPOSITORY
ARG SDK_BRANCH

COPY . /app
WORKDIR /app

RUN [ "$SDK_REPOSITORY" != "" ] \
  && apk add --no-cache --virtual .git \
    git \
    git-subtree \
  && git clone --branch $SDK_BRANCH $SDK_REPOSITORY /tmp/sdk \
  && (cd /tmp/sdk && git subtree split -q --prefix=packages/spa-sdk --branch=spa-sdk) \
  && (cd /tmp/sdk && git subtree split -q --prefix=packages/react-sdk --branch=react-sdk) \
  && npm config set unsafe-perm true \
  && npm install --no-save git+file:///tmp/sdk/.git#spa-sdk git+file:///tmp/sdk/.git#react-sdk \
  && rm -rf /tmp/sdk \
  && apk del .git \
  || npm install

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run"]
CMD ["start"]
