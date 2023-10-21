import React from 'react';
// for finding data that matches url endpoint parameter
import { useParams } from 'react-router-dom';

// display detailed information of clicked EmojiCard
// params: emojiList (Object array), isLoaded (boolean)
function EmojiInfo({ emojiList, isLoaded }) {
    // get specific endpoint
    const params = useParams();

    // find data in emojiList that matches endpoint
    const emojiData = emojiList.find(emoji => {
        return emoji.name === params.name;
    })

    // destructure emojiData object
    const {name, category, group, htmlCode} = emojiData;

    // safely convert htmlCode to text
    const text = document.createElement("div");
    text.innerHTML = htmlCode;
    // innerText does not run scripts
    const emojiText = text.innerText;

    // if page elements are not yet loaded, display a loading message
    if(!isLoaded) {
        return <h3 className="loading-bar">Loading...</h3>
    }
    
    // else display emoji and detailed information
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