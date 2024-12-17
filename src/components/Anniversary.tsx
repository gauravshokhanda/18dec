import React, { useState } from 'react';
import { photos } from '../data/photos';
import FloatingHearts from './FloatingHearts';
import PhotoGallery from './PhotoGallery';
import Balloons from './Balloons';
import { useBackgroundMusic } from '../hooks/useBackgroundMusic';
import { useFloatingHearts } from '../hooks/useFloatingHearts';
import '../styles/animations.css';

const Anniversary: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [poppedBalloons, setPoppedBalloons] = useState<number[]>([]);
  const hearts = useFloatingHearts();

  useBackgroundMusic();

  React.useEffect(() => {
    const timeout = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleBalloonPop = (id: number) => {
    if (!poppedBalloons.includes(id)) {
      setPoppedBalloons([...poppedBalloons, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative overflow-hidden">
      <FloatingHearts hearts={hearts} />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className={`text-center transition-all duration-1000 ${
          showMessage ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'
        }`}>
          <h1 className="text-5xl font-bold text-pink-600 mb-4 animate-pulse">
            Happy Anniversary, My Love!
          </h1>
          
          <div className="text-2xl text-purple-600 font-semibold mb-8">
            December 18th - Our Special Day ❤️
          </div>

          <PhotoGallery photos={photos} />
          <Balloons poppedBalloons={poppedBalloons} onPop={handleBalloonPop} />

          <p className="text-2xl text-purple-700 font-light max-w-2xl mx-auto mt-8">
            3  years  of pure joy and endless love and Endless Fights Endless Hurting You everytime still we reached here . Every day since December 18th has been a beautiful chapter in our story. 💕 And I always hurting you always but hope thisis last time i am hurting you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Anniversary;