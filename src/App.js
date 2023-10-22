// import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookNurePage from './pages/BookNurePage';
import JSBullPage from './pages/JavaScriptBull';
import LinksPage from './pages/LinksPage';
import SongsPage from './pages/SongsPage';
import ThanksPage from './pages/ThanksPage';
import HampterPage from './pages/HampterPage';
import SongList from './pages/SongList';
import NotFound from './pages/NotFound';
// Page elements
import Header from './page-elements/Header';
import Nav from './page-elements/Nav';
import Aside from './page-elements/Aside';
import './App.css';


function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Aside></Aside>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/book-appointment' element={<BookNurePage />} />
        <Route path='/links' element={<LinksPage />} />
        <Route path='/jsbull' element={<JSBullPage />} />
        <Route path='/songs' element={<SongsPage />} />
        <Route path='/thanks' element={<ThanksPage />} />
        <Route path='/dbtest' element={<SongList />} />
        <Route path='/hampter' element={<HampterPage />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App;
