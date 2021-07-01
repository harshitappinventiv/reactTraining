import { makeStyles, createStyles, Theme } from "@material-ui/core";
import Header from "./header";
import Slidebar from "./slidebar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainApp: {},
    mainPage: {
      display: "flex",
    },
  })
);

function RevisionAssignment() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainApp}>
        <Header />
        <div className={classes.mainPage}>
          <Slidebar />
          <div>schedule page</div>
        </div>
      </div>
    </>
  );
}

export default RevisionAssignment;
