import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

if (document.getElementById('root')?.hasChildNodes()) { // @ts-ignore
  ReactDOM.hydrateRoot(document.getElementById('root'), <React.StrictMode>
  <BrowserRouter>
  <HelmetProvider>
    <App />
    </HelmetProvider>
  </BrowserRouter>
</React.StrictMode>)
} else { // @ts-ignore
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
      <HelmetProvider>
        <App />
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}