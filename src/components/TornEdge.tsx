import React from 'react';

interface TornEdgeProps {
  position?: 'top' | 'bottom';
  fill?: string;
  background?: string;
  className?: string;
  inverted?: boolean;
}

export const TornEdge: React.FC<TornEdgeProps> = ({
  position = 'top',
  fill = '#111111',
  background = 'transparent',
  className = '',
  inverted = false,
}) => {
  // Organic jagged torn paper path coordinates
  const tornPath =
    'M0,18 Q35,8 70,20 T140,12 T210,24 T280,10 T350,22 T420,14 T490,26 T560,8 T630,22 T700,12 T770,24 T840,10 T910,22 T980,14 T1050,25 T1120,9 T1190,20 T1260,11 T1330,23 T1400,10 T1470,21 T1540,12 T1610,24 T1680,9 T1750,22 T1820,13 T1890,25 T1920,16 L1920,40 L0,40 Z';

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none relative z-20 ${
        position === 'bottom' ? 'rotate-180 -mb-px' : '-mt-px'
      } ${className}`}
      style={{ backgroundColor: background }}
    >
      <svg
        viewBox="0 0 1920 40"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12 block filter drop-shadow-[0_-2px_4px_rgba(0,0,0,0.15)]"
      >
        <path
          d={tornPath}
          fill={fill}
          transform={inverted ? 'scale(1, -1) translate(0, -40)' : undefined}
        />
      </svg>
    </div>
  );
};
