"use client"

import { createTheme, ThemeOptions } from "@mui/material";

export const lightTheme = createTheme ({
  palette: {
    primary: {
      main: '#7D49CA',
    },
    secondary: {
      main: '#B893EB',
    },
    background: {
      paper: '#fafafa',
    },
    text: {
      primary: '#070609',
      secondary: '#000',
    },
    info: {
      main: '#9351F0',
    },
  },
  typography: {
    fontFamily: 'Parkinsans',
    h1: {
      fontSize: 64,
      fontWeight: 500,
      letterSpacing: '0em',
    },
    h2: {
      fontWeight: 500,
      fontSize: 48,
      letterSpacing: '0em',
    },
    h3: {
      fontSize: 36,
      fontWeight: 500,
    },
    h4: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '0em',
    },
    body1: {
      fontSize: 16,
      letterSpacing: '0em',
    },
    body2: {
      fontSize: 16,
      fontWeight: 100,
      letterSpacing: '0em',
    },
    subtitle1: {
      fontSize: 12,
      letterSpacing: '0em',
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 100,
      letterSpacing: '0em',
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#fff',
            borderRadius: '10px',
            padding: '5px 20px 5px 20px',
          },
        },
        {
            props: { variant: 'outlined' },
            style: {
              color: '#000',
              borderRadius: '10px',
              padding: '05px 20px 5px 20px'
            },
          },
      ],


      styleOverrides: {
        contained: {
            color: '#fff',
        },
        outlined: {
            color: '#000'
        },
        sizeSmall: {
          fontSize: '0.55rem',
          padding: '2px 4px', 
          minWidth: '100%',  
        },
      }
    },
  },
});

export const darkTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#6835B6',
    },
    secondary: {
      main: '#38146C',
    },
    background: {
      paper: '#08050A',
      default: '#08050A',
    },
    text: {
      primary: '#F7F6F9',
    },
    info: {
      main: '#510FAE',
    },
  },
  typography: {
    h1: {
      fontSize: 64,
      fontWeight: 500,
      letterSpacing: '0em',
    },
    h2: {
      fontWeight: 500,
      fontSize: 48,
      letterSpacing: '0em',
    },
    h3: {
      fontSize: 36,
      fontWeight: 500,
    },
    h4: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '0em',
    },
    body1: {
      fontSize: 16,
      letterSpacing: '0em',
    },
    body2: {
      fontSize: 16,
      fontWeight: 100,
      letterSpacing: '0em',
    },
    subtitle1: {
      fontSize: 12,
      letterSpacing: '0em',
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 100,
      letterSpacing: '0em',
    },
  },
};