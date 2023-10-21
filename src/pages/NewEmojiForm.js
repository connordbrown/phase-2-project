import React from 'react';
// component
import EmojiForm from '../components/EmojiForm'

// display form for creating new emojis
function NewEmojiForm({ onNewEmojiSubmit }) {
  return <EmojiForm onNewEmojiSubmit={onNewEmojiSubmit} />  
}

export default NewEmojiForm;