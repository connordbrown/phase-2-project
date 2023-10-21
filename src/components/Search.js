import React from "react";

// create search bar for finding emojis by name
// search bar is controlled - params are updated when the field changes
// params: emojiSearch (string), setEmojiSearch (function)
function Search({ emojiSearch, setEmojiSearch }) {
  return (
    <div className="ui search">
        <label htmlFor="emoji-search">Search: </label>
        <input name="emoji-search" 
               id="emoji-search" 
               placeholder="find an emoji!" 
               value={emojiSearch} 
               onChange={(e) => setEmojiSearch(e.target.value)}
        />
    </div>
  );
}

export default Search;