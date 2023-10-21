import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// styling for App and child components
import './App.css';
import NavBar from './NavBar';
// pages for routing
import Home from '../pages/Home';
import About from '../pages/About';
import NewEmojiForm from '../pages/NewEmojiForm';
import EmojiInfo from '../pages/EmojiInfo';
import ErrorPage from '../pages/ErrorPage.js';

// parent function of application
function App() {
  // create state for main emoji data
  const [emojiList, setEmojiList] = useState([]);
  // create state for asynchronous page rendering
  const [isLoaded, setIsLoaded] = useState(false);

  // fetch emoji data from server, then set states
  useEffect(() => {
    fetch("http://localhost:3000/emojis")
    .then(response => response.json())
    .then(data => {
                   setEmojiList(data)
                   setIsLoaded(true);
          })
    .catch(error => alert(error.message))
  }, [])

  // post a new emoji to the backend and render it on the page
  // params: event (object), emojiName (string), emojiCategory (string), emojiGroup(string), emojiHtmlCode(string)
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
      // add newEmoji to emojiList and update state to show change on page
      const updatedEmojis = [...emojiList, newEmoji];
      setEmojiList(updatedEmojis);
    })
    .catch(error => alert(error.message))
  }

  // if page elements are not yet loaded, display a loading message
  if(!isLoaded) {
    return <h3 className="loading-bar">Loading...</h3>
  }

  // else create routes to each page - /emoji/:name has an endpoint for each emoji card
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
