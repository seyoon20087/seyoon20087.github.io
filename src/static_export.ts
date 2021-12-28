import { renderApp } from './server';

// @ts-ignore
export const render = (req, res) => {
  const { html } = renderApp(req, res);
  res.json({ html });
};
export const routes = () => {
  return ['/', '/404'];
};