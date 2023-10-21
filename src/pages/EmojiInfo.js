import React from 'react';
import { useParams } from 'react-router-dom';

function EmojiInfo({ emojiList, isLoaded }) {
    const params = useParams();

    const emojiData = emojiList.find(emoji => {
        return emoji.name === params.name;
    })

    const {name, category, group, htmlCode} = emojiData;

    // safely converts htmlCode to text
    const text = document.createElement("div");
    text.innerHTML = htmlCode;
    // innerText does not run scripts
    const emojiText = text.innerText;

    if(!isLoaded) {
        return <h3 className="loading-bar">Loading...</h3>
    }
    
    return (
        <div className="emoji-info-container">
            <div id="emoji-big">{emojiText}</div>
            <div className="emoji-details">
                <span><em>Name:</em> {name}</span>
                <span><em>Category:</em> {category}</span>
                <span><em>Group:</em> {group}</span>
                <span><em>HTML Code:</em> {htmlCode}</span>
            </div>
        </div>
    )
}

export default EmojiInfo;