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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/emojis")
    .then(response => response.json())
    .then(data => {
                   setEmojiList(data)
                   setIsLoaded(true);
          })
    .catch(error => alert(error.message))
  }, [])

  function handleAddNewEmoji(event, emojiName, emojiCategory, emojiGroup, emojiHtmlCode) {
    event.preventDefault();
    fetch("http://localhost:3000/emojis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "name": emojiName,
        "category": emojiCategory,
        "group": emojiGroup,
        "htmlCode": emojiHtmlCode,
        "unicode": ""          
      })
    })
    .then(response => response.json())
    .then(newEmoji => {
      const updatedEmojis = [...emojiList, newEmoji];
      setEmojiList(updatedEmojis);
    })
    .catch(error => alert(error.message))
  }

  if(!isLoaded) {
    return <h3 className="loading-bar">Loading...</h3>
  }
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home emojiList={emojiList} />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-emoji-form" element={<NewEmojiForm onNewEmojiSubmit={handleAddNewEmoji} />} />
        <Route path="/emoji/:name" element={<EmojiInfo emojiList={emojiList} isLoaded={isLoaded} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
