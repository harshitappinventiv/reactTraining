import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
  Button,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    card: {
      maxWidth: 345,
      "& .MuiCardMedia-root": {
        backgroundSize: "contain",
      },
    },
    media: {
      height: 200,
    },
  })
);

function ProductDetails() {
  const classes = useStyles();
  const location = useLocation();
  const { state }: any = location;

  return (
    <Box pb={8} className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h2" gutterBottom color="secondary">
          Product details
        </Typography>
        {/* <Box>
          <Button variant="contained" color="primary">
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "20px" }}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Box> */}
      </Box>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              state?.avatar
                ? state.avatar
                : "https://reqres.in/img/faces/5-image.jpg"
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {state.first_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {state.last_name}
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
    </Box>
  );
}

export default ProductDetails;
