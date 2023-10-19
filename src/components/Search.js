import React from "react";

function Search({ emojiSearch, setEmojiSearch }) {
  return (
    <div className="ui search">
        <label>Search: </label>
        <input name="emoji-search" placeholder="find an emoji!" value={emojiSearch} onChange={(e) => setEmojiSearch(e.target.value)} />
    </div>
  );
}

export default Search;