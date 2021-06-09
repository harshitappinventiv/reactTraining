import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgb(21, 101, 192)",
      main: "#1565c0",
      dark: "rgb(14, 70, 134)",
    },
    secondary: {
      light: "rgb(129, 199, 132)",
      main: "#388538",
      dark: "rgb(39, 93, 39)",
    },
  },
  spacing: 10,
});

export default theme;
