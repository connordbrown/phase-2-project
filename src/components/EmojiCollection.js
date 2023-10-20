import React from "react";
import EmojiCard from "./EmojiCard";
import "./App.css";

function EmojiCollection({ emojis }) {
  const emojisToDisplay = emojis.map(emoji => {
    const { id, htmlCode, name } = emoji;
    return <EmojiCard key={id}
                        id={id}
                        htmlCode={htmlCode}
                        name={name}
    />
  })

  return <div className="card-group">{emojisToDisplay}</div>
}

export default EmojiCollection;