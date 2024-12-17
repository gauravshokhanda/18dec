import React from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  style: React.CSSProperties;
}

interface FloatingHeartsProps {
  hearts: FloatingHeart[];
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ hearts }) => {
  return (
    <>
      {hearts.map(heart => (
        <Heart
          key={heart.id}
          className="absolute text-pink-500 opacity-50"
          style={{
            ...heart.style,
            animation: 'float linear forwards',
            animationDuration: heart.style.animationDuration,
            animationDelay: heart.style.animationDelay,
          }}
          size={24}
        />
      ))}
    </>
  );
};

export default FloatingHearts;