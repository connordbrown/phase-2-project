import React from 'react';
import { useParams } from 'react-router-dom';

function EmojiInfo({ emojiList, isLoaded }) {
    const params = useParams();

    if(!isLoaded) {
        return <h3>Loading...</h3>
    }

    const emojiData = emojiList.find(emoji => {
        return emoji.name === params.name;
    })

    const {name, category, group, htmlCode} = emojiData;

    // safely converts htmlCode to text
    const text = document.createElement("div");
    text.innerHTML = htmlCode;
    // innerText does not run scripts
    const emojiText = text.innerText;

    return (
        <div className="emoji-info-container">
            <div id="emoji-big">{emojiText}</div>
            <div className="emoji-details">
                <span>Emoji Name: {name}</span>
                <span>Emoji Category: {category}</span>
                <span>Emoji Group: {group}</span>
                <span>Emoji htmlCode: {htmlCode}</span>
            </div>
        </div>
    )
}

export default EmojiInfo;