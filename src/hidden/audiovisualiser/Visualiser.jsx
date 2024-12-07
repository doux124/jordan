import { useState, useEffect, useRef } from 'react';
import { Player, Analyser } from 'tone';
import '../../components/buttons.css'

const setupAudio = (audioFile) => {
  const player = new Player(audioFile).toDestination();
  const analyser = new Analyser("fft", 256);
  player.connect(analyser);
  return { player, analyser };
};
const playAudio = (player) => {
  if (player.buffer.loaded) {
    player.start();
  } else {
    console.error("Audio buffer not loaded yet.");
  }
};
const stopAudio = (player) => {
  if (player.state === "started") {
    player.stop();
  }
};

const Visualizer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const analyserRef = useRef(null);
  const playerRef = useRef(null);
  const p5WrapperRef = useRef(null);
  const p5InstanceRef = useRef(null);

  useEffect(() => {
    if (audioFile) {
      if (playerRef.current) {
        stopAudio(playerRef.current);
        playerRef.current.dispose();
      }

      const { player, analyser } = setupAudio(audioFile);
      playerRef.current = player;
      analyserRef.current = analyser;

      if (isPlaying) {
        playAudio(player);
      }
    }
    return () => {
      if (playerRef.current) {
        stopAudio(playerRef.current);
        playerRef.current.dispose();
      }
    };
  }, [audioFile]);

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playAudio(playerRef.current);
      } else {
        stopAudio(playerRef.current);
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (p5WrapperRef.current) {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }
      p5InstanceRef.current = new p5(sketch, p5WrapperRef.current);
    }

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }
    };
  }, [audioFile]);

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(p5WrapperRef.current.offsetWidth, p5WrapperRef.current.offsetWidth); // Create a full-window canvas
      p5.noStroke();
    };
  
    p5.draw = () => {
      if (!analyserRef.current) return;
  
      const spectrum = analyserRef.current.getValue(); // Get frequency data from the analyser
      p5.background(0); // Clear the screen with a black background
      p5.translate(p5.width / 2, p5.height / 2); // Move origin to the center of the canvas
  
      const radius = 100; // Base radius of the circle
      const maxRadius = p5.width / 2; // Maximum extension of the frequencies
  
      p5.stroke(255); // Set stroke color to white
      p5.noFill(); // No fill for shapes
  
      // Define the maximum frequency limit you want to visualize
      const maxFrequency = 15000;
  
      // Calculate the number of frequency bands that correspond to the maxFrequency (in bins)
      const maxBinIndex = Math.floor(maxFrequency / (44100 / 2) * spectrum.length); // 44100 is the sample rate, and spectrum.length is the number of bins
  
      // Limit the spectrum to the first 'maxBinIndex' bins
      const limitedSpectrum = spectrum.slice(0, maxBinIndex);
  
      const angleStep = p5.TWO_PI / limitedSpectrum.length; // Angle step for each frequency band
  
      for (let i = 0; i < limitedSpectrum.length; i++) {
        const angle = i * angleStep; // Calculate angle for current frequency
        const amp = Math.max(0, p5.map(limitedSpectrum[i], -100, 0, 0, maxRadius - radius)); // Map amplitude to radius extension
        const x1 = radius * p5.cos(angle); // Inner point on the circle
        const y1 = radius * p5.sin(angle);
        const x2 = (radius + amp) * p5.cos(angle); // Outer point based on amplitude
        const y2 = (radius + amp) * p5.sin(angle);
  
        p5.line(x1, y1, x2, y2); // Draw a line extending out from the circle
      }
    };
  };
  
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(URL.createObjectURL(file));
    } else {
      console.error("Invalid file type. Please select an audio file.");
    }
  };

  return (
    <div className="h-screen">
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button className='button-89' onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Stop' : 'Play'}
      </button>
      <div className="h-full" ref={p5WrapperRef} /> {/* Container for p5.js */}
    </div>
  );
};

export default Visualizer;
