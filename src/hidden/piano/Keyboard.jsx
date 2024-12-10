import { useEffect, useState } from 'react';
import { Piano, MidiNumbers, KeyboardShortcuts } from 'react-piano';
import 'react-piano/dist/styles.css';
import Soundfont from 'soundfont-player';

const Keyboard = () => {
  const [audioContext, setAudioContext] = useState(null);
  const [player, setPlayer] = useState(null);

  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  // Load the soundfont and set up the player
  useEffect(() => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(context);

    Soundfont.instrument(context, 'acoustic_grand_piano').then((instrument) => {
      setPlayer(instrument);
    });

    return () => {
      // Cleanup the AudioContext
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  const playNote = (midiNumber) => {
    if (player) {
      // Convert MIDI number to note name using a different approach
      const note = MidiNumbers.getAttributes(midiNumber).note;
      player.play(note);
    }
  };

  const stopNote = (midiNumber) => {
    if (player) {
      player.stop();
    }
  };

  return (
    <div>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={playNote}
        stopNote={stopNote}
        width={1000}
        keyboardShortcuts={keyboardShortcuts}
      />
    </div>
  );
};

export default Keyboard;