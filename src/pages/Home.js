import React, { useState } from 'react';
import EmojiCollection from '../components/EmojiCollection';
import Search from '../components/Search';
import EmojiFilter from '../components/EmojiFilter';
import '../components/App.css';

function Home({ emojiList }) {
    const [emojiSearch, setEmojiSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("smileys and people");

    function handleCategoryChange(event) {
        setCategoryFilter(event.target.value)
    }

    const filteredEmojis = emojiList.filter(emoji => {
        return emoji.category === categoryFilter;
    })

    const searchedEmojis = filteredEmojis.filter(emoji => {
        return emoji.name.includes(emojiSearch);
    })
    
    return (
        <div className='Home'>
          <h1>Welcome to the Home page!</h1>
          <span className="search-filter-container">
            <Search emojiSearch={emojiSearch} setEmojiSearch={setEmojiSearch} />
            <EmojiFilter onCategoryChange={handleCategoryChange} />
          </span>
          <EmojiCollection emojis={searchedEmojis} />
        </div>

    )

}

export default Home;