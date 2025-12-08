import React, { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
  delay: number;
}

export const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate static snowflakes on mount
    const count = 40;
    const flakes: Snowflake[] = [];
    for (let i = 0; i < count; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100, // percentage
        animationDuration: 8 + Math.random() * 12, // slower fall (8-20s)
        opacity: 0.2 + Math.random() * 0.6,
        size: 3 + Math.random() * 4, // px
        delay: Math.random() * 10, // seconds
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-20px) translateX(0px);
            }
            25% {
              transform: translateY(25vh) translateX(10px);
            }
            50% {
              transform: translateY(50vh) translateX(-10px);
            }
            75% {
              transform: translateY(75vh) translateX(10px);
            }
            100% {
              transform: translateY(110vh) translateX(0px);
            }
          }
        `}
      </style>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white rounded-full blur-[0.5px]"
          style={{
            left: `${flake.left}%`,
            top: `-20px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationName: 'fall',
            animationDuration: `${flake.animationDuration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDelay: `-${flake.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
