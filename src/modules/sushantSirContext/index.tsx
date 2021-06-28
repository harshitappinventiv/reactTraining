import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
  Button,
  Grid,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import { useStateValue } from "./stateProvider";
import fakeData, { darkAndLight } from "./userData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "1100px",
      margin: theme.spacing(0, "auto"),
      minHeight: "100vh",
      paddingTop: theme.spacing(2),
    },
    item: {
      margin: theme.spacing(1, "auto"),
      "& .MuiCardMedia-root": {
        backgroundSize: "contain",
      },
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
  })
);

const getStyles = (mode: string) => ({
  app: {
    backgroundColor: darkAndLight[mode].backgroundColor,
  },
  text: {
    color: darkAndLight[mode].color,
  },
  theme: {
    color: darkAndLight[mode].highlight,
  },
  btn: {
    color: darkAndLight[mode].color,
    backgroundColor: darkAndLight[mode].backgroundColor,
  },
});

function SushantSirContext() {
  const { dispatch, state, mode, setTheme } = useStateValue();
  const [data] = useState(fakeData);
  const styles = getStyles(mode);
  const classes = useStyles();
  const { userData } = state;

  console.log(mode, setTheme);

  const handleChange = () => {
    setTheme();
  };

  return (
    <div style={styles.app}>
      <div className={classes.root}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h2" gutterBottom style={styles.text}>
            User
          </Typography>
          <FormControlLabel
            value={mode}
            control={
              <Switch
                style={styles.text}
                checked={mode === "dark" ? true : false}
                onChange={handleChange}
              />
            }
            label={<Typography style={styles.text}>{mode}</Typography>}
            labelPlacement="top"
          />
          <Button
            variant="contained"
            style={styles.btn}
            onClick={() => dispatch({ type: "GET_DATA", payload: data })}
          >
            Click and get user
          </Button>
        </Box>
        <Grid container>
          {userData &&
            userData.length > 0 &&
            userData.map((item: any, index: number) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className={classes.item}
                key={index}
              >
                <Card className={classes.card} key={index}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={
                        item.avatar
                          ? item.avatar
                          : "https://reqres.in/img/faces/5-image.jpg"
                      }
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={styles.text}
                      >
                        {item.first_name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={styles.text}
                      >
                        {item.last_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" style={styles.btn}>
                      Link
                    </Button>
                    <Button size="small" color="primary" style={styles.btn}>
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}

export default SushantSirContext;
