import { useEffect } from 'react';
import aud from "./audio/aud.mp3"
export const useBackgroundMusic = (delay: number = 1000) => {
  useEffect(() => {
    const audio = new Audio(aud);
    audio.loop = true;
    
    const timeout = setTimeout(() => {
      audio.play().catch(console.error);
    }, delay);

    return () => {
      clearTimeout(timeout);
      audio.pause();
    };
  }, [delay]);
};