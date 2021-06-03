import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Typography,
} from "@material-ui/core";

// ******************************************** componants ********************************
import SaveMoney from "./saveMoney";
import Card from "./card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--body-color)",
      padding: theme.spacing(4, 0),
    },
    container: {
      maxWidth: "var(--max-width)",
      backgroundColor: "var(--white)",
      borderRadius: theme.spacing(3),
      padding: theme.spacing(4),
      width: "85%",
    },
    rightContainer: {
      paddingLeft: theme.spacing(4),
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    headerDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(4, 0),
    },
    heading: {
      font: `normal 100 ${theme.spacing(4.5)}px Ubuntu, sans-serif`,
      lineHeight: 1,
      "& span": {
        fontWeight: theme.typography.fontWeightBold,
      },
    },
    corporate: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.8
      )}px Ubuntu, sans-serif`,
      textAlign: "right",
    },
    contact: {
      color: "var(--primary-color)",
    },
    cardLeft: {
      paddingRight: theme.spacing(1.5),
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2, 0, 0),
      },
    },
    cardRight: {
      paddingLeft: theme.spacing(1.5),
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2, 0, 0),
      },
    },
  })
);

// ******************************** data create fuction ****************
function createData(
  heading: string,
  rightHeading: string,
  rightSubHeading: string,
  list: any
) {
  return {
    heading,
    rightHeading,
    rightSubHeading,
    list,
  };
}

const lightData = createData("Lite", "Free", "with restriction", {
  heading: "Plain includes:",
  list: [
    "Lorem ipsum dolor sit amet consectetur",
    "adipisicing elit. Facilis architecto repellendus",
    "amet sunt veniam aperiam lf i ife",
    "blanditiis, quia ut maxime. Tempore.",
  ],
});

const darkData = createData("Pro", "29$", "monthly", {
  heading: "All of lite plus:",
  list: [
    "Lorem ipsum dolor sit amet consectetur",
    "adipisicing elit. Facilis architecto repellendus",
    "amet sunt veniam aperiam lf i ife",
    "blanditiis, quia ut maxime. Tempore.",
  ],
});

function AssigmentOne() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <SaveMoney />
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={classes.rightContainer}>
              <div className={classes.headerDiv}>
                <Typography variant="h2" className={classes.heading}>
                  Start now <br />
                  your <span>free plan</span>
                </Typography>
                <div>
                  <Typography variant="body1" className={classes.corporate}>
                    Are you a corporate?
                  </Typography>
                  <Typography
                    variant="body1"
                    className={[classes.contact, classes.corporate].join(" ")}
                  >
                    Contact us
                  </Typography>
                </div>
              </div>
              <Grid container style={{ height: "100%" }}>
                <Grid item xs={12} md={6}>
                  <div className={classes.cardLeft}>
                    <Card light data={lightData} />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={classes.cardRight}>
                    <Card dark data={darkData} />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AssigmentOne;
