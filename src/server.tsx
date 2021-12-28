import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
// import { StaticRouterContext } from "react-router";
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';

import App from './App';

let assets: any;

const syncLoadAssets = () => {
  assets = require(`./build/assets.json`);
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
  // @ts-ignore
  const context: StaticRouterContext = {};

  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  if (context.url) {
    return { redirect: context.url };
  } else {
    const html =
      // prettier-ignore
      `<!doctype html>`+
    `<html ${helmet.htmlAttributes.toString()}>`+
    `<head>`+
        `<meta charset="utf-8" />`+
        `<meta name="viewport" content="width=device-width, initial-scale=1">`+
        `<link rel="icon" href="https://avatars.githubusercontent.com/seyoon20087"/>`+
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
  }
};

const server = express()
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', (req: express.Request, res: express.Response) => {
    const { html = '', redirect = false } = renderApp(req, res);
    if (redirect) {
      res.redirect(redirect);
    } else {
      res.send(html);
    }
  });

export default server;
