import { useState, useEffect } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import lime from "@material-ui/core/colors/lime";

type AppProps = {
  handleLogOut?: () => void;
  token?: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    logo: {
      color: "var(--white)",
    },
    navLink: {
      color: "var(--white)",
    },
    link: {
      fontSize: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  })
);

function Header({ handleLogOut, token }: AppProps) {
  const classes = useStyles();
  const [tokenn, setTokenn] = useState(token);
  
  useEffect(() => {
    setTokenn(!!localStorage.getItem("accessToken"));
  });

  return (
    <AppBar>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Link to="/">
            <Typography variant="h6" className={classes.logo}>
              Harshit
            </Typography>
          </Link>
          <Box display="flex" alignItems="center">
            <NavLink
              exact
              to="/"
              activeStyle={{ color: lime[300], textDecoration: "underline" }}
              className={classes.navLink}
            >
              <Typography variant="h6" className={classes.link}>
                Home
              </Typography>
            </NavLink>
            {tokenn && (
              <NavLink
                exact
                to="/product"
                activeStyle={{ color: lime[300], textDecoration: "underline" }}
                className={classes.navLink}
              >
                <Typography variant="h6" className={classes.link}>
                  Product
                </Typography>
              </NavLink>
            )}
            {!tokenn ? (
              <Link to="/signup">
                <Button variant="contained" color="secondary">
                  Sign Up
                </Button>
              </Link>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogOut}
              >
                Log out
              </Button>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
