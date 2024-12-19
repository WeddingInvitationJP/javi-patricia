import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CountdownContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#FFFFFF',
  borderRadius: '50%',
  boxShadow: '0px 0px 9px rgba(155, 107, 125, 0.15)',
  margin: '20px 0',
  width: '250px',
  height: '250px',
  position: 'relative',
  textAlign: 'center',
});

const FlowerDecoration = styled(Box)({
  position: 'absolute',
  top: '-20px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '50px',
  height: '50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

const TimeContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: '10px',
});

const TimeBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Separator = styled(Typography)({
  fontSize: '1.5rem',
  color: '#796465',
  margin: '0 5px',
});

const Countdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <CountdownContainer>
      <FlowerDecoration />
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#97AAB1' }}>
        Falta
      </Typography>
      <TimeContainer>
        <TimeBox>
          <Typography variant="h4" sx={{ color: '#9B6B7D', fontWeight: 'bold' }}>
            {timeLeft.days}
          </Typography>
          <Typography variant="caption" sx={{ color: '#796465' }}>
            días
          </Typography>
        </TimeBox>
        <Separator>|</Separator>
        <TimeBox>
          <Typography variant="h4" sx={{ color: '#9B6B7D', fontWeight: 'bold' }}>
            {timeLeft.hours}
          </Typography>
          <Typography variant="caption" sx={{ color: '#796465' }}>
            hs
          </Typography>
        </TimeBox>
        <Separator>|</Separator>
        <TimeBox>
          <Typography variant="h4" sx={{ color: '#9B6B7D', fontWeight: 'bold' }}>
            {timeLeft.minutes}
          </Typography>
          <Typography variant="caption" sx={{ color: '#796465' }}>
            min
          </Typography>
        </TimeBox>
        <Separator>|</Separator>
        <TimeBox>
          <Typography variant="h4" sx={{ color: '#9B6B7D', fontWeight: 'bold' }}>
            {timeLeft.seconds}
          </Typography>
          <Typography variant="caption" sx={{ color: '#796465' }}>
            seg
          </Typography>
        </TimeBox>
      </TimeContainer>
    </CountdownContainer>
  );
};

export default Countdown;
