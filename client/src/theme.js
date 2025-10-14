import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#d5d5d5",
    200: "#ababac",
    300: "#818082",
    400: "#575659",
    500: "#2d2c2f",
    600: "#242326",
    700: "#1b1a1c",
    800: "#121213",
    900: "#090909",
  },
  secondary: {
    100: "#fff4ce",
    200: "#ffe99d",
    300: "#ffdd6b",
    400: "#ffd23a",
    500: "#ffc709",
    600: "#cc9f07",
    700: "#997705",
    800: "#665004",
    900: "#332802",
  },
  neutral: {
    100: "#fcfbf8",
    200: "#faf6f1",
    300: "#f7f2eb",
    400: "#f5ede4",
    500: "#f2e9dd",
    600: "#c2bab1",
    700: "#918c85",
    800: "#615d58",
    900: "#302f2c",
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
      light: shades.primary[400],
      dark: shades.primary[600],
      contrastText: '#ffffff',
    },
    secondary: {
      main: shades.secondary[500],
      light: shades.secondary[400],
      dark: shades.secondary[600],
      contrastText: shades.primary[500],
    },
    background: {
      default: shades.neutral[100],
      paper: '#ffffff',
    },
    text: {
      primary: shades.primary[500],
      secondary: shades.primary[700],
    },
  },
  typography: {
    fontFamily: '"Jost", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: 14,
    h1: {
      fontFamily: '"Jost", sans-serif',
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: 700,
      lineHeight: 1.1,
      color: shades.primary[500],
    },
    h2: {
      fontFamily: '"Jost", sans-serif',
      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
      fontWeight: 600,
      lineHeight: 1.2,
      color: shades.primary[500],
    },
    h3: {
      fontFamily: '"Jost", sans-serif',
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      fontWeight: 600,
      lineHeight: 1.3,
      color: shades.primary[500],
    },
    h4: {
      fontFamily: '"Jost", sans-serif',
      fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
      fontWeight: 500,
      lineHeight: 1.4,
      color: shades.primary[500],
    },
    h5: {
      fontFamily: '"Jost", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Jost", sans-serif',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.7,
      color: shades.primary[700],
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: shades.primary[600],
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
      fontSize: '0.875rem',
      letterSpacing: '0.025em',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: shades.primary[600],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          fontFeatureSettings: "'kern' 1, 'liga' 1",
          textRendering: 'optimizeLegibility',
          backgroundColor: shades.neutral[100],
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: shades.primary[500],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          fontWeight: 500,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: shades.primary[600],
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: shades.secondary[600],
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'box-shadow 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export { theme };
export default theme;