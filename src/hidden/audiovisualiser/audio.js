import * as Tone from 'tone';

// Function to setup the audio player and analyser
export const setupAudio = (audioFile) => {
  const player = new Tone.Player(audioFile).toDestination();  // Audio player connected to the destination
  const analyser = new Tone.Analyser('fft', 512);  // Analyser with FFT (Fast Fourier Transform)
  player.connect(analyser);  // Connect the player to the analyser
  
  return { player, analyser };
};

// Play the audio
export const playAudio = (player) => {
  player.start();
};

// Stop the audio
export const stopAudio = (player) => {
  player.stop();
};
