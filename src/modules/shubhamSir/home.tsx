import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      textAlign: "center",
    },
  })
);

function Home() {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        variant="h1"
        className={classes.heading}
        color="secondary"
        gutterBottom
      >
        Welcome !
      </Typography>
      <Typography
        variant="h1"
        className={classes.heading}
        color="secondary"
        gutterBottom
      >
        to
      </Typography>
      <Typography
        variant="h1"
        className={classes.heading}
        color="secondary"
        gutterBottom
      >
        Amazon
      </Typography>
    </Box>
  );
}

export default Home;
