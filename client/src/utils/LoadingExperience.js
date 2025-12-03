import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const LoadingExperience = ({ show }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const statusMessages = [
    "Waking up server...",
    "Connecting to database...",
    "Loading catalog...",
    "Fetching collection...",
    "Indexing records...",
    "Preparing images...",
    "Optimizing data...",
    "Almost ready..."
  ];

  useEffect(() => {
    if (!show) {
      setProgress(0);
      setMessageIndex(0);
      return;
    }
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        
        const increment = Math.random() * 0.5 + 0.2;
        const newProgress = Math.min(prev + increment, 95);
        
        const newMessageIndex = Math.floor(newProgress / 12);
        if (newMessageIndex !== messageIndex && newMessageIndex < statusMessages.length) {
          setMessageIndex(newMessageIndex);
        }
        
        return newProgress;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [show, messageIndex, statusMessages.length]);

  if (!show) return null;

  return (
    <Box
      sx={{
        padding: '40px 20px',
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Main Text */}
      <Box sx={{ maxWidth: '550px', width: '100%', marginBottom: '48px' }}>
        <Typography
          sx={{
            fontSize: '15px',
            lineHeight: 1.8,
            color: '#2d2c2f',
            fontWeight: 400,
            opacity: 0.85,
            fontFamily: 'Jost, sans-serif',
          }}
        >
          Our server is taking a quick nap. Hunting vinyl all over the world and running a tiny indie shop is hard work, you know.
          <br />
          <br />
          You're looking at the demo website of <strong style={{ fontWeight: 500 }}>Allmyrecords</strong>, a small boutique record store in Barcelona. To keep things simple, we put our site to sleep when no one's visiting. It usually wakes up in 30-90 seconds.
          <br />
          <br />
          While that happens, feel free to dive into <strong style={{ fontWeight: 500 }}>About Us</strong> and discover the stories behind the project. When you're ready for the practical side, just scroll down a little—shipping, grading, and how to reach us are waiting at the bottom.
        </Typography>
      </Box>

      {/* Progress Section */}
      <Box sx={{ width: '100%', maxWidth: '500px' }}>
        {/* Progress Bar */}
        <Box
          sx={{
            width: '100%',
            height: '3px',
            background: '#e5e5e5',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: `${progress}%`,
              background: '#2d2c2f',
              transition: 'width 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 12px rgba(45, 44, 47, 0.4)',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                animation: 'shimmer 2s infinite',
                '@keyframes shimmer': {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(100%)' }
                }
              }
            }}
          />
        </Box>

        {/* Status Message - Below Progress Bar */}
        <Typography
          sx={{
            textAlign: 'center',
            color: '#2d2c2f',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.3px',
            fontFamily: 'Jost, sans-serif',
            marginTop: '16px',
            minHeight: '18px',
            opacity: 0.5,
          }}
        >
          {statusMessages[messageIndex]}
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingExperience;
