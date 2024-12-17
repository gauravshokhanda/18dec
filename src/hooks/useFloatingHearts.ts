import { useState, useEffect } from 'react';

export interface FloatingHeart {
  id: number;
  style: React.CSSProperties;
}

export const useFloatingHearts = (maxHearts: number = 20) => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHeart = {
          id: Date.now(),
          style: {
            left: `${Math.random() * 100}vw`,
            animationDuration: `${3 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`
          }
        };
        return [...prev, newHeart].slice(-maxHearts);
      });
    }, 500);

    return () => clearInterval(interval);
  }, [maxHearts]);

  return hearts;
};