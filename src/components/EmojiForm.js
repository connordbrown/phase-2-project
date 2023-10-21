import React, { useState } from 'react';
// styling for App and child components
import '../components/App.css';

// create a form for adding new emojis to emojiList
// onAddNewEmoji is passed up to App
// param: onAddNewEmoji (function)
function EmojiForm({ onAddNewEmoji }) {
    // create state for controlled form - form values are determined/updated using state
    // each piece of state is for one form field - when fields change, state is updated 
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [group, setGroup] = useState("");
    const [htmlCode, setHtmlCode] = useState("");

    // new emoji object
    const emojiToPost = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "category": category,
        "group": group,
        "htmlCode": htmlCode,
        "unicode": ""          
      })
    }

    // clear form fields
    function clearForm() {
      setName("");
      setCategory("");
      setGroup("");
      setHtmlCode("");
    }

    // using POST request, persist a new emoji to the backend
    // render new emoji to page - onAddNewEmoji passed up to App
    // param: event (Object)
    function handleAddNewEmoji(event) {
      // prevent default GET request
      event.preventDefault();
      // POST new emoji
      fetch("http://localhost:3000/emojis", emojiToPost)
      .then(response => response.json())
      .then(newEmoji => {
                onAddNewEmoji(newEmoji);
                clearForm();
            })
      .catch(error => alert(error.message))
    }

    return (
        <div className="container">
          <form className="add-emoji-form" onSubmit={(event) => handleAddNewEmoji(event)}>
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