import React from "react";

function EmojiFilter({ onCategoryChange }) {
    return (
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
    )
}

export default EmojiFilter;