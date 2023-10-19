import React, { useState, useEffect } from 'react';
import EmojiCollection from '../components/EmojiCollection';

function Home() {
    const [emojiList, setEmojiList] = useState([]);
    
    useEffect(() => {
      fetch("http://localhost:3000/emojis")
      .then(response => response.json())
      .then(data => setEmojiList(data))
    }, [])
    
    return (
        <div>
          <h1>Welcome to the Home page!</h1>
          <EmojiCollection emojis={emojiList}/>
        </div>

    )

}

export default Home;