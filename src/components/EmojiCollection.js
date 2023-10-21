import React from "react";
// for putting in EmojiCollection
import EmojiCard from "./EmojiCard";
// styling for App and child components
import "./App.css";

// create collection of EmojiCard components and displays them as a group
// param: emojis (Object array)
function EmojiCollection({ emojis }) {
  const emojisToDisplay = emojis.map(emoji => {
    // destructure emoji object to get specific properties
    const { id, htmlCode, name } = emoji;
    return <EmojiCard key={id}
                        id={id}
                        htmlCode={htmlCode}
                        name={name}
    />
  })

  // group emojisToDisplay
  return <div className="card-group">{emojisToDisplay}</div>
}

export default EmojiCollection;