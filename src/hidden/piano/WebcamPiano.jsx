import { useEffect, useRef, useState } from "react";
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import Soundfont from 'soundfont-player';

const WebcamPiano = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [stream, setStream] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [instrument, setInstrument] = useState(null);
  const activeNotes = useRef(new Set());

  // Piano configuration
  const whiteKeyWidth = 40;
  const whiteKeyHeight = 150;
  const blackKeyWidth = 24;
  const blackKeyHeight = 100;
  
  // Define notes for two octaves
  const notes = {
    white: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5'],
    black: ['C#4', 'D#4', 'F#4', 'G#4', 'A#4', 'C#5', 'D#5', 'F#5', 'G#5', 'A#5']
  };

  // Calculate piano positioning
  const totalWhiteKeys = notes.white.length;
  const totalWidth = totalWhiteKeys * whiteKeyWidth;
  const startX = (800 - totalWidth) / 2; // Center the piano
  const startY = 400; // Position from top

  // Initialize audio
  useEffect(() => {
    const ac = new AudioContext();
    Soundfont.instrument(ac, 'acoustic_grand_piano').then(piano => {
      setInstrument(piano);
    });
  }, []);

  // Initialize hand detection model
  useEffect(() => {
    const loadModel = async () => {
      await tf.setBackend("webgl");
      const detector = await handPoseDetection.createDetector(
        handPoseDetection.SupportedModels.MediaPipeHands,
        {
          runtime: "tfjs",
          modelType: "lite"
        }
      );
      setModel(detector);
    };
    loadModel();
  }, []);

  // Initialize camera
  useEffect(() => {
    const startVideo = async () => {
      const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
      setStream(newStream);
    };
    startVideo();
  }, []);

  const isPointInKey = (point, x, y, width, height) => {
    return point.x >= x && point.x <= x + width && 
           point.y >= y && point.y <= y + height;
  };

  const playNote = (note) => {
    if (instrument && !activeNotes.current.has(note)) {
      activeNotes.current.add(note);
      instrument.play(note);
    }
  };

  const stopNote = (note) => {
    if (instrument && activeNotes.current.has(note)) {
      activeNotes.current.delete(note);
    }
  };

  // Main detection and rendering loop
  useEffect(() => {
    const detectHands = async () => {
      if (!model || !videoRef.current || !canvasRef.current) return;

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      video.width = 800;
      video.height = 600;
      canvas.width = 800;
      canvas.height = 600;

      const renderFrame = async () => {
        const hands = await model.estimateHands(video, { flipHorizontal: true });
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create white keys
        const whiteKeys = notes.white.map((note, i) => ({
          x: startX + i * whiteKeyWidth,
          y: startY,
          width: whiteKeyWidth,
          height: whiteKeyHeight,
          note
        }));

        // Create black keys
        const blackKeys = [];
        notes.black.forEach((note, i) => {
          const octaveIndex = Math.floor(i / 5);
          const keyIndex = i % 5;
          const positions = [0, 1, 3, 4, 5];
          const x = startX + (positions[keyIndex] + octaveIndex * 7) * whiteKeyWidth - blackKeyWidth/2;
          blackKeys.push({
            x,
            y: startY,
            width: blackKeyWidth,
            height: blackKeyHeight,
            note
          });
        });

        // Draw white keys
        whiteKeys.forEach(key => {
          ctx.fillStyle = activeNotes.current.has(key.note) ? "rgba(200, 200, 255, 0.7)" : "rgba(255, 255, 255, 0.7)";
          ctx.strokeStyle = "black";
          ctx.lineWidth = 1;
          ctx.fillRect(key.x, key.y, key.width, key.height);
          ctx.strokeRect(key.x, key.y, key.width, key.height);

          // Add note label
          ctx.fillStyle = "black";
          ctx.font = "12px Arial";
          ctx.fillText(key.note, key.x + 5, key.y + key.height - 10);
        });

        // Draw black keys
        blackKeys.forEach(key => {
          ctx.fillStyle = activeNotes.current.has(key.note) ? "rgba(100, 100, 155, 1)" : "rgba(0, 0, 0, 0.7)";
          ctx.strokeStyle = "black";
          ctx.lineWidth = 1;
          ctx.fillRect(key.x, key.y, key.width, key.height);
          ctx.strokeRect(key.x, key.y, key.width, key.height);

          // Add note label
          ctx.fillStyle = "white";
          ctx.font = "10px Arial";
          ctx.fillText(key.note, key.x + 2, key.y + key.height - 10);
        });

        // Handle hand detection and note playing
        if (hands.length > 0) {
          const fingerTips = [4, 8, 12, 16, 20];
          const allKeys = [...blackKeys, ...whiteKeys]; // Black keys first for proper overlap
          const currentlyPlaying = new Set();

          hands.forEach(hand => {
            fingerTips.forEach(tipIdx => {
              const point = hand.keypoints[tipIdx];
              if (point) {
                // Draw finger position
                ctx.beginPath();
                ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(255, 0, 0, 0.7)";
                ctx.fill();

                // Check for key intersections
                allKeys.forEach(key => {
                  if (isPointInKey(point, key.x, key.y, key.width, key.height)) {
                    currentlyPlaying.add(key.note);
                    playNote(key.note);
                  }
                });
              }
            });
          });

          // Stop notes that are no longer being played
          activeNotes.current.forEach(note => {
            if (!currentlyPlaying.has(note)) {
              stopNote(note);
            }
          });
        }

        requestAnimationFrame(renderFrame);
      };

      requestAnimationFrame(renderFrame);
    };

    detectHands();
  }, [model]);

  const toggleCamera = async () => {
    if (isCameraOn) {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      }
    } else {
      const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
      setStream(newStream);
    }
    setIsCameraOn(!isCameraOn);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <button onClick={toggleCamera} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
      </button>
      <div className="relative w-[800px] h-[600px]">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          className="absolute w-full h-full transform scale-x-[-1]" 
        />
        <canvas 
          ref={canvasRef} 
          className="absolute w-full h-full" 
        />
      </div>
    </div>
  );
};

export default WebcamPiano;