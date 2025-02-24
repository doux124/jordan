import { useState } from 'react';
import RandomNote from './RandomNote';
import Keyboard from './Keyboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { useNavigate } from 'react-router-dom';

function PianoPractice() {
  const [highlightedNote, setHighlightedNote] = useState(null);
  const [sendNoteToKeyboard, setSendNoteToKeyboard] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setSendNoteToKeyboard(true);
  };

  return (
    <div className='text-center'>
      <nav className="mt-10 mr-10 text-2xl flex justify-end">
        <a 
          className="navLink"
          onClick={() => navigate('/tools')}
        >
          <FontAwesomeIcon icon={faHome} style={{ fontSize: '30px' }} />
        </a>
      </nav>
      <RandomNote setHighlightedNote={setHighlightedNote} />
      <button className='button-89 mb-5 mt-3' onClick={handleButtonClick}>Send Note to Keyboard</button>
      <Keyboard highlightedNote={sendNoteToKeyboard ? highlightedNote : null} />
    </div>
  );
}

export default PianoPractice;
