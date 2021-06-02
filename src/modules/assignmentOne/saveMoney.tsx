import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
} from "@material-ui/core";

// ******************************** images********
import LocalsImage from "../../utils/images";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "var(--primary-color)",
      borderRadius: theme.spacing(2),
      padding: theme.spacing(4),
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    heading: {
      font: `normal 100 ${theme.spacing(4.5)}px Ubuntu, sans-serif`,
      color: "var(--white)",
      lineHeight: 1.11,
      "& span": {
        fontWeight: theme.typography.fontWeightBold,
      },
    },
    subheading: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.8
      )}px Ubuntu, sans-serif`,
      color: "var(--white)",
      marginTop: theme.spacing(3),
    },
    babyImg: {
      width: "50%",
      margin: "auto",
    },
    imgFit: {
      width: "100%",
      height: "100%",
    },
  })
);

function SaveMoney() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Typography variant="h1" className={classes.heading}>
          Save your <br /> <span>money now.</span>
        </Typography>
        <Typography variant="body1" className={classes.subheading}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          velit sed corrupti fugit dolorum pariatur
        </Typography>
        <Typography variant="body1" className={classes.subheading}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          velit sed corrupti fugit dolorum pariatur
        </Typography>
        <Box className={classes.babyImg}>
          <img
            src={LocalsImage.BABY}
            alt="baby images"
            className={classes.imgFit}
          />
        </Box>
      </Box>
    </>
  );
}

export default SaveMoney;
