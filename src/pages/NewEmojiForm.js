import React from 'react';
// component
import EmojiForm from '../components/EmojiForm'

// display form for creating new emojis
function NewEmojiForm({ onAddNewEmoji }) {
  return <EmojiForm onAddNewEmoji={onAddNewEmoji} />  
}

export default NewEmojiForm;