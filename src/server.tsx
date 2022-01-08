import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
// import { StaticRouterContext } from "react-router";
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';

let assets: any;

const syncLoadAssets = () => {
  assets = require(`../build/assets.json`);
};
syncLoadAssets();

// @ts-ignore
const cssLinksFromAssets = (assets, entrypoint) => {
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
};

export const renderApp = (req: express.Request, res: express.Response) => {

  const helmetContext = {};

  const markup = renderToString(
    <HelmetProvider context={helmetContext}>
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
    </HelmetProvider>
  );

  // @ts-ignore
  const { helmet } = helmetContext;

    const html =
      // prettier-ignore
      `<!doctype html>`+
    `<html ${helmet.htmlAttributes.toString()}>`+
    `<head>`+
        `<meta charset="utf-8" />`+
        `<meta name="viewport" content="width=device-width, initial-scale=1" />`+
        `<link rel="icon" href="https://avatars.githubusercontent.com/seyoon20087" />`+
        `<link rel="apple-touch-icon" href="https://avatars.githubusercontent.com/seyoon20087" />`+
        `<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />`+
        `<meta name="theme-color" content="#18191a" media="(prefers-color-scheme: dark)" />`+
        `<link rel="manifest" href="/manifest.webmanifest" />`+
        `${helmet.title.toString()}`+
        `${helmet.meta.toString()}`+
        `${helmet.link.toString()}`+
        `${cssLinksFromAssets(assets, 'client')}`+
    `</head>`+
    `<body ${helmet.bodyAttributes.toString()}>`+
        `<div id="root">${markup}</div>`+
        `${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}`+
    `</body>`+
  `</html>`;

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