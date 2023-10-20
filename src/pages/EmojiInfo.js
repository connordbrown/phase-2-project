import React from 'react';
import { useParams } from 'react-router-dom';
import EmojiCard from '../components/EmojiCard';

function EmojiInfo() {
    const params = useParams();
    
    return (
        <div>You are here!</div>
    )
}

export default EmojiInfo;