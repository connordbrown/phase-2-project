import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from '../pages/Home';
import About from '../pages/About';
import NewEmojiForm from '../pages/NewEmojiForm';
import EmojiInfo from '../pages/EmojiInfo';
import ErrorPage from '../pages/ErrorPage.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-emoji-form" element={<NewEmojiForm />} />
        <Route path="/emoji/:name" element={<EmojiInfo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
