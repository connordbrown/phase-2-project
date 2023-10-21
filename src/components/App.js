import React, { useState, useEffect } from 'react';
// for page routing
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

  // update state with emojiData acquired from server
  // let App know that data has been loaded
  // param: emojiData (Obj array)
  function configureState(emojiData) {
    setEmojiList(emojiData);
    setIsLoaded(true);
  }

  // fetch emoji data from server, then set states
  useEffect(() => {
    fetch("http://localhost:3000/emojis")
    .then(response => response.json())
    .then(data => configureState(data))
    .catch(error => alert(error.message))
  }, [])

  // post a new emoji to the backend and render it on the page
  // param: newEmoji (Object)
  function addNewEmoji(newEmoji) {
    const updatedEmojis = [...emojiList, newEmoji];
    setEmojiList(updatedEmojis);
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
        <Route path="/new-emoji-form" element={<NewEmojiForm onAddNewEmoji={addNewEmoji} />} />
        <Route path="/emoji/:name" element={<EmojiInfo emojiList={emojiList} isLoaded={isLoaded} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
