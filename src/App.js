// import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JSBullPage from './pages/JavaScriptBull';
import LinksPage from './pages/LinksPage';
import SongsPage from './pages/SongsPage';
import ThanksPage from './pages/ThanksPage';
// Page elements
import Header from './page-elements/Header';
import Nav from './page-elements/Nav';
import Aside from './page-elements/Aside';
import './App.css';


import ReactPlayer from 'react-player';

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Aside></Aside>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/links' element={<LinksPage />} />
        <Route path='/jsbull' element={<JSBullPage />} />
        <Route path='/songs' element={<SongsPage />} />
        <Route path='/thanks' element={<ThanksPage />} />
      </Routes>
      {/* <div>
        <ReactPlayer 
          url="https://soundcloud.com/noriakinure/sets/mixtape-for-nurenur-eu" 
          controls="true"
          />
      </div> */}
    </>
  )
}

export default App;
