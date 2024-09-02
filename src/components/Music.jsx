import { useEffect, useRef } from 'react';

const songLibrary = {
  spiderDance: "/jordan/audio/undertale.mp3",
  firefly: "/jordan/audio/firefly.mp3",
  rachel: "/jordan/audio/rachel.mp3",
};

const Music = ({ songName }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [songName]);

  return (
    <audio ref={audioRef} loop>
      <source src={songLibrary[songName]} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default Music;
