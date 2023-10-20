import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function EmojiCard({ id, htmlCode, name }) {

  // safely converts htmlCode to text
  const text = document.createElement("div");
  text.innerHTML = htmlCode;
  // innerText does not run scripts
  const convertedText = text.innerText;

  return (
    <Link to={`/emoji/${name}`}>
      <div className="emoji-card">
        <div className="content">
          <div className="header">
            {convertedText}
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