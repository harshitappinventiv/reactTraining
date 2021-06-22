import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    heading: {
      textAlign: "center",
    },
  })
);

function Home() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h1" className={classes.heading} color="secondary">
        Welcome !
      </Typography>
    </Box>
  );
}

export default Home;
