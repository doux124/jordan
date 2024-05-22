import { useEffect, useRef } from 'react';

const Music = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/jordan/audio/firefly.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default Music;
