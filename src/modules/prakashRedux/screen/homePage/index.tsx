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
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_DATA_SAGA } from "../../../../utils/actionTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainPage: {
      backgroundImage: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
    },
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

function HomePage() {
  const classes = useStyles();
  const { userData } = useSelector((state: any) => state.getUserReducer);
  const dispatch = useDispatch();
  //   console.log(userData);
  return (
    <div className={classes.mainPage}>
      <div className={classes.root}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h2" gutterBottom color="secondary">
            User
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch({ type: GET_USER_DATA_SAGA })}
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
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.first_name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.last_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Link
                    </Button>
                    <Button size="small" color="primary">
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

export default HomePage;
