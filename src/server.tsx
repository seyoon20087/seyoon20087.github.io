import App from './App';
import React from 'react';
import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { StaticRouter } from 'react-router-dom/server';
import path from 'path';
// import { WritableAsPromise } from './writable-as-promise';


const minify = require('html-minifier').minify;

// @ts-ignore
// const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

// @ts-ignore
/*const cssLinksFromAssets = (assets, entrypoint) => {
  return assets[entrypoint] ? assets[entrypoint].css ? // @ts-ignore
  assets[entrypoint].css.map(asset=>
    `<link rel="stylesheet" href="${asset}">`
  ).join('') : '' : '';
};

// @ts-ignore
const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') => {
  return assets[entrypoint] ? assets[entrypoint].js ? // @ts-ignore
  assets[entrypoint].js.map(asset=>
    `<script src="${asset}"${extra}></script>`
  ).join('') : '' : '';
};*/

const helmetContext = {};

export const renderApp = (req: express.Request, res: express.Response) => {

  const extractor = new ChunkExtractor({
    statsFile: path.resolve('build/public/loadable-stats.json'),
    entrypoints: ['client'],
  })

  //const stream = new WritableAsPromise();
  const {pipe} = renderToPipeableStream(
    <HelmetProvider context={helmetContext}>
      <ChunkExtractorManager extractor={extractor}>
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
    </ChunkExtractorManager>
    </HelmetProvider>,
    {
      onShellReady() {
        pipe(res);
      }
    }
  );

  // @ts-ignore
  const { helmet } = helmetContext;


    const html = minify(
      // prettier-ignore
      `<!doctype html>` + 
      `<html ${helmet.htmlAttributes.toString()}>`+
      `<head>`+
        `<meta charset="UTF-8" />`+
        `<meta name="viewport" content="width=device-width, initial-scale=1" />`+
        `<link rel="icon" href="https://avatars.githubusercontent.com/seyoon20087" />`+
        `<link rel="apple-touch-icon" href="https://avatars.githubusercontent.com/seyoon20087" />`+
        `<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />`+
        `<meta name="theme-color" content="#18191a" media="(prefers-color-scheme: dark)" />`+
        `<link rel="manifest" href="/manifest.webmanifest" />`+
        `${helmet.title.toString()}`+
        `${helmet.meta.toString()}`+
        `${helmet.link.toString()}`+
        `${helmet.style.toString()}`+
        `${helmet.noscript.toString()}`+
        `${helmet.script.toString()}`+
        `${extractor.getLinkTags()}`+
        `${extractor.getStyleTags()}`+
        //`${cssLinksFromAssets(assets, 'client')}`+
      `</head>`+
      `<body ${helmet.bodyAttributes.toString()}>`+
        `<div id="__root">${markup}</div>`+
        `${extractor.getScriptTags()}`+
        //`${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}`+
      `</body>`+
      `</html>`, {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      });

    return { html };
};
const server = express();

server
  .disable('x-powered-by') // @ts-ignore
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const { html } = renderApp(req, res);
    res.send(html);
  });

export default server;