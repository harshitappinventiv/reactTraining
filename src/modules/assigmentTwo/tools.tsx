import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Grid,
} from "@material-ui/core";

type AppProps = {
  data: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    mainGrid: {
      backgroundColor: "var(--white)",
      padding: theme.spacing(5, 0),
      "&:last-child": {
        borderBottomLeftRadius: theme.spacing(3),
        borderBottomRightRadius: theme.spacing(3),
      },
    },
    mainGridChange: {
      backgroundColor: "#e3e2f1",
      flexDirection: "row-reverse",
    },
    imgGrid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    imgDiv: {
      width: "30%",
    },
    imgFit: {
      width: "100%",
      height: "100%",
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        3.5
      )}px Ubuntu, sans-serif`,
      color: "#2f2f2f",
    },
    subheading: {
      font: `normal 500 ${theme.spacing(2)}px Ubuntu, sans-serif`,
      color: "#6e6d7a",
      lineHeight: 1.4,
    },
    contentDiv: {
      paddingRight: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    contentDivChange: {
      padding: theme.spacing(0, 0, 0, 5),
    },
  })
);

function Tools(props: AppProps) {
  const classes = useStyles();
  const { data } = props;
  return (
    <div className={classes.root}>
      {data.length > 0 &&
        data.map((item: any, index: number) => {
          const { change, heading, subheading, img } = item;
          return (
            <Grid
              key={index}
              container
              className={`${classes.mainGrid} ${
                change && classes.mainGridChange
              }`}
            >
              <Grid item xs={12} sm={4} className={classes.imgGrid}>
                <div className={classes.imgDiv}>
                  <img src={img} alt={img} className={classes.imgFit} />
                </div>
              </Grid>
              <Grid item xs={12} sm={8}>
                <div
                  className={`${classes.contentDiv} ${
                    change && classes.contentDivChange
                  }`}
                >
                  <Typography variant="h6" className={classes.heading}>
                    {heading}
                  </Typography>
                  <Typography variant="h6" className={classes.subheading}>
                    {subheading}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          );
        })}
    </div>
  );
}

export default Tools;
