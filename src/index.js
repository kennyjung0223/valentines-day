import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot instead of render
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // Valentine's red
    },
  },
  typography: {
    fontFamily: '"Dancing Script", cursive',
  },
});

// Use createRoot to render your app
const container = document.getElementById('root');
const root = createRoot(container); // Create a root
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);