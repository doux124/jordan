import { useState } from 'react';
import RandomNote from './RandomNote';
import Keyboard from './Keyboard';
import '../../standards/buttons.css';

function PianoPractice() {
  const [highlightedNote, setHighlightedNote] = useState(null);
  const [sendNoteToKeyboard, setSendNoteToKeyboard] = useState(false);

  const handleButtonClick = () => {
    setSendNoteToKeyboard(true);
  };

  return (
    <div className='text-center'>
      <RandomNote setHighlightedNote={setHighlightedNote} />
      <button className='button-89 mb-5' onClick={handleButtonClick}>Send Note to Keyboard</button>
      <Keyboard highlightedNote={sendNoteToKeyboard ? highlightedNote : null} />
    </div>
  );
}

export default PianoPractice;
