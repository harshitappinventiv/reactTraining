import { makeStyles, createStyles, Theme } from "@material-ui/core";

// ******************************* components *******************************
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

type AppProps = {
  children: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    mainPage: {
      marginLeft: 62,
      backgroundColor: "var(--background-color)",
      width: "100%",
    },
  })
);

function Container({ children }: AppProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.mainPage}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Container;
