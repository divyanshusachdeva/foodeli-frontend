import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // This sets the theme to dark mode
    primary: {
      main: "#EB0029", // Customize the primary color to your preference
    },
    secondary: {
      main: "#5B86E5", // Customize the secondary color to your preference
    },
    black: {
      main: "#242B2E",
    },
    background: {
      main: "#242B3F",
      default: "#191c29",
      paper: "#0D0D0D",
    },
    textColor: {
      main: "#F2F3F4",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeightBold: 700,
  }
});

export default darkTheme;
