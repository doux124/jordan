export function playNote(frequency) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine"; // A sine wave sound
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // Set the frequency of the note
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5); // Play for 0.5 seconds
  }
  