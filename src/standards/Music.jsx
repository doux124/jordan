import { useEffect, useRef, useState } from "react";

const songLibrary = {
  spiderDance: "/jordan/audio/undertale.mp3",
  firefly: "/jordan/audio/firefly.mp3",
  rachel: "/jordan/audio/rachel.mp3",
  reow: "/jordan/audio/reow.mp3",
};

const Music = ({ songName, targetVolume = 1, rampDuration = 3000 }) => {
  const audioRef = useRef(null);
  const [currentVolume, setCurrentVolume] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = currentVolume;
      audioRef.current.play();
    }
  }, [currentVolume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
      let rampUpInterval;
      const step = 0.01;
      const interval = rampDuration / (targetVolume / step);

      if (targetVolume > 0) {
        rampUpInterval = setInterval(() => {
          setCurrentVolume((prev) => {
            const nextVolume = Math.min(prev + step, targetVolume);
            if (nextVolume === targetVolume) {
              clearInterval(rampUpInterval);
            }
            return nextVolume;
          });
        }, interval);
      }

      return () => clearInterval(rampUpInterval);
    }
  }, [songName, targetVolume, rampDuration]);

  return (
    <audio ref={audioRef} loop={songName !== "reow"}>
      <source src={songLibrary[songName]} type="audio/mpeg" />
    </audio>
  );
};

export default Music;
