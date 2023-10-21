import React from 'react';
import EmojiForm from '../components/EmojiForm'

function NewEmojiForm({ onNewEmojiSubmit }) {
  return <EmojiForm onNewEmojiSubmit={onNewEmojiSubmit} />  
}

export default NewEmojiForm;