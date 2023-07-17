import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Confetti from 'react-dom-confetti';

const conf = {
  angle: 90,
  spread: 400,
  startVelocity: 35,
  elementCount: 200,
  dragFriction: 0.09,
  duration: 3000,
  stagger: 5,
  width: '10px',
  height: '8px',
  perspective: '1000px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

export const WinnerConfetti: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Confetti active={isActive} config={conf} />
    </Box>
  );
};
