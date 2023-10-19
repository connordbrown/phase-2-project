import React, { useState } from "react";
import "./App.css";

function EmojiCard({ id, htmlCode }) {

  // safely converts htmlCode to text
  const text = document.createElement("div");
  text.innerHTML = htmlCode;
  // innerText does not run scripts
  const convertedText = text.innerText;

  return (
      <div className="emoji-card">
        <div className="image"></div>
        <div className="content">
          <div className="header">
            {convertedText}
          </div>
        </div>
        <div className="extra content">
          <span></span>
        </div>
      </div>
  );
}

export default EmojiCard;