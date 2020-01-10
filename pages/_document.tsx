/*
 * Copyright 2020 Hippo B.V. (http://www.onehippo.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Document, { Head, Main, NextScript } from 'next/document';

export default class DefaultDocument extends Document {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Example Next.js SPA for Bloomreach Experience" />

          <title>brXM + Next.js = ♥️</title>

          <link rel="shortcut icon" type="image/png" href={`${process.env.PUBLIC_URL}/static/favicon.png`} sizes="64x64" />
          <link rel="stylesheet" media="screen"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous" />
          <link rel="stylesheet" href={`${process.env.PUBLIC_URL}/static/theme.css`} media="screen" />

          <Head />
        </head>
        <body>
          <div id="root">
            <Main />
          </div>

          <NextScript />
        </body>
      </html>
    );
  }
}
