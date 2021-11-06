// import logo from './logo.svg';
// import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
// THANKS:
// https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/
// https://blog.ramadevsign.com/use-react-router-to-improve-ux-of-your-react-application
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
// import Footer from './components/Footer';
const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
    <Suspense fallback={<></>}>
      <Routes>
    <Route path="/">
      <Route index element={<><Home /><Footer /></>} />
    </Route>
    <Route path="*" element={<><NotFound /></>} />
    </Routes>
    </Suspense>

    {/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </div>*/}
  </>
  );
}

export default App;