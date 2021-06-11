import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Button,
  Box,
} from "@material-ui/core";

// ******************************* components ****************************
import LoginScreen from "./loginScreen";
import SignupScreen from "./signupScreen";

import LocalsImage from "../../utils/images";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainPage: {
      backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
    },
    root: {
      maxWidth: "1100px",
      margin: theme.spacing(0, "auto"),
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    container: {},
    gridImg: {
      "& img": {
        maxWidth: "100%",
        height: "auto",
      },
    },
    gridBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
    },
    btn: {
      padding: theme.spacing(1, 2),
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        4.5
      )}px Ubuntu, sans-serif`,
      "&:first-child": {
        marginRight: theme.spacing(2),
      },
    },
  })
);

function SushantSirAssignment() {
  const classes = useStyles();
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleLoginChange = () => {
    setLoginOpen(true);
  };

  const handleSignupChange = () => {
    setSignupOpen(true);
  };

  return (
    <div className={classes.mainPage}>
      <div className={classes.root}>
        {!signupOpen && !loginOpen && (
          <Grid container className={classes.container} component={Box}>
            <Grid item xs={12} sm={6} className={classes.gridImg}>
              <img src={LocalsImage.LOGIN_IMG} alt="login" />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.gridBtn}>
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={handleLoginChange}
              >
                Log in
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
                onClick={handleSignupChange}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        )}
        {loginOpen && <LoginScreen />}
        {signupOpen && <SignupScreen />}
      </div>
    </div>
  );
}

export default SushantSirAssignment;
