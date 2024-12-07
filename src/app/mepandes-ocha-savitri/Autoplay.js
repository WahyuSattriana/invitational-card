'use client'

import { useState, useRef } from "react";

const Autoplay = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((err) => console.log("Error playing audio:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src="./mejangeran.mp3" loop autoPlay />
      <button onClick={toggleAudio}>
        {isPlaying ? "Pause Background Audio" : "Play Background Audio"}
      </button>
    </div>
  );
};

export default Autoplay;