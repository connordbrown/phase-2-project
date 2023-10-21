import React from "react";
// for creating link to another page
import { Link } from "react-router-dom";
// styling for App and child components
import "./App.css";

// create card with specific emoji displayed based on htmlCode
// link card to endpoint determined by name
// params: htmlCode (string), name (string)
function EmojiCard({ htmlCode, name }) {

  // safely convert htmlCode to text
  const text = document.createElement("div");
  text.innerHTML = htmlCode;
  // innerText does not run scripts
  const emojiText = text.innerText;

  // `/emoji/name` is unique endpoint for each card
  return (
    <Link to={`/emoji/${name}`} className="no-underline">
      <div className="emoji-card">
        <div className="content">
          <div className="header">
            {emojiText}
          </div>
        </div>
        <div className="extra content">
          <span></span>
        </div>
      </div>
    </Link>
  );
}

export default EmojiCard;