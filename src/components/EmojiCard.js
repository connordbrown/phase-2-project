import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function EmojiCard({ htmlCode, name }) {

  // safely converts htmlCode to text
  const text = document.createElement("div");
  text.innerHTML = htmlCode;
  // innerText does not run scripts
  const emojiText = text.innerText;

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