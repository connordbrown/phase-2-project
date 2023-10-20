import React from 'react';
import '../components/App.css';

function NewEmojiForm() {
    return (
        <div className="container">
          <form className="add-emoji-form">
            <h3>Add a new emoji!</h3>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input-text"
            />
            <br />
            <input
              type="text"
              name="image"
              placeholder="category"
              className="input-text"
            />
            <br />
            <input
              type="text"
              name="image"
              placeholder="group"
              className="input-text"
            />
            <br />
            <input
              type="text"
              name="image"
              placeholder="html code"
              className="input-text"
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

export default NewEmojiForm;