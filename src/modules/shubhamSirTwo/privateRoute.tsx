import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    // Show the component only when the access token is available in local storage in
    // Otherwise, redirect the user to /signuppage
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("accessToken") ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
