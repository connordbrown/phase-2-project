import React from "react";
import EmojiCard from "./EmojiCard";

function EmojiCollection({ emojis }) {
  const emojisToDisplay = emojis.map(emoji => {
    const { id, htmlCode } = emoji;
    return <EmojiCard key={id}
                        id={id}
                        htmlCode={htmlCode}
    />
  })

  return <div className="card-group">{emojisToDisplay}</div>
}

export default EmojiCollection;