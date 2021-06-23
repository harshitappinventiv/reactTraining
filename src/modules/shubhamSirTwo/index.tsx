import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  CircularProgress,
  Backdrop,
} from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

// ******************************* components ********
import Header from "./header";
import Home from "./home";
import PrivateRoute from "./privateRoute";
import Login from "./login";
import Product from "./product";
import ProductDetails from "./productDetails";

export interface UserSchema {
  id: number;
  name: string;
  lname: string;
  email: string;
  password: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainPage: {
      backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
    },
    root: {
      maxWidth: "1100px",
      margin: theme.spacing(0, "auto"),
      minHeight: "100vh",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

function ShubhamSir() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(!!localStorage.getItem("accessToken"));

  const handleLogOut = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("accessToken");
      setToken(!token);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className={classes.mainPage}>
        <Header handleLogOut={handleLogOut} token={token} />
        <div className={classes.root}>
          <Box pt={9}>
            <Switch>
              <Route exact path="/login">
                <Login setLoading={setLoading} />
              </Route>
              <Route exact path="/" component={Home} />
              {/* protect routes */}
              <PrivateRoute
                exact
                path="/product/:id"
                component={ProductDetails}
              />
              <PrivateRoute exact path="/product" component={Product} />
            </Switch>
          </Box>
        </div>
      </div>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default ShubhamSir;
