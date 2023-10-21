import React, { useState } from 'react';
// styling for App and child components
import '../components/App.css';

// create a form for adding new emojis to emojiList
function EmojiForm({ onNewEmojiSubmit }) {
    // create state for controlled form - form values are determined/updated using state
    // when fields change, state is updated
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [group, setGroup] = useState("");
    const [htmlCode, setHtmlCode] = useState("");

    return (
        <div className="container">
          <form className="add-emoji-form" onSubmit={(event) => onNewEmojiSubmit(event, name, category, group, htmlCode)}>
            <h3><em>☺ Add a new emoji! ☺</em></h3>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input-text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="category"
              placeholder="category"
              className="input-text"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="group"
              placeholder="group"
              className="input-text"
              value={group}
              onChange={e => setGroup(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="html-code"
              placeholder="html code"
              className="input-text"
              value={htmlCode}
              onChange={e => setHtmlCode(e.target.value)}
            />
            <br />
            <input
              type="submit"
              name="submit"
              value="Create New Emoji"
              className="submit"
            />
          </form>
        </div>
      )
}

export default EmojiForm;