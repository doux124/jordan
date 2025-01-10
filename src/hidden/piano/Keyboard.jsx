import { useEffect, useState } from 'react';
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import Soundfont from 'soundfont-player';
import './piano.css';

const Keyboard = ({ highlightedNote }) => {
  const [audioContext, setAudioContext] = useState(null);
  const [player, setPlayer] = useState(null);
  const [clickedNotes, setClickedNotes] = useState([]);

  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');

  useEffect(() => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(context);

    Soundfont.instrument(context, 'acoustic_grand_piano').then((instrument) => {
      setPlayer(instrument);
    });

    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  const playNote = (midiNumber) => {
    if (player) {
      const note = MidiNumbers.getAttributes(midiNumber).note;
      player.play(note);
      setClickedNotes((prevNotes) => {
        const updatedNotes = [...prevNotes, note];
        return updatedNotes.slice(-8);
      });
    }
  };

  const stopNote = (midiNumber) => {
    if (player) {
      player.stop();
    }
  };

  const isHighlighted = (note) => {
    if (!highlightedNote) {
      return false;
    }
    const sharpNote = convertNoteToSharp(note);
    const sharpHighlightedNote = convertNoteToSharp(highlightedNote);
    return sharpNote === sharpHighlightedNote;
  };

  const flatToSharpMap = {
    'Db': 'C#',
    'Eb': 'D#',
    'Gb': 'F#',
    'Ab': 'G#',
    'Bb': 'A#',
  };

  const convertNoteToSharp = (note) => {
    const noteName = note.slice(0, -1);
    const octave = note.slice(-1);
    const sharpNote = flatToSharpMap[noteName] || noteName;
    return `${sharpNote}${octave}`;
  };

  const isSharpNote = (note) => {
    const sharpNotes = ['C#', 'D#', 'F#', 'G#', 'A#'];
    const noteName = note.slice(0, -1);
    return sharpNotes.includes(noteName);
  };

  return (
    <div>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={playNote}
        stopNote={stopNote}
        width={1000}
        renderNoteLabel={({ midiNumber }) => {
          const note = MidiNumbers.getAttributes(midiNumber).note;
          const sharpNote = convertNoteToSharp(note);
          const isNoteHighlighted = isHighlighted(note);
          const isSharp = isSharpNote(sharpNote);

          return (
            <span
              className={`piano-note-label ${isNoteHighlighted ? 'highlighted' : ''} ${isSharp ? 'sharp-note' : 'non-sharp-note'}`}
            >
              {sharpNote}
            </span>
          );
        }}
        renderKey={({ midiNumber }) => {
          const note = MidiNumbers.getAttributes(midiNumber).note;
          const isNoteHighlighted = isHighlighted(note);
          const isSharp = isSharpNote(note);

          return (
            <div
              className={`piano-key ${isNoteHighlighted ? 'highlighted' : ''} ${isSharp ? 'sharp-key' : 'non-sharp-key'}`}
              key={midiNumber}
            />
          );
        }}
      />

      <div>
        <h3 className='mt-5'>Notes Played:</h3>
          <p>
            {clickedNotes.map((note, index) => (
              <span
                key={index}
                className={`${
                  index < clickedNotes.length - 1 
                    ? 'text-gray-500' 
                    : 'text-black dark:text-white'
                }`}
              >
                {convertNoteToSharp(note)}
                {index < clickedNotes.length - 1 && ', '}
              </span>
            ))}
          </p>
      </div>
    </div>
  );
};

export default Keyboard;
