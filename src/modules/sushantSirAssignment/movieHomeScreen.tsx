import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import { useState, useEffect, memo } from "react";

type AppProps = {
  movieData: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({ card: { maxWidth: 345 }, cardMedia: { height: 200 } })
);

function MovieHomeScreen({ movieData }: AppProps) {
  const classes = useStyles();
  const [updateRating, setUpdateRating] = useState(movieData);

  const findMovie = movieData.find((movie: any) => movie.id === 3);
  const filterMovie = movieData.filter(
    (movie: any) => movie.id !== findMovie.id
  );
  const ratingUpdate = (findMovie.rating = Math.floor(Math.random() * 5));
  // console.log("ratingUpdate", ratingUpdate);

  useEffect(() => {
    setInterval(() => {
      setUpdateRating([...filterMovie, findMovie]);
    }, 3000);
  }, [findMovie]);

  return (
    <Grid container>
      {updateRating.length > 0 &&
        updateRating.map((item: any, index: number) => {
          const { link, movieName, rating, releaseDate } = item;
          return (
            <Grid item xs={12} md={4} key={index}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={link}
                    title={movieName}
                  />
                  <CardContent>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography gutterBottom variant="h5" component="h2">
                        {movieName}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        rating: {rating}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {releaseDate}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
}

export default memo(MovieHomeScreen);
