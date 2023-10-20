import React from 'react';
import { useParams } from 'react-router-dom';

function EmojiInfo({ emojiList }) {
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

    return (
        <div>
            <h2>You are here!</h2>
            <div>{emojiText}</div>
            <span>Emoji Name: {name}</span>
            <span>Emoji Category: {category}</span>
            <span>Emoji Group: {group}</span>
            <span>Emoji htmlCode: {htmlCode}</span>
        </div>
    )
}

export default EmojiInfo;