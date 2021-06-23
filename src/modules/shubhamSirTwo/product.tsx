import { useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import dataArray from "./fakeData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

function Product() {
  const classes = useStyles();
  const [product] = useState(dataArray);
  return (
    <Box pb={8}>
      <Typography variant="h2" gutterBottom color="secondary">
        Product
      </Typography>
      <Grid container>
        {product.length > 0 &&
          product.map((item) => (
            <>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                className={classes.item}
                key={item.id}
              >
                <Card className={classes.card}>
                  <Link to={`/product/${item.id}`}>
                    <CardActionArea>
                      <CardMedia className={classes.media} image={item.img} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.available}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                  <CardActions>
                    <Button size="small" color="primary">
                      Buy
                    </Button>
                    <Button size="small" color="primary">
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          ))}
      </Grid>
    </Box>
  );
}

export default Product;
