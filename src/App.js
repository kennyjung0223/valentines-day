import React, { useState } from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import './App.css';

function App() {
  const [isYes, setIsYes] = useState(false);
  const [isNo, setIsNo] = useState(false);
  const [isLocked, setIsLocked] = useState(false); // New state to lock buttons

  const handleYes = () => {
    setIsYes(true);
    setIsNo(false);
    setIsLocked(true); // Lock the buttons after clicking "Yes"
  };

  const handleNo = () => {
    if (!isLocked) { // Only allow "No" if buttons aren't locked
      setIsNo(true);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <img
        src={isNo ? "/valentines-day/images/sad-dog.jpg" : "/valentines-day/images/dog.jpg"} // Replace with your dog image paths
        alt="Dog"
        style={{ width: '200px', marginBottom: '20px' }}
      />
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Dancing Script", cursive',
          color: '#d32f2f', // Dark red text
          marginBottom: '20px',
        }}
      >
        나리, will you be my Valentine?
      </Typography>
      {!isLocked && (
        <Box sx={{ marginTop: '20px' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#d32f2f',
              color: '#fff',
              margin: '5px',
              fontFamily: '"Pacifico", cursive',
              '&:hover': {
                backgroundColor: '#b71c1c',
              },
            }}
            onClick={handleYes}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#d32f2f',
              color: '#fff',
              margin: '5px',
              fontFamily: '"Pacifico", cursive',
              '&:hover': {
                backgroundColor: '#b71c1c',
              },
            }}
            onClick={handleNo}
          >
            No
          </Button>
        </Box>
      )}
      {isNo && (
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Great Vibes", cursive',
            color: '#d32f2f',
            marginTop: '10px',
          }}
        >
          Now dog is sad 🐶😢
        </Typography>
      )}
      {isYes && (
        <>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Dancing Script", cursive',
              color: '#c62828', // Darker red for celebration text
              marginTop: '20px',
            }}
          >
            Yay! ❤️🥩🍿
          </Typography>
          {/* Falling roses */}
          {Array.from({ length: 20 }).map((_, index) => (
            <img
              key={index}
              src="/valentines-day/images/rose.png" // Replace with your rose image path
              alt="Rose"
              className="rose"
              style={{
                left: `${Math.random() * 100}vw`, // Random horizontal position
                animationDelay: `${Math.random() * 5}s`, // Random delay
                transform: `scale(${Math.random() * 1.5 + 0.5})`, // Random scale between 0.5x and 2x
              }}
            />
          ))}
        </>
      )}
    </Container>
  );
}

export default App;