import React from 'react';
import { PartyPopper } from 'lucide-react';

const COLORS = ['red', 'pink', 'purple', 'blue', 'green'];

interface BalloonsProps {
  poppedBalloons: number[];
  onPop: (id: number) => void;
}

const Balloons: React.FC<BalloonsProps> = ({ poppedBalloons, onPop }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {[1, 2, 3, 4, 5].map((id) => (
        <div
          key={id}
          onClick={() => onPop(id)}
          className={`cursor-pointer transition-all duration-300 ${
            poppedBalloons.includes(id) ? 'opacity-0 scale-150' : 'hover:scale-110'
          }`}
        >
          <PartyPopper
            size={48}
            className={`text-${COLORS[id % 5]}-500`}
            style={{
              transform: poppedBalloons.includes(id) ? 'rotate(45deg)' : 'none',
              transition: 'transform 0.3s ease'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Balloons;