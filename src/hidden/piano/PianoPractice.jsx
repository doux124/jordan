import { useState } from 'react';
import { playNote } from '../../utils/audio';
import { noteFrequencies } from '../../utils/noteFrequencies';
import '../../standards/buttons.css'
import Keyboard from './Keyboard';

function PianoPractice() {
  const [selectedNote, setSelectedNote] = useState(null);

  const handlePlayNote = (note) => {
    setSelectedNote(note);
    playNote(noteFrequencies[note]);
  };

  return (
    <div>
        <div className="flex flex-wrap justify-center items-center gap-4 p-6">
            <button className='button-85' onClick={() => handlePlayNote('C4')}>Play C4</button>
            <button className='button-85' onClick={() => handlePlayNote('D4')}>Play D4</button>
            <button className='button-85' onClick={() => handlePlayNote('E4')}>Play E4</button>
            <button className='button-85' onClick={() => handlePlayNote('F4')}>Play F4</button>
            <button className='button-85' onClick={() => handlePlayNote('G4')}>Play G4</button>
            <button className='button-85' onClick={() => handlePlayNote('A4')}>Play A4</button>
            <button className='button-85' onClick={() => handlePlayNote('B4')}>Play B4</button>
        </div>
        {selectedNote && <p>Played Note: {selectedNote}</p>}

        <Keyboard />
    </div>

  );
}

export default PianoPractice;
