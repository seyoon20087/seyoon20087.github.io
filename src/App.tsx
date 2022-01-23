// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
// THANKS:
// https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/
// https://blog.ramadevsign.com/use-react-router-to-improve-ux-of-your-react-application
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
// import Footer from './components/Footer';
import loadable from '@loadable/component';

const Home = loadable(() => import('./pages/Home'));
const NotFound = loadable(() => import('./pages/NotFound'));
const Footer = loadable(() => import('./components/Footer'));

function App() {
  return (
    <>
        <Routes>
          <Route path="/">
            <Route index element={
                <>
                  <Home />
                  <Footer />
                </>
            } />
          </Route>
          <Route path="*" element={
                <>
                  <NotFound />
                </>} />
          </Routes>
  </>
  );
}

export default App;
