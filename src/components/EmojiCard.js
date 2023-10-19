import React, { useState } from "react";

function EmojiCard({ id, htmlCode }) {

  const text = document.createElement("div");
  text.innerHTML = htmlCode;
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