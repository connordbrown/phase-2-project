import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from '../pages/Home';
import About from '../pages/About';
import NewEmojiForm from '../pages/NewEmojiForm';
import EmojiInfo from '../pages/EmojiInfo';
import ErrorPage from '../pages/ErrorPage.js';

function App() {
  const [emojiList, setEmojiList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/emojis")
    .then(response => response.json())
    .then(data => setEmojiList(data))
  }, [])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home emojiList={emojiList} />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-emoji-form" element={<NewEmojiForm />} />
        <Route path="/emoji/:name" element={<EmojiInfo emojiList={emojiList} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
