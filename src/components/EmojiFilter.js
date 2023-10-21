import React from "react";

// create dropdown menu with emojiList categories
// pass onChange function up to App through onCategoryChange prop
// param: onCategoryChange (function)
function EmojiFilter({ onCategoryChange }) {
    return (
      <div>
        <label htmlFor="type">Filter By Category: </label>
        <select name="type" id="type" aria-label="type" onChange={onCategoryChange} >
          <option value="smileys and people">smileys and people</option>
          <option value="animals and nature">animals and nature</option>
          <option value="food and drink">food and drink</option>
          <option value="travel and places">travel and place</option>
          <option value="activities">activities</option>
          <option value="objects">objects</option>
          <option value="symbols">symbols</option>
          <option value="flags">flags</option>
        </select>
      </div>
    )
}

export default EmojiFilter;