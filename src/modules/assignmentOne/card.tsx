import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Button,
} from "@material-ui/core";

// ******************************** icons********
import CheckIcon from "@material-ui/icons/Check";

type AppProps = {
  dark?: boolean;
  light?: boolean;
  data?: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: (props: AppProps) =>
        props.light ? "var(--body-color)" : "var(--primary-color)",
      borderRadius: theme.spacing(2),
      padding: theme.spacing(2),
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    topDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: theme.spacing(1.5),
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        4
      )}px Ubuntu, sans-serif`,
      color: (props: AppProps) =>
        props.light ? "var(--black)" : "var(--white)",
    },
    headingBottomLine: {
      width: 20,
      height: 3,
      backgroundColor: (props: AppProps) =>
        props.light ? "var(--primary-color)" : "var(--body-color)",
      marginTop: theme.spacing(1.2),
    },
    headingRight: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        3
      )}px Ubuntu, sans-serif`,
      color: (props: AppProps) => (props.light ? "#2f2f2f" : "var(--white)"),
      textAlign: "right",
    },
    paragraphRight: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.8
      )}px Ubuntu, sans-serif`,
      textAlign: "right",
      color: (props: AppProps) => (props.light ? "#6e6d7a" : "var(--white)"),
    },
    middle: {
      margin: theme.spacing(3, 0, 0),
    },
    middleHeading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2
      )}px Ubuntu, sans-serif`,
      color: (props: AppProps) => (props.light ? "#2f2f2f" : "var(--white)"),
    },
    allListDiv: {
      margin: theme.spacing(3, 0, 6),
    },
    listDiv: {
      display: "flex",
      marginTop: theme.spacing(2),
    },
    listIcon: {
      color: (props: AppProps) =>
        props.light ? "var(--primary-color)" : "var(--body-color)",
      marginRight: theme.spacing(1.5),
      alignSelf: "flex-start",
    },
    listItem: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        1.8
      )}px Ubuntu, sans-serif`,
      color: (props: AppProps) => (props.light ? "#6e6d7a" : "var(--white)"),
      lineHeight: 1.3,
    },
    bottomDiv: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "auto",
    },
    bottomHeading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        1.8
      )}px Ubuntu, sans-serif`,
      color: (props: AppProps) => (props.light ? "#2f2f2f" : "var(--white)"),
      marginBottom: theme.spacing(2),
    },
    btn: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        1.8
      )}px Ubuntu, sans-serif`,
      textTransform: "capitalize",
      backgroundColor: (props: AppProps) =>
        props.light ? "var(--primary-color)" : "var(--body-color)",
      borderRadius: 10,
      padding: theme.spacing(1.5, 4),
      color: (props: AppProps) => (props.light ? "var(--white)" : "#2f2f2f"),
      "&:hover": {
        color: (props: AppProps) => (props.light ? "var(--white)" : "#2f2f2f"),
        backgroundColor: (props: AppProps) =>
          props.light ? "var(--primary-color)" : "var(--body-color)",
      },
    },
  })
);

function Card(props: AppProps) {
  const classes = useStyles(props);
  const { heading, rightHeading, rightSubHeading, list } = props.data;

  return (
    <div className={classes.root}>
      <div className={classes.topDiv}>
        <div>
          <Typography variant="body1" className={classes.heading}>
            {heading}
          </Typography>
          <div className={classes.headingBottomLine}></div>
        </div>
        <div>
          <Typography variant="body1" className={classes.headingRight}>
            {rightHeading}
          </Typography>
          <Typography variant="body1" className={classes.paragraphRight}>
            {rightSubHeading}
          </Typography>
        </div>
      </div>
      <div className={classes.middle}>
        <Typography variant="body1" className={classes.middleHeading}>
          {list?.heading}
        </Typography>
        <div className={classes.allListDiv}>
          {list?.list.map((item: any, index: any) => (
            <div key={index} className={classes.listDiv}>
              <CheckIcon fontSize="small" className={classes.listIcon} />
              <Typography variant="body1" className={classes.listItem}>
                {item}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.bottomDiv}>
        <Typography variant="body1" className={classes.bottomHeading}>
          view all the features
        </Typography>
        <div>
          <Button className={classes.btn}>start 14 day of free plan</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
