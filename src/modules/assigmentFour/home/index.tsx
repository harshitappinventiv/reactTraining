import { makeStyles, createStyles, Theme } from "@material-ui/core";

// ******************************* components *******************************
import BuyCard from "./buyCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 75,
      padding: theme.spacing(0, 1),
    },
  })
);

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BuyCard />
    </div>
  );
}

export default Home;
