import { createTheme } from '@mui/material/styles';

// 🎨 Custom brand theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0066cc', // brand blue
    },
    secondary: {
      main: '#ff9900', // accent orange
    },
    background: {
      default: '#f5f7fa', // soft light gray
    },
  },
  shape: {
    borderRadius: 12, // softer rounded corners
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none', // no all-caps
      fontWeight: 600,
    },
  },
});

export default theme;
