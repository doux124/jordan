import { useState, useEffect } from 'react';
import Soundfont from 'soundfont-player';
import '../../standards/buttons.css';

function RandomNote({ setHighlightedNote }) {
  const [selectedNote, setSelectedNote] = useState(null);
  const [player, setPlayer] = useState(null);
  const [isNoteClicked, setIsNoteClicked] = useState(false);

  const notes = [
    'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3'
  ];

  useEffect(() => {
    Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano').then(setPlayer);
  }, []);

  const handlePlayRandomNote = () => {
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    setSelectedNote(randomNote);
    setHighlightedNote(randomNote);
    setIsNoteClicked(false); // Reset the click state before playing the note
    if (player) {
      player.play(randomNote);
    }
  };

  const handleClickNote = () => {
    setIsNoteClicked(true); // Set the state to show the note
  };

  return (
    <div>
      <div className="flex-center flex-wrap gap-4 pt-6 pb-3">
        <button className='button-85' onClick={handlePlayRandomNote}>Play Random Note</button>
      </div>
      {selectedNote && !isNoteClicked && (
        <p onClick={handleClickNote}>Played Note: ██</p>
      )}
      {isNoteClicked && <p>Played Note: {selectedNote}</p>}
    </div>
  );
}

export default RandomNote;
