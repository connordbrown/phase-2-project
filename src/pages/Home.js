import React, { useState } from 'react';
// components
import EmojiCollection from '../components/EmojiCollection';
import Search from '../components/Search';
import EmojiFilter from '../components/EmojiFilter';
// styling for App and child components
import '../components/App.css';

// display search bar, emoji filter, and emoji collection 
// param: emojiList (Object array)
function Home({ emojiList }) {
    // create state for search field
    const [emojiSearch, setEmojiSearch] = useState("");
    // create state for category dropdown
    const [categoryFilter, setCategoryFilter] = useState("smileys and people");

    // update category when dropdown is changed
    function handleCategoryChange(event) {
        setCategoryFilter(event.target.value)
    }

    // filter emojiList based on category
    const filteredEmojis = emojiList.filter(emoji => {
        return emoji.category === categoryFilter;
    })

    // filter emojis in category based on search
    const searchedEmojis = filteredEmojis.filter(emoji => {
        return emoji.name.includes(emojiSearch);
    })
    
    return (
        <div className='Home'>
          <h1>Welcome to EmojiFinder!</h1>
          <span className="search-filter-container">
            <Search emojiSearch={emojiSearch} setEmojiSearch={setEmojiSearch} />
            <EmojiFilter onCategoryChange={handleCategoryChange} />
          </span>
          <EmojiCollection emojis={searchedEmojis} />
        </div>

    )

}

export default Home;