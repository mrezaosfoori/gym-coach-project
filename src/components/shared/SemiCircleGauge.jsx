import React from 'react';

/**
 * SemiCircleGauge
 * Renders a half-circle progress bar (gauge) with a needle pointing
 * from the center to the current value on the arc.
 *
 * Props:
 * - size: number (width of SVG, height is size/2)
 * - strokeWidth: number
 * - value: number (current progress)
 * - max: number (maximum progress)
 * - circleBackground: string (color of background arc)
 * - progressColor: string (color of progress arc)
 * - needleColor: string (color of the needle)
 */
const SemiCircleGauge = ({
  size = 300,
  strokeWidth = 50,
  value = 50,
  max = 100,
  circleBackground = '#E6E6E6',
  progressColor = '#554CE1',
  needleColor = '#000',
}) => {
  const halfSize = size / 2;
  const radius = halfSize - strokeWidth / 2;
  const centerX = halfSize;
  const centerY = halfSize;

  // Angle in radians from PI (180°) to 0 (0°)
  const angle = Math.PI - (value / max) * Math.PI;

  // Progress arc endpoint
  const x = centerX + radius * Math.cos(angle);
  const y = centerY - radius * Math.sin(angle);

  // Background arc path (half circle)
  const backgroundPath = `M ${centerX - radius}, ${centerY}
    A ${radius},${radius} 0 0 1 ${centerX + radius},${centerY}`;

  // Progress arc path
  const largeArcFlag = value / max > 0.5 ? 0 : 0  ;
  const progressPath = `M ${centerX - radius}, ${centerY}
    A ${radius},${radius} 0 ${largeArcFlag} 1 ${x},${y}`;

  return (
  <div className='relative w-full h-full'>
      <svg width={size} height={halfSize} className='absolute top-0 right-0 w-full h-full'>
        {/* Background arc */}
        <path
          d={backgroundPath}
          fill="none"
          stroke={circleBackground}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <path
          d={progressPath}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Needle */}
      
      </svg>
      <svg width={size*2} height={size+30} className='absolute top-0 right-0 w-full '>
      <line
        x1={centerX}
        y1={centerY+65}
        x2={x}
        y2={y}
        stroke={needleColor}
        strokeWidth={8}
      />
      </svg>
    
  </div>
  );
};

export default SemiCircleGauge;
