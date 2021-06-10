import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Paper,
  Typography,
  useTheme,
  MobileStepper,
  Button,
} from "@material-ui/core";

//  ******************************* icons ****************************
import DescriptionIcon from "@material-ui/icons/Description";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(3, 0),
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        2.2
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
      marginLeft: theme.spacing(0.5),
    },
    subheading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2.4
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
      margin: theme.spacing(1, 0, 0.5),
    },
    subheadingTime: {
      font: `normal ${theme.typography.fontWeightLight} ${theme.spacing(
        1.4
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
    },
    paragraph: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        1.6
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
      lineHeight: 1.5,
      margin: theme.spacing(2, 0),
    },
    stepper: {
      backgroundColor: "var(--white)",
    },
    asSeenHeading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        4.5
      )}px Roboto,sans-serif`,
      color: "var(--dark-greyTwo-color)",
      textAlign: "center",
    },
    imgGallery: {
      display: "grid",
      placeItems: "center",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gridColumnGap: 20,
      gridRowGap: 20,
    },
    imgPaper: {
      width: "100%",
      height: "50px",
      display: "grid",
      placeItems: "center",
    },
  })
);

function News() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Box component={Paper} width="75%" mx="auto" px={1.5} py={1}>
        <Box display="flex" alignItems="center">
          <DescriptionIcon color="primary" />
          <Typography variant="body1" className={classes.heading}>
            Latest News
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" className={classes.subheading}>
            LocalMonero/AgoraDesk now allows you to import reputation from
            LocalBitcoins and/or Paxful!
          </Typography>
          <Typography variant="body1" className={classes.subheadingTime}>
            2020-12-06 12:00 UTC
          </Typography>
        </Box>
        <Typography variant="body1" className={classes.paragraph}>
          If you have an account on LocalBitcoins or Paxful and you'd like to
          import the reputation you have worked for while trading on these
          platforms, you can now do so! To do it, simply open your settings page
          and navigate to the reputation import tab. Your LocalBitcoins/Paxful
          trades will be added to your total trade count and your other stats
          will be displayed on your user page.
        </Typography>
        <MobileStepper
          variant="dots"
          steps={10}
          position="static"
          activeStep={activeStep}
          className={classes.stepper}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 5}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
      <Box mt={3} width="75%" mx="auto">
        <Typography variant="body1" className={classes.asSeenHeading}>
          As seen on:
        </Typography>
        <Box className={classes.imgGallery} mt={3}>
          <Paper className={classes.imgPaper}>img one</Paper>
          <Paper className={classes.imgPaper}>img two</Paper>
          <Paper className={classes.imgPaper}>img three</Paper>
          <Paper className={classes.imgPaper}>img four</Paper>
          <Paper className={classes.imgPaper}>img five</Paper>
          <Paper className={classes.imgPaper}>img six</Paper>
          <Paper className={classes.imgPaper}>img seven</Paper>
          <Paper className={classes.imgPaper}>img eight</Paper>
        </Box>
      </Box>
    </div>
  );
}

export default News;
